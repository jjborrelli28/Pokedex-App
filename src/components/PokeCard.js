import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function PokeCard({ pokemon }) {
  return (
    <>
      {pokemon && (
        <Card sx={{ maxWidth: 345 }} className="height-card">
          <CardMedia
            component="img"
            width="100%"
            image={
              pokemon.sprites.other["official-artwork"]["front_default"] ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu88Fd9lg3AJXHPXuZB7J0wuCzxX2SJFxcA&usqp=CAU"
            }
            alt={pokemon.name}
            className="background-image-card"
          />
          <CardContent className="info-card">
            <div>
              <Typography variant="body2" color="text.secondary">
                {(pokemon.order < 10 && `N° 00${pokemon.order}`) ||
                  (pokemon.order >= 10 &&
                    pokemon.order < 100 &&
                    `N° 0${pokemon.order}`) ||
                  (pokemon.order >= 100 && `N° ${pokemon.order}`)}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Typography>
            </div>
            <Stack direction="row" spacing={1}>
              {pokemon.types.map((type) => (
                <Chip
                  label={
                    type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)
                  }
                  color={type.type.name}
                  size="small"
                  key={type.type.name}
                />
              ))}
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
}
