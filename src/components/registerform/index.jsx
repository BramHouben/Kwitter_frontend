import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
export default class registerform extends Component {
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

  async registerUser() {
    console.log("test");
    console.log(this.state.username);
    console.log(this.state.password);
    await Instance.post(ApiAction.register, {
      username: this.state.username,
      password: this.state.password,
    })
      .then((data) => {
        console.log(data.status);
        console.log(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Register kwetter</h1>
        <form id='formregister' noValidate autoComplete='off'>
          <div id='register-username-field'>
            <TextField
              id='register-username'
              label='Username'
              autoComplete='off'
              variant='outlined'
              onChange={(e) => {
                this.setUsername(e.target.value);
              }}
            />
          </div>
          <div id='register-password-field'>
            <TextField
              id='register-password'
              type='password'
              label='password'
              autoComplete='off'
              variant='outlined'
              onChange={(e) => {
                this.setPassword(e.target.value);
              }}
            />
          </div>
          <div id='register-button'>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => this.registerUser()}
            >
              register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
