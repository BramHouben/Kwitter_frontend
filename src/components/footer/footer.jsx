import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kwetter Bram Houben",
    };
  }
  render() {
    return (
      <div>
        <footer id='footer'>
          <h1>{this.state.title}</h1>
        </footer>
      </div>
    );
  }
}
