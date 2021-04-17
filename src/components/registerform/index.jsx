import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import Button from "@material-ui/core/Button";
export default class registerform extends Component {
  render() {
    return (
      <div>
        <h1>Register kwetter</h1>
        <form id='formregister' noValidate autoComplete='off'>
          <div id='register-username-field'>
            <TextField
              id='register-username'
              label='Username'
              variant='outlined'
            />
          </div>
          <div id='register-password-field'>
            <TextField
              id='register-password'
              type='password'
              label='password'
              autoComplete='off'
              variant='outlined'
            />
          </div>
          <div id='register-button'>
            <Button variant='outlined' color='primary'>
              register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
