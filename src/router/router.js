import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage";
import paths from "../services/shared/router-paths";
import Register from "../pages/register";
import Login from "../pages/login";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={paths.Root} exact component={Homepage} />
      <Route path={paths.Register} exact component={Register} />
      <Route path={paths.Login} exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
