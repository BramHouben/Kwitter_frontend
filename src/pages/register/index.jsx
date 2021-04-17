import React from "react";
import "./index.css";
import RegisterForm from "components/registerform";
export default class register extends React.Component {
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
