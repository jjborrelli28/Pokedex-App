import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMyTheme } from "./helpers/createMyTheme";

export const PokedexApp = () => {
  const theme = createMyTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
