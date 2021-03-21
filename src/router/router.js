import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage";
import Register from "../pages/register";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact component={Homepage} />
      <Route path={"/register"} exact component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;
