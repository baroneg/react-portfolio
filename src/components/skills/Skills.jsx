import React from "react";
import "./skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiC } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { SiAssemblyscript } from "react-icons/si";
import SkillInfo from "./SkillInfo";

function Skills() {
  return (
    <section id="skills">
      <h2>Knowledge</h2>
      <h1>My Skills</h1>
      <div className="container skills-container">
        <div className="skills-content">
          <div className="skills-info">
            <div className="skills-title">
              <h3>Frontend Developer</h3>
            </div>
            <div className="skills-box">
              <div className="skills-group">
                <SkillInfo
                  icon={<AiFillHtml5 size={25} color="00B4D8" />}
                  sname="HTML"
                  slevel="Intermediate"
                />
                <SkillInfo
                  icon={<DiCss3 size={25} color="00B4D8" />}
                  sname="CSS"
                  slevel="Intermediate"
                />
              </div>

              <div className="skills-group">
                <SkillInfo
                  icon={<SiJavascript size={22} color="00B4D8" />}
                  sname="JavaScript"
                  slevel="Basic"
                />
                <SkillInfo
                  icon={<SiFlutter size={25} color="00B4D8" />}
                  sname="Flutter"
                  slevel="Basic"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="skills-content">
          <div className="skills-info">
            <div className="skills-title">
              <h3>Backend Developer</h3>
            </div>
            <div className="skills-box">
              <div className="skills-group">
                <SkillInfo
                  icon={<FaJava size={25} color="00B4D8" />}
                  sname="Java"
                  slevel="Advanced"
                />
                <SkillInfo
                  icon={<SiC size={22} color="00B4D8" />}
                  sname="C"
                  slevel="Intermediate"
                />
                <SkillInfo
                  icon={<SiCsharp size={25} color="00B4D8" />}
                  sname="C#"
                  slevel="Intermediate"
                />
              </div>

              <div className="skills-group">
                <SkillInfo
                  icon={<GrMysql size={25} color="00B4D8" />}
                  sname="MySQL"
                  slevel="Advanced"
                />
                <SkillInfo
                  icon={<FaPhp size={25} color="00B4D8" />}
                  sname="PHP"
                  slevel="Advanced"
                />
                <SkillInfo
                  icon={<SiAssemblyscript size={25} color="00B4D8" />}
                  sname="Assembly"
                  slevel="Advanced"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
