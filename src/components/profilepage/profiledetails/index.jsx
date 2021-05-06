import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import "./index.css";
export class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props,
    };
  }
  componentDidMount() {
    console.log("new comp profiledetails" + this.state.profile);
  }
  render() {
    let { profile } = this.state.profile;

    return (
      <div className='profiledetails'>
        <Paper elevation={3}>
          <h5>Naam: {profile.name} </h5>
          <h5> Woonplaats: {profile.location}</h5>
          <h5>
            website:
            <a href={profile.website}>{profile.website}</a>
          </h5>
          <h5> Bio: {profile.bio}</h5>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
