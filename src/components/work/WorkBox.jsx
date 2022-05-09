import React from "react";

function WorkBox(props) {
  return (
    <div className="work-info">
      <div className="data">
        <img src={props.img} alt=""></img>
        <h3>{props.description}</h3>
      </div>
      <div className="CTA">
        <a className="btn" href={props.github} target="_blank">
          GitHub
        </a>
        <a className="btn-alt" href={props.download} download="">
          Download
        </a>
      </div>
    </div>
  );
}

export default WorkBox;
