/**
 * Define all the route handlers related to twitter on `/api` API endpoint.
 * @module controllers/twitter
 */
const fetch = require('node-fetch');
const base64BearerTokenCredentials = require('../utils/constants');
const baseUrl = `https://api.twitter.com/2`;


const getTweetsOnHashtag = (req, res) => {
  // Get the Bearer Token
  fetch(`https://api.twitter.com/oauth2/token`, {
    method: 'POST',
    headers: {
      accept: 'gzip',
      Authorization: `Basic ${base64BearerTokenCredentials}`,
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  })
    .then((data) => data.json())
    .then((data) => {
      const bearerToken = data.access_token;
      // Get the tweets using the Bearer Token
      fetch(`${baseUrl}/tweets/search/recent?query=%23nfl`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      })
      .then((tweets) => tweets.json())
      .then((tweets) => {
        res
          .status(200)
          .send(tweets.data);
      })
      .catch((err) => {
        res.send(err);
      })
    })
    .catch((err) => console.log(err));
}

const getAuthorId = (req, res) => {
  // Get the Bearer Token
  fetch(`https://api.twitter.com/oauth2/token`, {
    method: 'POST',
    headers: {
      accept: 'gzip',
      Authorization: `Basic ${base64BearerTokenCredentials}`,
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  })
    .then((data) => data.json())
    .then((data) => {
      const bearerToken = data.access_token;
      // Get the ID of the author of the tweet
      const { id } = req.params;
      fetch(`${baseUrl}/tweets/?tweet.fields=author_id&ids=${id}`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      })
      .then((tweetInfo) => tweetInfo.json())
      .then((tweetInfo) => {
        res
          .status(200)
          .send(tweetInfo.data);
      })
      .catch((err) => {
        res.send(err);
      })
    })
    .catch((err) => console.log(err));
}

const getAuthorInfo = (req, res) => {
  // Get the Bearer Token
  fetch(`https://api.twitter.com/oauth2/token`, {
    method: 'POST',
    headers: {
      accept: 'gzip',
      Authorization: `Basic ${base64BearerTokenCredentials}`,
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  })
    .then((data) => data.json())
    .then((data) => {
      const bearerToken = data.access_token;
      // Get the more information about the author of the tweet
      const { id } = req.params;
      fetch(`${baseUrl}/users/?user.fields=name,username,profile_image_url&ids=${id}`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        }
      })
      .then((authorInfo) => authorInfo.json())
      .then((authorInfo) => {
        res
          .status(200)
          .send(authorInfo.data);
      })
      .catch((err) => {
        res.send(err);
      })
    })
    .catch((err) => console.log(err));
}

module.exports = {
  getTweetsOnHashtag,
  getAuthorId,
  getAuthorInfo,
};
