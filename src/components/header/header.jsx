import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import routerPaths from "services/shared/router-paths";
import "./header.css";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kwitter",
    };
  }

  render() {
    return (
      <div>
        <header id='header'>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6'>{this.state.title}</Typography>
              <a key='register' href={routerPaths.Register}>
                register
              </a>
              <a key='login' href={routerPaths.Login}>
                login
              </a>
            </Toolbar>
          </AppBar>
        </header>
      </div>
    );
  }
}
