// ********************************************************************************************* //
//                                Import Modules and Constants                                   //
// ********************************************************************************************* //
// Import main stylesheet
import "../pages/index.css";

// Import main stylesheet

// Import any images
import logo from "../images/logo.svg";
import logo-mobile from "../images/logo-mobile.svg";
import background-image from "../images/background-image.png";
import background-image-mobile from "../images/background-image-mobile.png";


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


