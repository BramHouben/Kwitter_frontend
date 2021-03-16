import React from "react";
import TextBoxTweet from "../../components/TextboxTweet";
import Tweets from "../../components/Tweets";
import axios from "axios";

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8096/tweets/exampletweetlist").then((data) => {
      console.log(data);
    });

    this.setState({
      tweets: [
        {
          id: 1,
          content: "This is tweet one",
        },
        {
          id: 2,
          content: "This is tweet two",
        },
      ],
    });
  }
  render() {
    let { tweets } = this.state;
    return (
      //    <div>
      // //     <Header />
      // //     <h1>{name}</h1>
      // //     <h2>{siteOnline ? "Site is online" : "Site is offline"}</h2>
      // //     {/* <LoadTweetsBtn /> */}
      // //     <TextboxTweet onadd={addTweet} />
      // //     <Tweets tweets={tweets} />
      // //     <Footer />
      //    </div>
      <div>
        <TextBoxTweet></TextBoxTweet>
        <Tweets tweets={tweets}></Tweets>
      </div>
    );
  }
}
