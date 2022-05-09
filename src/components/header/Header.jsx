import React, { useState } from "react";
import "./header.css";
import Navbar from "./Navbar";
import Illustration from "../../assets/illustration.png"


function Header() {
  return (      
    <header>

      <Navbar />

      <div className="container header-container">
        <h2>Hello I'm</h2>
        <h1>Francisco</h1>
        <h3>Software Engineer</h3>
        <img src={Illustration} className="header-img" alt="Guy using a laptop" />
      </div>

    </header>
  );
}

export default Header;
