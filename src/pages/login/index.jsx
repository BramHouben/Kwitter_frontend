import React, { Component } from "react";
import LoginForm from "components/loginform";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div>
        <LoginForm></LoginForm>
      </div>
    );
  }
}
