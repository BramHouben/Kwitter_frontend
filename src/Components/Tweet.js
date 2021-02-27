import Proptypes from "prop-types";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <h5>{tweet.content}</h5>
    </div>
  );
};

Tweet.propTypes = {
  tweet: Proptypes.object.isRequired,
};

export default Tweet;
