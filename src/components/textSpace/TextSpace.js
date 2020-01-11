import React from "react";
import "./TextSpace.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

const TextSpace = props => (
    <div className="textSpace">
        <div className="text">{props.text}</div>
    </div>
);

export default TextSpace;
