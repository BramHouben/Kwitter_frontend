import React, { Component } from "react";
import "./footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer id='footer'>
          <div>
            <Button
              className='githubbutton'
              variant='outlined'
              color='inherit'
              href='https://github.com/BramHouben'
            >
              Github
              <GitHubIcon />
            </Button>
          </div>
        </footer>
      </div>
    );
  }
}
