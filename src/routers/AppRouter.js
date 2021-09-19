import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import Container from "@mui/material/Container";
import { Banner } from "../components/Banner";

export const AppRouter = () => {
  return (
    <Router>
      <Container>
        <Banner />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </Container>
    </Router>
  );
};
