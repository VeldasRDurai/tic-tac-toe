import React from "react";
import Box from "./box";

function SmallBox(props) {
  return (
    <div
      style={props.style}
      onClick={props.stop ? () => 0 : Box.show}
      className="clssmallbox"
      id={props.id}
    >
      {props.value}
    </div>
  );
}

export default SmallBox;
