// const apiUrl = "http://20.76.155.99:8081/";
const apiUrl = "http://localhost:8081/";

const tweets = `${apiUrl}tweets/`;
const authentication = `${apiUrl}authentication/`;
const profile = `${apiUrl}profiles/`;
const follower = `${apiUrl}followers/`;
const like = `${apiUrl}likes/`;
const timeline = `${apiUrl}timeline/`;
const trending = `${apiUrl}trending/`;
const moderation = `${apiUrl}moderation/`;
const logging = `${apiUrl}logging/`;

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
  followingUser: `${follower}followinguser`,
  deleteTweet: `${tweets}`,
  getMentions: `${tweets}bymention`,
  likeTweet: `${like}addlike`,
  deleteLike: `${like}removelike`,
  getTimeline: `${timeline}`,
  getTrends: `${trending}`,
  removeAccount: `${authentication}`,
  logout: `${authentication}logout`,
  getLogs: `${logging}all`,
  checkModeration: `${moderation}check`,
  getlatestTweets: `${moderation}getlatesttweets`,
};

export default apiactions;
