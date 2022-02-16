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

// Import constants
import {
  pageLogoImgElements,
  hamburger,
  navList,
  sliderElement,
  challengeCardTitleElement,
  challengeCardDetails,
} from "../utils/constants.js";
import listOfChallenges, { dailyChallenges } from "../utils/challenges.js";

// ********************************************************************************************* //
//                                        Set images                                             //
// ********************************************************************************************* //

[...pageLogoImgElements].map(element => element.src = logo);

// ********************************************************************************************* //
//                              Establish connection with API                                    //
// ********************************************************************************************* //
// const api = new Api({
//   baseUrl: "http://localhost:3000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// ********************************************************************************************* //
//                             Fetch recent tweets and author info                               //
// ********************************************************************************************* //
// Get recent tweets
// api
//   .getTweets()
//   .then((tweets) => tweets === "" ? {} : JSON.parse(tweets))
//   .then((jsonTweets) => {
//     [...jsonTweets].slice(0, 3).map(tweet => {
//       // Get ID of the author of the recent tweets
//       api
//         .getAuthorId(tweet.id)
//         .then((res) => JSON.parse(res))
//         .then((res) => {
//           // Get profile info of the author
//           api
//             .getAuthorInfo(res[0].author_id)
//             .then((res) => JSON.parse(res))
//             .then((res) => console.log(res[0]))
//             .catch((err) => console.log(err));
//         })
//         .catch((err) => console.log(err));
//     });
//   })
//   .catch((err) => console.log(err));

// ********************************************************************************************* //
//                                 Set 100 days of challenges                                    //
// ********************************************************************************************* //
sliderElement.max = "100";
sliderElement.min = "1";

//Set initial value on page load
challengeCardTitleElement.textContent = `${dailyChallenges[0].day} - ${dailyChallenges[0].quote}`;
challengeCardDetails.textContent = dailyChallenges[0].detail;
sliderElement.value = 1;

const getChallenge = (selectedSliderValue) => {
  const challengeItem = dailyChallenges[selectedSliderValue - 1];
  challengeCardTitleElement.textContent = `${challengeItem.day} - ${challengeItem.quote}`;
  challengeCardDetails.textContent = challengeItem.detail;
}

sliderElement.addEventListener("change", () => {
  getChallenge(sliderElement.value);
});

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
