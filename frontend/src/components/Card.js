/**
 * This module takes care of creating a new challenge taker card element
 * @module Card
 */

/** Class representing a challenge taker card in the webpage */
class Card {

  constructor(cardTemplateSelector, authorData, tweetText) {
    this._cardTemplateSelector  = cardTemplateSelector;
    this._twitterUsername  = authorData.username;
    this._twitterProfilePicUrl = authorData.profile_image_url;
    this._tweetText = tweetText;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector(".challenge-takers__taker")
      .cloneNode(true);
  }

  _getCardDOMElements = () => {
    this._twitterProfilePicElement = this._cardElement.querySelector(".challenge-takers__taker-pic");
    this._twitterHandleElement = this._cardElement.querySelector(".challenge-takers__taker-name");
    this._tweetTextElement = this._cardElement.querySelector(".challenge-takers__taker-tweet");
  }

  generateCard() {
    this._getTemplate();
    this._getCardDOMElements();

    this._twitterProfilePicElement.src = this._twitterProfilePicUrl;
    this._twitterHandleElement.href = `https://twitter.com/${this._twitterUsername}`;
    this._twitterHandleElement.textContent = `@${this._twitterUsername}`;
    this._tweetTextElement.textContent = this._tweetText;

    return this._cardElement;
  }
}

export default Card;