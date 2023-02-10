import React from "react";

export default function Die(props) {
  return (
    <div className={props.isHeld ? "die-box held" : "die-box"}>
      <h2>{props.value}</h2>
    </div>
  );
}
