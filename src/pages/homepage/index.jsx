import React from "react";
import TextBoxTweet from "components/textboxtweet";
import Tweets from "components/tweetlist";
import Grid from "@material-ui/core/Grid";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import Searchbar from "components/searchbar";
import Trendbox from "components/trendbox";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      dataloaded: false,
    };
    this.handleToUpdate = this.handleToUpdate.bind(this);
  }

  async getApiData() {
    await Instance.get(ApiAction.getTweetList, {
      params: {
        page: 0,
      },
    })
      .then((data) => {
        this.setState({ tweets: data.data });
        this.setState({ dataloaded: true });
      })
      .catch(function (error) {
        console.log(error);
        window.location.pathname = "/login";
      });
  }

  handleToUpdate(tweet) {
    this.setState({ tweets: [tweet, ...this.state.tweets] });
  }

  componentDidMount() {
    this.getApiData();
  }

  render() {
    let { tweets } = this.state;
    let { dataloaded } = this.state;
    var handleToUpdate = this.handleToUpdate;
    return (
      <div>
        {/* <Container maxWidth='sm'> */}
        <Searchbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
            <TextBoxTweet
              tweets={tweets}
              handleToUpdate={handleToUpdate.bind(this)}
            ></TextBoxTweet>
            {dataloaded ? (
              <Tweets tweets={tweets}></Tweets>
            ) : (
              <h1>no data loaded api ofline </h1>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Trendbox></Trendbox>
          </Grid>
        </Grid>
      </div>
    );
  }
}
