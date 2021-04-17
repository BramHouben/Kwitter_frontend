import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";
export default class loginform extends Component {
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
            />
          </div>
          <div id='login-password-field'>
            <TextField
              id='login-password'
              type='password'
              label='password'
              variant='outlined'
            />
          </div>
        </form>
        <div id='register-button'>
          <Button variant='outlined' color='primary'>
            Login
          </Button>
        </div>
      </div>
    );
  }
}
