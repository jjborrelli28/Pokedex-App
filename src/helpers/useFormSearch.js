import { useState } from "react";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

export const useFormSearch = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputSearch = (e) => {
    e.preventDefault();
    const action = {
      type: types.search,
      payload: value.toLocaleLowerCase(),
    };
    dispatch(action);
  };

  const reset = () => {
    setValue("");
  };

  return { value, handleInputChange, handleInputSearch, reset };
};
