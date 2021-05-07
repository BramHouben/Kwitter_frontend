import React, { Component } from "react";
import "./index.css";
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

    return (
      <div>
        {profile !== null ? (
          <div className='profile'>
            <img
              alt='profile'
              src='/assets/profileimage.png'
              className='profileimage'
            />
            {profile.username}
          </div>
        ) : (
          <div>No profile loaded</div>
        )}
      </div>
    );
  }
}
