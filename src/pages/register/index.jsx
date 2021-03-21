import React from "react";
// import axios from "axios";
import Container from "@material-ui/core/Container";
export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  // componentDidMount() {}
  render() {
    return (
      <div>
        <Container maxWidth='sm'>
          <p>register</p>
        </Container>
      </div>
    );
  }
}
