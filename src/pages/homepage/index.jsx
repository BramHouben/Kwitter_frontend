import React from "react";
import TextBoxTweet from "../../components/textboxtweet/textboxTweet";
import Tweets from "../../components/tweetlist/tweets";
import Grid from "@material-ui/core/Grid";
import ApiAction from "../../services/Api/apiactions";
import Instance from "../../services/Api/axioscreate";
import Searchbar from "../../components/searchbar/searchbar";
export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      dataloaded: false,
    };
  }

  componentDidMount() {
    Instance.get(ApiAction.getTweetList)
      .then((data) => {
        console.log("this is data" + data);
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
        {/* <Container maxWidth='sm'> */}
        <Searchbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
            <TextBoxTweet></TextBoxTweet>
            <Tweets tweets={tweets}></Tweets>
          </Grid>
          <Grid item xs={12} sm={3}>
            test
          </Grid>
          {/* </Container> */}
        </Grid>
      </div>
    );
  }
}
