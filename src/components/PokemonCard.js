import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import imageNoAvailable from "../styles/components/image-no-available.png";

export default function PokemonCard({ pokemon }) {
  return (
    <>
      {pokemon && (
        <Card
          sx={{ maxWidth: 345 }}
          className="card animate__animated animate__fadeIn animate__slow "
        >
          <CardMedia
            component="img"
            width="100%"
            image={
              pokemon.sprites.other["official-artwork"]["front_default"] ||
              imageNoAvailable
            }
            alt={pokemon.name}
            className="image-card"
          />
          <CardContent className="info-card">
            <div>
              <Typography variant="body2" color="text.secondary">
                {(pokemon.id < 10 && `N.°00${pokemon.id}`) ||
                  (pokemon.id >= 10 &&
                    pokemon.id < 100 &&
                    `N.°0${pokemon.id}`) ||
                  (pokemon.id >= 100 && `N.°${pokemon.id}`)}
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
