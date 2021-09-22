import React, { useState } from "react";
import { useParams } from "react-router";
import { useFetchPokemon } from "../helpers/useFetchPokemon";
import Spinner from "./Spinner";
import imageNoAvailable from "../styles/components/image-no-available.png";
import { useTheme } from "@material-ui/core/styles";
import { CgPokemon } from "react-icons/cg";
import { useFetchSpecies } from "../helpers/useFetchSpecies";

export const PokemonPage = () => {
  const { pokemonId } = useParams();

  const { data } = useFetchPokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  const { species, textBlue, textRed } = useFetchSpecies(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
  );

  const [showBLue, setShowBLue] = useState(true);

  const [showRed, setShowRed] = useState(false);

  const { palette } = useTheme();

  console.log(data);

  console.log(species);
  
  return (
    <>
      {data && species ? (
        <div className="pokemon-page-container">
          <div className="name-id animate__animated animate__fadeIn animate__slow">
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
          <div className="pokemon-data-container animate__animated animate__fadeIn animate__slow">
            <div className="pokemon-img-container">
              <img
                src={
                  data.sprites.other["official-artwork"]["front_default"] ||
                  imageNoAvailable
                }
                alt={data.name}
                style={{
                  backgroundImage: `linear-gradient(to top, ${
                    palette[data.types[0].type.name].main
                  }, ${
                    data.types[1]
                      ? palette[data.types[1].type.name].main
                      : `#ffffff`
                  })`,
                }}
              />
            </div>
            <div className="pokemon-info-container">
              <div className="text_entries">
                <div className="text">
                  <h3>{showBLue ? textBlue : textRed}</h3>
                </div>
                <div className="versions">
                  <h3>Versions:</h3>
                  <CgPokemon
                    className={`pokeball-blue ${
                      showBLue && `pokeball-blue-select`
                    }`}
                    onClick={() => {
                      setShowBLue(true);
                      setShowRed(false);
                    }}
                  />
                  <CgPokemon
                    className={`pokeball-red ${
                      showRed && `pokeball-red-select`
                    }`}
                    onClick={() => {
                      setShowBLue(false);
                      setShowRed(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
/*
flavor_text_entries: Array(94)
0:
flavor_text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
language: {name: 'en', url: 'https://pokeapi.co/api/v2/language/9/'}
version: {name: 'red', url: 'https://pokeapi.co/api/v2/version/1/'}
*/
