import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import routerPaths from "services/shared/router-paths";
// import Cookies from "js-cookie";
import "./header.css";
import { connect } from "react-redux";

import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kwitter",
    };
  }
  render() {
    const loggedIn = this.props.loggedIn;
    console.log(loggedIn);
    return (
      <div>
        <header id='header'>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='h6'>{this.state.title}</Typography>
              {loggedIn ? (
                <a key='home' href={routerPaths.Homepage}>
                  home
                </a>
              ) : (
                <div>
                  <a key='register' href={routerPaths.Register}>
                    register
                  </a>
                  <a key='login' href={routerPaths.Login}>
                    login
                  </a>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
