import { createTheme } from "@material-ui/core";

export const createMyTheme = () => {
  const theme = createTheme({
    palette: {
      bug: { contrastText: "#fff", main: "#399a4f" },
      dark: { contrastText: "#fff", main: "#000101" },
      dragon: { contrastText: "#fff", main: "#428b96" },
      electric: { contrastText: "#000", main: "#e3e427" },
      fairy: { contrastText: "#fff", main: "#D40A5F" },
      fighting: { contrastText: "#fff", main: "#ef6236" },
      fire: { contrastText: "#fff", main: "#e71932" },
      flying: { contrastText: "#000", main: "#c6d8e5" },
      ghost: { contrastText: "#fff", main: "#916792" },
      grass: { contrastText: "#000", main: "#80E79C" },
      ground: { contrastText: "#fff", main: "#a97129" },
      ice: { contrastText: "#000", main: "#87d3f5" },
      normal: { contrastText: "#000", main: "#e7c7d1" },
      poison: { contrastText: "#fff", main: "#9c69db" },
      psychic: { contrastText: "#fff", main: "#FC2E9F" },
      rock: { contrastText: "#fff", main: "#8c3c1c" },
      steel: { contrastText: "#fff", main: "#60766e" },
      water: { contrastText: "#fff", main: "#0d51e2" },
      red: { contrastText: "#fff", main: "#e4171b" },
    },
  });

  return theme;
};
