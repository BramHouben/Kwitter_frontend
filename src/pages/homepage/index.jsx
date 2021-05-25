import React from "react";
import TextBoxTweet from "components/homepage/textboxtweet";
import Tweets from "components/homepage/tweetlist";
import Grid from "@material-ui/core/Grid";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import Searchbar from "components/searchbar";
import Trendbox from "components/homepage/trendbox";
import Mentions from "components/homepage/mentions";
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      mentions: [],
      dataloaded: false,
    };
    this.handleToUpdate = this.handleToUpdate.bind(this);
  }

  async getMentions() {
    await Instance.get(ApiAction.getMentions, {
      params: {
        page: 0,
      },
    })
      .then((data) => {
        this.setState({ mentions: data.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async getApiData() {
    await Instance.get(ApiAction.getTimeline, {
      params: {
        page: 0,
        eventid: 1,
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
    this.getMentions();
    this.getApiData();
  }

  render() {
    let { tweets, mentions, dataloaded } = this.state;
    var handleToUpdate = this.handleToUpdate;
    return (
      <div>
        {/* <Container maxWidth='sm'> */}
        <Searchbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextBoxTweet
              handleToUpdate={handleToUpdate.bind(this)}
            ></TextBoxTweet>
            {dataloaded && tweets !== null ? (
              <Tweets tweets={tweets}></Tweets>
            ) : (
              <h1>no data loaded api ofline </h1>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Mentions mentions={mentions}></Mentions>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Trendbox></Trendbox>
          </Grid>
        </Grid>
      </div>
    );
  }
}
