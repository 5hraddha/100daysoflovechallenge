const twitterConsumerKey = 'nyyKJUlxtlAkuUnqQhAgYWFf5';
const twitterConsumerSecret = 'wqDZjiqHhV3dYPtMsKwIufznl51eo7Ir1YBocNOiIeRSWBxqVV';
const rfcKey = encodeURI(twitterConsumerKey);
const rfcSecret = encodeURI(twitterConsumerSecret);
const bearerTokenCredentials = `${rfcKey}:${rfcSecret}`;
const base64BearerTokenCredentials = Buffer.from(
  bearerTokenCredentials
).toString('base64');


module.exports = base64BearerTokenCredentials;
