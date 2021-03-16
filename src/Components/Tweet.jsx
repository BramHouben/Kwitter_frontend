import Proptypes from "prop-types";
import { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
class Tweet extends Component {
  render() {
    const useStyles = makeStyles({
      root: {
        maxWidth: 350,
      },
    });
    console.log(this.props);
    let { tweet } = this.props;

    return (
      <div className='tweet'>
        <Card variant='outlined' className={useStyles.root}>
          <CardContent>
            <Typography color='textSecondary' variant='h5' component='h2'>
              {tweet.accountName}
            </Typography>
            <Typography>tweet time: {tweet.tweetTime}</Typography>

            <h5>{tweet.content}</h5>
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
