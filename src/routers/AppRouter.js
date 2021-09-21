import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Container from "@mui/material/Container";
import { Dashboard } from "../components/Dashboard";
import { Banner } from "../components/Banner";
import { PokemonPage } from "../components/PokemonPage";

export const AppRouter = () => {
  return (
    <Router>
      <Container>
        <Banner />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:pokemonId" component={PokemonPage} />
          <Redirect to="/dashboard" />
        </Switch>
      </Container>
    </Router>
  );
};
