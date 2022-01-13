import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Scoresheet from "./components/scoresheet/Scoresheet";
import LevelOne from "./pages/level1/LevelOne";
import LevelTwo from "./pages/level2/LevelTwo";
import LevelThree from "./pages/level3/LevelThree";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/level1" exact>
          <LevelOne />
        </Route>
        <Route path="/level2" exact>
          <LevelTwo />
        </Route>
        <Route path="/level3" exact>
          <LevelThree />
        </Route>
        <Route path="/scoreboard" exact>
          <Scoresheet />
        </Route>
        <Route path="*">
          <Redirect to="/level1" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
