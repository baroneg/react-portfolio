import React from "react";

function SkillInfo(props) {
  return (
    <div className="skills-data">
      {props.icon}
      <div>
        <h3 className="skills-name">{props.sname}</h3>
        <h5 className="skills-level">{props.slevel}</h5>
      </div>
    </div>
  );
}

export default SkillInfo;
