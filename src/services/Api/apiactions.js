const apiUrl = "http://localhost:8081/";

const tweets = `${apiUrl}tweets/`;

// All paths need to end with a '/'

const actions = {
  getTweetList: `${tweets}timelinelist`,
  postTweets: `${tweets}`,
  getTweetFromContent: `${tweets}bycontent`,
};

export default actions;
