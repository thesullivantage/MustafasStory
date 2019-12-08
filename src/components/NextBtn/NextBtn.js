import React from "react";
import "./NextBtn.css";
import Next from "./nextBtn.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const NextBtn = props => (
  // <Button className="cancel-btn" {...props}>
  //   Cancel Event
  // </Button>
  <img className="backBtn" src={Next} {...props}></img>
);

export default NextBtn;
