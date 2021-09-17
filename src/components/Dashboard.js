import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useFetch } from "../helpers/useFetch";
import PokeCard from "./PokeCard";
import Pagination from "@mui/material/Pagination";

export const Dashboard = () => {
  const [page, setPage] = useState(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
  );
  const { list, count, previus, next } = useFetch(page);

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const promises =
      list &&
      list.map((pokemon) =>
        fetch(pokemon.url).then((resp) => resp.json().then((data) => data))
      );

    promises && Promise.all(promises).then((result) => setPokemons(result));
  }, [list]);

  const handleChange = (e) => {
    console.log(e.target);
    setPage(next);
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
        <Pagination
          count={Math.ceil(count / 20)}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      )}
    </Container>
  );
};
