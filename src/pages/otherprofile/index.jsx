import React, { Component } from "react";
import { connect } from "react-redux";

export class OtherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
    };
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);
