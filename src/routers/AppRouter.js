import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </>
    </Router>
  );
};
