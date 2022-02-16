/**
 * This module takes care of all the requests made to the Twitter API from the backend server
 * @module Api
 */
/** Class representing all the API related requests */
class Api {
  /**
   * Sets the base URL and header authorization token for the API endpoints.
   * @param {options} obj - An object having the base URL and headers
   */
  constructor(options){
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponseStatus = response => {
    return (response.ok)
      ? response.text()
      : Promise.reject(`Error Code: ${response.status} | Error Msg: ${response.statusText}`);
  }


  getTweets = () => {
    return fetch(`${this._baseUrl}/tweets`, {
      headers: this._headers
    })
      .then(this. _checkResponseStatus);
  }

  getAuthorId = (tweetId) => {
    return fetch(`${this._baseUrl}/tweets/${tweetId}`, {
      headers: this._headers
    })
      .then(this. _checkResponseStatus);
  }

  getAuthorInfo = (authorId) => {
    return fetch(`${this._baseUrl}/users/${authorId}`, {
      headers: this._headers
    })
      .then(this. _checkResponseStatus);
  }

}

export default Api;