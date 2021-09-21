import React from "react";
import Grid from "@mui/material/Grid";
import { useFetchList } from "../helpers/useFetchList";
import PokemonCard from "./PokemonCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spinner from "./Spinner";
import { useFetchPage } from "../helpers/useFetchPage";
import { useDispatch } from "react-redux";
import { types } from "../types/types";
import { useFormSearch } from "../helpers/useFormSearch";
import { FaSearch } from "react-icons/fa";

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

  const { value, handleInputChange, handleInputSearch } = useFormSearch();

  return (
    <>
      {pokemons ? (
        <div className="container">
          <div className="console-container">
            <form className="input-container" onSubmit={handleInputSearch}>
              <input
                type="text"
                placeholder="Search by name"
                value={value}
                onChange={handleInputChange}
              />
              <button onClick={handleInputSearch}>
                <FaSearch />
              </button>
            </form>
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
