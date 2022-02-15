// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/index.css";
import "animate.css";

// Import images
import logo from "../images/logo.svg";
import logoMobile from "../images/logo-mobile.svg";
import heroBgImage from "../images/background-image.png";
import heroBgImageMobile from "../images/background-image-mobile.png";

// Import modules
import Api from "../components/Api.js";

// Import constants
import {
  pageLogoImgElement,
  hamburger,
  navList,
} from "../utils/constants.js";

// ********************************************************************************************* //
//                                        Set images                                             //
// ********************************************************************************************* //

pageLogoImgElement.src = logo;

// ********************************************************************************************* //
//                              Establish connection with API                                    //
// ********************************************************************************************* //
// const api = new Api({
//   baseUrl: "http://localhost:3000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api
//   .getTweets()
//   .then((tweets) => {
//     const json = tweets === "" ? {} : JSON.parse(tweets);
//     console.log(json);
//   })
//   .catch((err) => console.log(err));


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
