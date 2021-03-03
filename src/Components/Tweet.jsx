import Proptypes from "prop-types";
import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
class Tweet extends Component {
  render() {
    console.log(this.props);
    let { tweet } = this.props;

    return (
      <div className='tweet'>
        <Card variant='outlined'>
          <Typography color='textSecondary' variant='h5' component='h2'>
            Bram Houben
          </Typography>
          <CardContent>
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
