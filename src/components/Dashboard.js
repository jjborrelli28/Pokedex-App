import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useFetchList } from "../helpers/useFetchList";
import PokemonCard from "./PokemonCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spinner from "./Spinner";
import Button from "@mui/material/Button";
import { useFetchPage } from "../helpers/useFetchPage";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

export const Dashboard = () => {
  const { list, count } = useFetchList();

  const { pokemons, page } = useFetchPage(list);

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    event.preventDefault();
    const action = {
      type: types.pagination,
      payload: value,
    };
    dispatch(action);
  };

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
                <PokemonCard pokemon={pokemon} key={pokemon.name} />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(count / 20)}
              color="error"
              page={page}
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
