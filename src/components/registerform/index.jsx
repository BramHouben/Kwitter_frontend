import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
export default class Registerform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  setEmail(newemail) {
    newemail = newemail.replace(/\s+/g, "");
    this.setState({
      email: newemail,
    });
  }

  setPassword(newpass) {
    this.setState({
      password: newpass,
    });
  }

  setUsername(newusername) {
    newusername = newusername.replace(/\s+/g, "");
    this.setState({
      username: newusername,
    });
  }

  async registerUser(e) {
    e.preventDefault();
    console.log("test");
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    await Instance.post(ApiAction.register, {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    })
      .then((data) => {
        if (data.status === 200) {
          console.log("good register");
          alert("registered, go to login");
          this.setState({
            username: "",
            password: "",
            email: "",
          });

          window.location.pathname = "/login";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Register kwetter</h1>
        <form
          id='formregister'
          noValidate
          onSubmit={(e) => this.registerUser(e)}
        >
          <div id='register-email-field'>
            <TextField
              id='register-email'
              type='email'
              label='Email'
              variant='outlined'
              onChange={(e) => {
                this.setEmail(e.target.value);
              }}
            />
          </div>
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
            <Button variant='outlined' color='primary' type='submit'>
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
