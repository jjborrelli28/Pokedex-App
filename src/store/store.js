import { createStore, combineReducers } from "redux";
import { paginationReducer } from "../reducers/paginationReducer";
import { searchReducer } from "../reducers/searchReducer";

const reducers = combineReducers({
  search: searchReducer,
  pagination: paginationReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
