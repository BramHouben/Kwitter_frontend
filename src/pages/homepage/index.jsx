import React from "react";
import TextBoxTweet from "../../components/TextboxTweet";
import Tweets from "../../components/Tweets";
import axios from "axios";
import Container from "@material-ui/core/Container";
export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8096/tweets/exampletweetlist").then((data) => {
      console.log("this is dats" + data);
      this.setState({ tweets: data.data });
    });
  }
  render() {
    let { tweets } = this.state;
    return (
      <div>
        <Container maxWidth='sm'>
          <TextBoxTweet></TextBoxTweet>
          <Tweets tweets={tweets}></Tweets>
        </Container>
      </div>
    );
  }
}
