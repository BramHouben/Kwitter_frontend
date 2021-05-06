import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../pages/homepage";
import LandingPage from "../pages/landingpage";
import paths from "../services/shared/router-paths";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";
import OtherProfile from "../pages/Otherprofile";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={paths.Root} exact component={LandingPage} />
      <Route path={paths.Homepage} exact component={Homepage} />
      <Route path={paths.Register} exact component={Register} />
      <Route path={paths.Login} exact component={Login} />
      <Route path={paths.Profile} exact component={Profile} />
      <Route path={paths.OtherProfile} exact component={OtherProfile} />
    </Switch>
  </BrowserRouter>
);

export default Router;
