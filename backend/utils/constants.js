const twitterConsumerKey = '';
const twitterConsumerSecret = '';
const rfcKey = encodeURI(twitterConsumerKey);
const rfcSecret = encodeURI(twitterConsumerSecret);
const bearerTokenCredentials = `${rfcKey}:${rfcSecret}`;
const base64BearerTokenCredentials = Buffer.from(
  bearerTokenCredentials
).toString('base64');


module.exports = base64BearerTokenCredentials;
