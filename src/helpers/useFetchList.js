import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const useFetchList = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`;

  const { name } = useSelector((state) => state.search);

  const dispatch = useDispatch();

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

        if (filteredList.length !== 0) {
          const action = {
            type: types.pagination,
            payload: 1,
          };

          dispatch(action);

          setState({
            list: filteredList,
            count: filteredList.length,
            loading: null,
            error: null,
          });
        } else {
          Swal.fire({
            title: "Search error",
            text: "No Pokemon matches your search",
            icon: "error",
            confirmButtonColor: "#b70004",
            confirmButtonText: "Ok!",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          });
        }
      })
      .catch((error) =>
        setState({
          data: null,
          loading: null,
          error,
        })
      );
  }, [url, name, dispatch]);

  return state;
};
