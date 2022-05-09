import React from "react";

function Achievement(props) {
  return (
    <div className="about-box">
      {props.icon}
      <h3 className="about-title">{props.title}</h3>
      <span className="about-subtitle">{props.subtitle}</span>
    </div>
  );
}

export default Achievement;
