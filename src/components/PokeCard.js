import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useTheme } from "@material-ui/core/styles";
import Container from "@mui/material/Container";

export default function PokeCard({ pokemon }) {
  const { palette } = useTheme();
  console.log(pokemon);
  console.log(palette);

  return (
    <>
      {pokemon && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            width="100%"
            image={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {(pokemon.order < 10 && `N° 000${pokemon.order}`) ||
                (pokemon.order > 10 && `N° 00${pokemon.order}`) ||
                (pokemon.order > 100 && `N° 0${pokemon.order}`) ||
                (pokemon.order > 1000 && `N° ${pokemon.order}`)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <Stack direction="row" spacing={1}>
              {pokemon.types.map((type) => (
                <Chip
                  label={
                    type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)
                  }
                  color={type.type.name}
                  size="small"
                />
              ))}
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
}
