// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/about.css";

import logo from "../images/logo.svg";
import logoMobile from "../images/logo-mobile.svg";
import heroImage from "../images/background-image.png";
import heroImageMobile from "../images/background-image-mobile.png";

import heartBallonsImage from "../images/holding-ballons-of-love-image.png";
import heartFaceImage from "../images/heart-face-image.png";

import heartHandsImage from "../images/share-your-love-image.png";

const imgTag = document.querySelector("#holding-balloons-img");
imgTag.src = heartBallonsImage;

const headerLogo = document.querySelector(".logo__img");
headerLogo.src = logo;

const heartFace = document.querySelector("#heart-face-img");
heartFace.src = heartFaceImage;

const heartWithHands = document.querySelector("#heart-with-hands-img");
heartWithHands.src = heartHandsImage;

const footerLogo = document.querySelector("footer .logo__img");
footerLogo.src = logo;

// Import constants
import { pageLogoImgElements, hamburger, navList } from "../utils/constants.js";

// Function to toggle hamburger
const toggleHamburger = () => {
  hamburger.classList.toggle("hamburger_active");
  navList.classList.toggle("nav__list_active");
};

hamburger.addEventListener("click", toggleHamburger);

// Function to close the mobile menu if any of the menu link is clicked
const closeMobileMenu = () => {
  hamburger.classList.remove("hamburger_active");
  navList.classList.remove("nav__list_active");
};
