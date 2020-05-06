import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import "bootstrap/dist/css/bootstrap.min.css";
import Builder from "builder.js";

const firebase = require("firebase");
require("firebase/firestore");

ReactDOM.render(
  <>
    <Builder />
  </>,
  document.getElementById("root")
);
