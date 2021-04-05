import Proptypes from "prop-types";
import { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../components/tweet/tweet.css";

class Tweet extends Component {
  render() {
    console.log(this.props);
    let { tweet } = this.props;
    return (
      <div className='tweet' id='tweet'>
        <Card variant='outlined'>
          <CardContent>
            <div id='momenttime'>
              <Moment fromNow ago>
                {tweet.tweetTime}
              </Moment>
              -ago posted
            </div>
            <Typography
              id='tweetusername'
              color='textSecondary'
              variant='h5'
              component='h2'
            >
              {tweet.accountName}
            </Typography>

            <p>{tweet.content}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: Proptypes.object.isRequired,
};

export default Tweet;
