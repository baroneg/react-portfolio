import React from "react";
import "./work.css";
import WorkBox from "./WorkBox";
import Illustration1 from "../../assets/illustration1.png";
import Illustration2 from "../../assets/illustration2.png";
import Illustration3 from "../../assets/illustration3.png";

function Work() {
  return (
    <section id="work">
      <h2>Portfolio</h2>
      <h1>My Work</h1>
      <div className="container work-container">
        <WorkBox
          img={Illustration1}
          description="Cectus urna duis convallis convallis tellus id."
          github="https://github.com/"
          download="#"
        />

        <WorkBox
          img={Illustration2}
          description="Condimentum vitae sapien pellentesque habitant."
          github="https://github.com/"
          download="#"
        />

        <WorkBox
          img={Illustration3}
          description="Sit amet volutpat consequat mauris nunc congue."
          github="https://github.com/"
          download="#"
        />
      </div>
    </section>
  );
}

export default Work;
