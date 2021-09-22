import { createTheme } from "@material-ui/core";

export const createMyTheme = () => {
  const theme = createTheme({
    palette: {
      bug: { contrastText: "#fff", main: "#729f3f" },
      dark: { contrastText: "#fff", main: "#2f2f30" },
      dragon: { contrastText: "#fff", main: "#53a4cf" },
      electric: { contrastText: "#fff", main: "#eed534" },
      fairy: { contrastText: "#fff", main: "#fdb9e9" },
      fighting: { contrastText: "#fff", main: "#d56723" },
      fire: { contrastText: "#fff", main: "#fd4a5a" },
      flying: { contrastText: "#fff", main: "#c6d8e5" },
      ghost: { contrastText: "#fff", main: "#7b62a3" },
      grass: { contrastText: "#fff", main: "#9bcc50" },
      ground: { contrastText: "#fff", main: "#a97129" },
      ice: { contrastText: "#fff", main: "#51c4e7" },
      normal: { contrastText: "#fff", main: "#a5adb0" },
      poison: { contrastText: "#fff", main: "#9c69db" },
      psychic: { contrastText: "#fff", main: "#f366b9" },
      rock: { contrastText: "#fff", main: "#8c3c1c" },
      steel: { contrastText: "#fff", main: "#60766e" },
      water: { contrastText: "#fff", main: "#4592c4" },
    },
  });

  return theme;
};
