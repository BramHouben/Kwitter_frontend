import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
