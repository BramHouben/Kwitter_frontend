import LoginForm from "components/loginform";
import React, { Component } from "react";
import { connect } from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.props.loggedOut();
  }
  render() {
    return (
      <div>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loggedOut: () => dispatch({ type: "LOGIN", payload: false }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
