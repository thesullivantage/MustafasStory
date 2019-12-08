import React from "react";
import "./BackBtn.css";
import Button from "react-materialize/lib/Button";
import Back from "./BckArrow.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const BackBtn = props => (
  <a>
    <img className="backBtn" src={Back} {...props}></img>
  </a>
);

export default BackBtn;
