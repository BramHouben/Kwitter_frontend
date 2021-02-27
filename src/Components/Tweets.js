const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <h5 key={tweet.id}>{tweet.content}</h5>
      ))}
    </div>
  );
};

export default Tweets;
