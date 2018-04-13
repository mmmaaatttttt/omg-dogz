import React from "react";
import "./DogPhoto.css";

const DogPhoto = ({ src, caption }) => (
  <div className="DogPhoto">
    <img src={src} alt={caption} />
    <p>{caption}</p>
  </div>
);

export default DogPhoto;
