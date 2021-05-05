import React, { Component } from "react";

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props,
    };
  }

  componentDidMount() {
    console.log("new comp profile" + this.state.profile);
  }

  render() {
    let { profile } = this.state.profile;
    console.log(profile);
    return <div></div>;
  }
}
