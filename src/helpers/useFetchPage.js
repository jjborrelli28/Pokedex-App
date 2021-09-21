import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchPage = (list) => {
  const { page } = useSelector((state) => state.pagination);

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const promises =
      list &&
      list
        .slice((page - 1) * 20, page * 20)
        .map((pokemon) =>
          fetch(pokemon.url).then((resp) => resp.json().then((data) => data))
        );

    promises && Promise.all(promises).then((result) => setPokemons(result));
  }, [list, page]);

  return { pokemons, page };
};
