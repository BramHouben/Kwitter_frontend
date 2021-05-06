const apiUrl = "http://localhost:8081/";

const tweets = `${apiUrl}tweets/`;
const authentication = `${apiUrl}authentication/`;
const profile = `${apiUrl}profiles/`;
const follower = `${apiUrl}followers/`;

// All paths need to end with a '/'

const actions = {
  getTweetList: `${tweets}timelinelist`,
  getTweetsUser: `${tweets}tweetsuser`,
  postTweets: `${tweets}`,
  getTweetFromContent: `${tweets}bycontent`,
  register: `${authentication}register`,
  login: `${authentication}login`,
  changeProfileDetails: `${profile}profiledetails`,
  getProfileAccountDetails: `${profile}userprofile`,
  getProfileDetails: `${profile}profiledetails`,

  getFollowerData: `${follower}details`,
};

export default actions;
