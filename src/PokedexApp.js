import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMyTheme } from "./helpers/createMyTheme";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const PokedexApp = () => {
  const theme = createMyTheme();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
};
