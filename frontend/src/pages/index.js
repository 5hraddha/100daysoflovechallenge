// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/index.css";
import "animate.css";

// Import images
import logo from "../images/logo.svg";

// Import modules
import Api from "../components/Api.js";
import Card from "../components/Card.js";

// Import constants
import {
  pageLogoImgElements,
  hamburger,
  navList,
  sliderElement,
  challengeCardTitleElement,
  challengeCardSubtitleElement,
  challengeCardDetails,
  shareLoveMsgTextAreaElement,
  shareLoveTwitterButton,
  challengeTakersCardList,
} from "../utils/constants.js";
import { dailyChallenges } from "../utils/challenges.js";

// ********************************************************************************************* //
//                                        Set images                                             //
// ********************************************************************************************* //

[...pageLogoImgElements].map(element => element.src = logo);

// ********************************************************************************************* //
//                              Establish connection with API                                    //
// ********************************************************************************************* //
const api = new Api({
  baseUrl: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ********************************************************************************************* //
//              Fetch recent tweets and author info and create challenge takers card             //
// ********************************************************************************************* //
// Get recent tweets
const getRecentTweets = () => {
  challengeTakersCardList.innerHTML = '';
  api
  .getTweets()
    .then((tweets) => tweets === "" ? {} : JSON.parse(tweets))
    .then((jsonTweets) => {
      [...jsonTweets].slice(0, 8).map(tweet => {
        // Get ID of the author of the recent tweets
        api
          .getAuthorId(tweet.id)
            .then((res) => JSON.parse(res))
            .then((res) => {
              // Get profile info of the author
              api
                .getAuthorInfo(res[0].author_id)
                  .then((res) => JSON.parse(res))
                  .then((res) => {
                    const newChallengeTakerCard = new Card("#card-template", res[0], tweet.text).generateCard();
                    challengeTakersCardList.append(newChallengeTakerCard);
                  })
                  .catch((err) => console.log(err));
            })
          .catch((err) => console.log(err));
      });
  })
  .catch((err) => console.log(err));
}

getRecentTweets();

// ********************************************************************************************* //
//                                 Set 100 days of challenges                                    //
// ********************************************************************************************* //
sliderElement.max = "100";
sliderElement.min = "1";

//Set initial value on page load
const setTodaysChallenge = (selectedSliderValue) => {
  const challengeItem = dailyChallenges[selectedSliderValue - 1];
  challengeCardTitleElement.textContent = `${challengeItem.day}`;
  challengeCardSubtitleElement.textContent = `${challengeItem.quote}`;
  challengeCardDetails.textContent = challengeItem.detail;
  sliderElement.value = selectedSliderValue;
}

const setTweetMsg = (selectedSliderValue) => {
  const challengeItem = dailyChallenges[selectedSliderValue - 1];
  shareLoveMsgTextAreaElement.textContent = `Hey Everyone, I have completed ${challengeItem.day} #100DaysOfLoveChallenge - ${challengeItem.detail} Would you join me in spreading love? @100daysoflovez Visit - https://100daysoflove.netlify.app/`;
}

const getRandomNumberOfDay = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumberOfDay = getRandomNumberOfDay(1,100);
setTodaysChallenge(randomNumberOfDay);
setTweetMsg(randomNumberOfDay);

sliderElement.addEventListener("input", () => {
  setTodaysChallenge(sliderElement.value);
  setTweetMsg(sliderElement.value)
});

// ********************************************************************************************* //
//                                        Send Tweet                                             //
// ********************************************************************************************* //
shareLoveTwitterButton.addEventListener("click", () => {
  const msg = shareLoveMsgTextAreaElement.textContent;
  const urlEncodedMsg = encodeURIComponent(msg);
  shareLoveTwitterButton.href = `https://twitter.com/intent/tweet?text=${urlEncodedMsg}`;
  getRecentTweets();
})

// ********************************************************************************************* //
//                                        Toggle Hamburger                                       //
// ********************************************************************************************* //

// Function to toggle hamburger
const toggleHamburger = () => {
  hamburger.classList.toggle("hamburger_active");
  navList.classList.toggle("nav__list_active");
}
hamburger.addEventListener("click", toggleHamburger);

// Function to close the mobile menu if any of the menu link is clicked
const closeMobileMenu = () => {
  hamburger.classList.remove("hamburger_active");
  navList.classList.remove("nav__list_active");
}
navList.addEventListener("click", closeMobileMenu);
