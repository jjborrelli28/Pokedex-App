import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useFetch } from "../helpers/useFetch";
import PokeCard from "./PokeCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Dashboard = () => {
  const [page, setPage] = useState({
    url: `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`,
    number: 1,
  });

  const { list, count, previus, next } = useFetch(page.url);

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
    <Container>
      <h1 className="title">Pokedex</h1>
      <Grid container spacing={2}>
        {pokemons ? (
          pokemons.map((pokemon) => (
            <Grid item md={3} sm={4} xs={12}>
              <PokeCard pokemon={pokemon} />
            </Grid>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </Grid>
      {pokemons && (
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(count / 20)}
            variant="outlined"
            color="primary"
            page={page.number}
            onChange={handleChange}
            className="pagination"
          />
        </Stack>
      )}
    </Container>
  );
};
