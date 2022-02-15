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
<<<<<<< HEAD

import heartHandsImage from "../images/share-your-love-image.png";

// import heartHandsImage from "../images/share-your-love-image";
=======
import heartHandsImage from "../images/share-your-love-image.png";
>>>>>>> feature/yuffie

const imgTag = document.querySelector("#holding-balloons-img");
imgTag.src = heartBallonsImage;

const headerLogo = document.querySelector(".logo__img");
headerLogo.src = logo;

const heartFace = document.querySelector("#heart-face-img")
heartFace.src = heartFaceImage

const heartWithHands = document.querySelector("#heart-with-hands-img")
heartWithHands.src = heartHandsImage

const footerLogo = document.querySelector(".footer__logo")
footerLogo.src = logo
// const imgTag = document.querySelector(".section__image");
// imgTag.src = heartFaceImage;

// const imgTag = document.querySelector(".section__image");
// imgTag.src = heartHandsImage;
