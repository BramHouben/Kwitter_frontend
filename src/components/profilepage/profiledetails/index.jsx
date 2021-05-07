import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import "./index.css";
export class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiledetails: this.props,
    };
  }
  componentDidMount() {
    console.log("new comp profiledetails" + this.state.profiledetails);
  }
  render() {
    let { profiledetails } = this.state.profiledetails;

    return (
      <div className='profiledetails'>
        <Paper elevation={3}>
          <h5>Naam: {profiledetails.name} </h5>
          <h5> Woonplaats: {profiledetails.location}</h5>
          <h5>
            website:
            <a href={profiledetails.website}>{profiledetails.website}</a>
          </h5>
          <h5> Bio: {profiledetails.bio}</h5>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
