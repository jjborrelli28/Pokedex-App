import { useEffect, useState } from "react";

export const useFetchPokemon = (url) => {
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
      .then((data) =>
        setState({
          data,
          loading: null,
          error: null,
        })
      )
      .catch((error) =>
        setState({
          data: null,
          loading: null,
          error,
        })
      );
  }, [url]);

  return state;
};
