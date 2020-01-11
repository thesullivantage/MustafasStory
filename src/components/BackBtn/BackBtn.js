import React from "react";
import "./BackBtn.css";
import Button from "react-materialize/lib/Button";
import Back from "./BckArrow.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


function BackBtn(props) {
  if (props.link === "") {
    return (
      <div></div>
    )
  } else {
    // show/hide only here based on passed prop (based on current obj prop);
    // contHolder: have handle function based on current object 
    return (
      <div onClick={props.return}>
        <img className="backBtn" src={Back} ></img>
      </div>
    )
  }
}

// const BackBtn = props => (
//   <a>
//     <img className="backBtn" src={Back}></img>
//   </a>
// );

export default BackBtn;
