const apiUrl = "http://localhost:8081/";

const tweets = `${apiUrl}tweets/`;
const authentication = `${apiUrl}authentication/`;
const profile = `${apiUrl}profiles/`;
const follower = `${apiUrl}followers/`;

// All paths need to end with a '/'

const apiactions = {
  getTweetList: `${tweets}timelinelist`,
  getTweetsUser: `${tweets}tweetsuser`,
  postTweets: `${tweets}`,
  getTweetFromContent: `${tweets}bycontent`,
  register: `${authentication}register`,
  login: `${authentication}login`,
  changeProfileDetails: `${profile}profiledetails`,
  getProfileAccountDetails: `${profile}userprofile`,
  getProfileDetails: `${profile}profiledetails`,
  getProfileDetailsForVisitor: `${profile}profiledetailsforvisitor`,
  getFollowerData: `${follower}details`,
  followUser: `${follower}followuser`,
  checkFollowUser: `${follower}followsUser`,
  deleteTweet: `${tweets}`,
  getMentions: `${tweets}bymention`,
};

export default apiactions;
