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
      dataloaded: false,
    };
  }

  componentDidMount() {
    const instance = axios.create({
      baseURL: "http://localhost:8081/",
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
    instance
      .get("tweets/exampletweetlist")
      .then((data) => {
        console.log("this is dats" + data);
        this.setState({ tweets: data.data });
        this.setState({ dataloaded: true });
      })
      .catch(function (error) {
        console.log(error);
        // this.setState({ dataloaded: false });
      });
  }
  render() {
    let { tweets } = this.state;
    let { dataloaded } = this.state;
    console.log(dataloaded);
    if ({ dataloaded }) {
    }

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
