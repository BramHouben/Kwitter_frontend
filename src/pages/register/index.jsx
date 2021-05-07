import React, { Component } from "react";
import "./index.css";
import RegisterForm from "components/registerform";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  render() {
    return (
      <div>
        <RegisterForm></RegisterForm>
      </div>
    );
  }
}
