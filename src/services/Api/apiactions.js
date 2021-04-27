const apiUrl = "http://localhost:8081/";

const tweets = `${apiUrl}tweets/`;
const authentication = `${apiUrl}authentication/`;

// All paths need to end with a '/'

const actions = {
  getTweetList: `${tweets}timelinelist`,
  postTweets: `${tweets}`,
  getTweetFromContent: `${tweets}bycontent`,
  register: `${authentication}register`,
  login: `${authentication}login`,
};

export default actions;
