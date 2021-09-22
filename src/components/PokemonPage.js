import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetchPokemon } from "../helpers/useFetchPokemon";
import Spinner from "./Spinner";
import imageNoAvailable from "../styles/components/image-no-available.png";
import { useTheme } from "@material-ui/core/styles";
import { CgPokemon } from "react-icons/cg";
import { useFetchSpecies } from "../helpers/useFetchSpecies";
import { BiMaleSign } from "react-icons/bi";
import { BiFemaleSign } from "react-icons/bi";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

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

  const [weaknessesState, setWeaknessesState] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const promises =
      data &&
      data.types.map((type) =>
        fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`)
          .then((resp) => resp.json())
          .then((data) => data["damage_relations"]["double_damage_from"])
      );
    promises &&
      Promise.all(promises).then((response) =>
        setWeaknessesState(
          response.length > 1
            ? response[0].concat(response[1]).map((e) => e.name)
            : response[0].map((e) => e.name)
        )
      );
  }, [data]);

  const SetWeaknesses = new Set(weaknessesState);

  const weaknesses = [...SetWeaknesses];

  const handleGoBack = () => {
    history.push(`/dashboard/`);
  };

  const handlePrevius = () => {
    if (pokemonId !== 1) {
      history.push(`/dashboard/${parseInt(pokemonId) - 1}`);
    }
  };

  const handleNext = () => {
    if (pokemonId !== 898) {
      history.push(`/dashboard/${parseInt(pokemonId) + 1}`);
    }
  };

  return (
    <>
      {data && species ? (
        <div className="pokemon-page-container">
          <div className="name-id animate__animated animate__fadeIn animate__slow">
            <button className="btn-prev-next" onClick={handlePrevius}>
              <GrPrevious />
            </button>
            <h1>
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}{" "}
              <span>
                {" "}
                {(data.id < 10 && `N.°00${data.id}`) ||
                  (data.id >= 10 && data.id < 100 && `N.°0${data.id}`) ||
                  (data.id >= 100 && `N.°${data.id}`)}
              </span>
            </h1>
            <button className="btn-prev-next" onClick={handleNext}>
              <GrNext />
            </button>
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
              <div className="text-entries">
                <div className="text">
                  <p>{showBLue ? textBlue : textRed}</p>
                </div>
                <div className="versions">
                  <p>Versions:</p>
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
              <div className="stats">
                <div className="grid grid1">
                  <p>Height</p>
                  <h5>{(data.height / 10).toFixed(1)} m</h5>
                  <p>Weight</p>
                  <h5>{(data.weight / 10).toFixed(1)} kg</h5>
                  <p>Gender</p>
                  <h5>
                    {species["gender_rate"] === 1 ? (
                      <>
                        <BiMaleSign className="gender-logo" />
                        <BiFemaleSign className="gender-logo" />
                      </>
                    ) : (
                      "Undefined"
                    )}
                  </h5>
                </div>
                <div className="grid grid2">
                  <p>Category</p>
                  <h5>
                    {species.shape.name.charAt(0).toUpperCase() +
                      species.shape.name.slice(1)}
                  </h5>
                  <p>Abilities</p>
                  {data.abilities.map((ability) => (
                    <h5 key={ability}>
                      {ability.ability.name.charAt(0).toUpperCase() +
                        ability.ability.name.slice(1)}
                    </h5>
                  ))}
                </div>
              </div>
              <div className="types">
                <h5>Types</h5>
                <Stack direction="row" spacing={1}>
                  {data.types.map((type) => (
                    <Chip
                      label={
                        type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1)
                      }
                      color={type.type.name}
                      size="medium"
                      key={Date.parse(new Date())}
                      className="chips chip-pokemon-page"
                    />
                  ))}
                </Stack>
                <h5>Weaknesses</h5>
                <Stack direction="row" spacing={0} className="stack-wrap">
                  {weaknesses.map((weakness) => (
                    <Chip
                      label={
                        weakness.charAt(0).toUpperCase() + weakness.slice(1)
                      }
                      color={weakness}
                      size="medium"
                      key={Date.parse(new Date())}
                      className="chips chip-pokemon-page"
                    />
                  ))}
                </Stack>
              </div>
              <div className="btn-back-container">
                <button className="btn-back" onClick={handleGoBack}>
                  Back to Pokédex
                </button>
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
