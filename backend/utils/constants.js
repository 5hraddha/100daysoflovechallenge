const fetch = require('node-fetch');

// const twitterCredsUrl = 'https://gist.githubusercontent.com/5hraddha/3f299169b10366295ebb67f8d37bcbf2/raw/2acc3af2d1071e755334eb3cde7c14857fe6321f/twitter-creds.cfg'
// const getBase64BearerTokenCredentials = () => {
//   fetch(twitterCredsUrl)
//     .then((data) => {
//       console.log(data.json());
//       return data
//     })
//     .then((data) => {
//       const twitterConsumerKey = data.twitterConsumerKey;
//       const twitterConsumerSecret = data.twitterConsumerSecret;
//       const rfcKey = encodeURI(twitterConsumerKey);
//       const rfcSecret = encodeURI(twitterConsumerSecret);
//       const bearerTokenCredentials = `${rfcKey}:${rfcSecret}`;
//       return Buffer.from(
//         bearerTokenCredentials
//       ).toString('base64');
//     })
//     .catch((err) => console.log(err));
// }

const twitterConsumerKey = 'nyyKJUlxtlAkuUnqQhAgYWFf5';
const twitterConsumerSecret = 'wqDZjiqHhV3dYPtMsKwIufznl51eo7Ir1YBocNOiIeRSWBxqVV';
const rfcKey = encodeURI(twitterConsumerKey);
const rfcSecret = encodeURI(twitterConsumerSecret);
const bearerTokenCredentials = `${rfcKey}:${rfcSecret}`;
const base64BearerTokenCredentials = Buffer.from(
  bearerTokenCredentials
).toString('base64');


module.exports = base64BearerTokenCredentials;
