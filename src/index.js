import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DogPhotoList from "./DogPhotoList";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<DogPhotoList />, document.getElementById("root"));
registerServiceWorker();
