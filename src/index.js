import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleDown,
  faList,
  faGear,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMap,
  faNoteSticky,
  faUser,
  faBell,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";

import { faVk } from "@fortawesome/free-brands-svg-icons";

library.add(
  faMap,
  faNoteSticky,
  faUser,
  faListAlt,
  faBell,
  faAngleLeft,
  faAngleDown,
  faList,
  faGear,
  faSpinner,
  faVk,
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
