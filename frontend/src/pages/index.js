// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/index.css";

// Import main stylesheet

// Import any images
import logo from "../images/logo.svg";
import logoMobile from "../images/logo-mobile.svg";
import heroBgImage from "../images/background-image.png";
import heroBgImageMobile from "../images/background-image-mobile.png";


import Api from "../components/Api.js";

// ********************************************************************************************* //
//                              Establish connection with API                                    //
// ********************************************************************************************* //
const api = new Api({
  baseUrl: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api
  .getTweets()
  .then((tweets) => {
    const json = tweets === "" ? {} : JSON.parse(tweets);
    console.log(json);
  })
  .catch((err) => console.log(err));


const footerLogo = document.querySelector(".footer__logo")
footerLogo.src = logo
