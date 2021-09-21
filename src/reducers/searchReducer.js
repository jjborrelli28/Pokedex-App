import { types } from "../types/types";

const initialState = {
  name: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.search:
      return { name: action.payload };

    default:
      return state;
  }
};
