import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import routerPaths from "services/shared/router-paths";
import { Typography, Button } from "@material-ui/core";
import "./header.css";
import { connect } from "react-redux";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kwetter",
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
              <TwitterIcon />
              <Typography variant='h6' className='title'>
                {this.state.title}
              </Typography>

              {loggedIn ? (
                <div className='loggedInButtons'>
                  <Button color='inherit' href={routerPaths.Homepage}>
                    Home
                  </Button>
                  <Button color='inherit' href={routerPaths.Profile}>
                    Profile
                  </Button>
                </div>
              ) : (
                <div className='loginregisterfield'>
                  <Button color='inherit' href={routerPaths.Register}>
                    Register
                  </Button>
                  <Button color='inherit' href={routerPaths.Login}>
                    Login
                  </Button>
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
