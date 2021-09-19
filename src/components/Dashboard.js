import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFetchList } from "../helpers/useFetchList";
import PokeCard from "./PokeCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spinner from "./Spinner";
import Button from "@mui/material/Button";

export const Dashboard = () => {
  const [page, setPage] = useState({
    url: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`,
    number: 1,
  });

  const { list, count } = useFetchList(page.url);

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const promises =
      list &&
      list.map((pokemon) =>
        fetch(pokemon.url).then((resp) => resp.json().then((data) => data))
      );

    promises && Promise.all(promises).then((result) => setPokemons(result));
  }, [list]);

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage({
      url: `https://pokeapi.co/api/v2/pokemon/?offset=${
        (value - 1) * 20
      }&limit=20`,
      number: value,
    });
  };

  console.log(pokemons);

  return (
    <>
      {pokemons ? (
        <div className="container">
          <div className="console-container">
            <div className="input-container">
              <input type="text" placeholder="Search by name" />
              <Button variant="contained" color="error">
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </div>
          <Grid container spacing={4}>
            {pokemons.map((pokemon) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={pokemon.name}>
                <PokeCard pokemon={pokemon} key={pokemon.name} />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2}>
            <Pagination
              count={count && Math.ceil(count / 20)}
              color="error"
              page={page.number}
              onChange={handleChange}
              className="pagination"
            />
          </Stack>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
