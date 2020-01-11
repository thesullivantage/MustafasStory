import React from "react";
import "./NextBtn.css";
import Next from "./nextBtn.png"


function NextBtn(props) {
  if (props.arrow === "show") {
    return (
      <div onClick={props.next}>
        <img className="nextBtn" src={Next} ></img>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
// const NextBtn = props => (
//   // <Button className="cancel-btn" {...props}>
//   //   Cancel Event
//   // </Button>
//   <div onClick={props.next}>
//     <img className="backBtn" src={Next} ></img>
//   </div>
// );

export default NextBtn;
