import { Component } from "react";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "components/tweet/tweet.css";
import moment from "moment";
import PropTypes from "prop-types";
export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.tweet,
    };
  }
  render() {
    let timeTweet = moment.utc(this.state.tweet.tweetTime).fromNow();
    return (
      <div className='tweet' id='tweet'>
        <Card variant='outlined'>
          <CardContent>
            <div id='momenttime'>
              {timeTweet + "  "}
              posted
            </div>
            <Typography
              id='tweetusername'
              color='textSecondary'
              variant='h5'
              component='h2'
            >
              {this.state.tweet.accountName}
            </Typography>

            <p>{this.state.tweet.content}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};
