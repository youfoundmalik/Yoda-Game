import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";

const Scoresheet = React.lazy(() =>
  import("./components/scoresheet/Scoresheet")
);
const LevelOne = React.lazy(() => import("./pages/level1/LevelOne"));
const LevelTwo = React.lazy(() => import("./pages/level2/LevelTwo"));
const LevelThree = React.lazy(() => import("./pages/level3/LevelThree"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <ScrollRestoration />
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
