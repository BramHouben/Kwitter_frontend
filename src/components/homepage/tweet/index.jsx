import React, { Component } from "react";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./index.css";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.tweet,
    };
    this.likeTweet = this.likeTweet.bind(this);
  }

  async likeTweet() {
    await Instance.put(ApiAction.likeTweet, null, {
      params: {
        tweetid: this.state.tweet.id,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let timeTweet = moment.utc(this.state.tweet.tweetTime).fromNow();
    return (
      <div className='tweet' id='tweet'>
        <Card variant='outlined'>
          <CardContent>
            <div id='momenttime'>
              Posted
              {"   " + timeTweet}
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
            <IconButton color='secondary' onClick={this.likeTweet}>
              <FavoriteBorderOutlinedIcon id='hearthicon' />
              {this.state.tweet.countLikes >= 1 ? (
                this.state.tweet.countLikes
              ) : (
                <div></div>
              )}
            </IconButton>
          </CardContent>
        </Card>
      </div>
    );
  }
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};
