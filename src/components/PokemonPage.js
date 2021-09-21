import React from "react";
import { useParams } from "react-router";
import { useFetchPokemon } from "../helpers/useFetchPokemon";
import Spinner from "./Spinner";

export const PokemonPage = () => {
  const { pokemonId } = useParams();

  const { data } = useFetchPokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return (
    <>
      {data ? (
        <div className="pokemon-page-container">
          <div className="name-id">
            <h1>
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}{" "}
              <span>
                {" "}
                {(data.id < 10 && `N.°00${data.id}`) ||
                  (data.id >= 10 && data.id < 100 && `N.°0${data.id}`) ||
                  (data.id >= 100 && `N.°${data.id}`)}
              </span>
            </h1>
          </div>
          <div className="pokemon-data-container">
            <div className="pokemon-img-container"></div>
            <div className="pokemon-info-container"></div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
