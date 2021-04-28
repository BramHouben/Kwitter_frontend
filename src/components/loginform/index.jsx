import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
// import Cookies from "js-cookie";
import Instance from "services/Api/axioscreate";
import { connect } from "react-redux";

import "./index.css";
class loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  setPassword(newpass) {
    this.setState({
      password: newpass,
    });
  }

  setUsername(newusername) {
    this.setState({
      username: newusername,
    });
  }

  async loginUser() {
    console.log("login");
    console.log(this.state.username);
    console.log(this.state.password);
    await Instance.post(ApiAction.login, {
      username: this.state.username,
      password: this.state.password,
    })
      .then((data) => {
        if (data.status === 200) {
          this.props.loggedIn();
          window.location.pathname = "/home";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form id='formlogin'>
          <div id='login-username-field'>
            <TextField
              id='login-username'
              label='Username'
              variant='outlined'
              onChange={(e) => {
                this.setUsername(e.target.value);
              }}
            />
          </div>
          <div id='login-password-field'>
            <TextField
              id='login-password'
              type='password'
              label='password'
              variant='outlined'
              onChange={(e) => {
                this.setPassword(e.target.value);
              }}
            />
          </div>
        </form>
        <div id='register-button'>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => this.loginUser()}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loggedIn: () => dispatch({ type: "LOGIN", payload: true }),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginform);
