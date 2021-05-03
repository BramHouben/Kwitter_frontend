import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
      redirect: false,
    };
  }

  componentDidMount() {
    console.log(this.state.loggedIn);
    if (!this.state.loggedIn) {
      this.setState({ redirect: true });
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login' />;
    } else {
      return <div>profile</div>;
    }
  }
}

const mapStateToProps = (state) => ({ loggedIn: state.loggedIn });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
