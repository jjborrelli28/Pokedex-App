import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchList = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`;

  const { name } = useSelector((state) => state.search);

  const [state, setState] = useState({
    data: null,
    loading: null,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredList = data.results.filter((pokemon) =>
          pokemon.name.includes(name)
        );

        setState({
          list: filteredList,
          count: filteredList.length,
          loading: null,
          error: null,
        });
      })
      .catch((error) =>
        setState({
          data: null,
          loading: null,
          error,
        })
      );
  }, [url, name]);

  return state;
};
