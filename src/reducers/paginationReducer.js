import { types } from "../types/types";

const initialState = {
  page: 1,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pagination:
      return { page: action.payload };

    default:
      return state;
  }
};
