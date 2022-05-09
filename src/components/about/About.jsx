import React from "react";
import "./about.css";
import ProfilePicture from "../../assets/profile-picture.jpg";
import Achievement from "./Achievement";
import { FaGraduationCap } from "react-icons/fa";
import { BiCode } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";

function About() {
  return (
    <section id="about">
      <h2>Introduction</h2>
      <h1>About Me</h1>

      <div className="container">
        <div className="about-container">
          <img
            src={ProfilePicture}
            className="profile-pic"
            alt="Fernando's Picture"
          ></img>
        </div>

        <div className="about-data">
          <div className="about-info">
            <Achievement
              icon={<FaGraduationCap size={30} color="00B4D8" />}
              title="Education"
              subtitle="Computer Science Degree"
            />
            <Achievement
              icon={<BiCode size={30} color="00B4D8" />}
              title="Projects"
              subtitle="10+ Completed Projects"
            />
            <Achievement
              icon={<GiAchievement size={30} color="00B4D8" />}
              title="Courses"
              subtitle="3+ Completed Courses"
            />
          </div>

          <p className="about-me">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            at tempor commodo ullamcorper a lacus vestibulum sed. Nulla
            malesuada pellentesque elit eget gravida cum. Amet massa vitae
            tortor condimentum lacinia quis vel eros. Odio eu feugiat pretium
            nibh ipsum consequat nisl. Egestas purus viverra accumsan in nisl
            nisi. Mollis aliquam ut porttitor leo a diam
          </p>

          <div className="container about-buttons">
            <a className="btn">Resume</a>
            <a className="btn-alt">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
