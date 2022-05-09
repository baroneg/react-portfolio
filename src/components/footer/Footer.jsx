import React from "react";
import "./footer.css";
import LogoAlt from "../../assets/logo-alt.png";
import { IoMdArrowDropup } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { MdCopyright } from "react-icons/md";


function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-container">
        <a href="#">
          {<IoMdArrowDropup size={40} color="#03045e" className="arrow" />}
        </a>

        <div className="logo-container">
          <a href="#"><img src={LogoAlt}></img></a>
        </div>
        <div className="socials-container">
          <a href="#">
            <BsGithub size={42} color="#03045e" className="socials" />
          </a>
          <a href="#">
            <AiFillLinkedin size={45} color="#03045e" className="socials" />
          </a>
          <a href="#">
            <MdMail size={45} color="#03045e" className="socials" />
          </a>
        </div>

        <p className="freepik">
          Illustrations designed by
          <a
            className="freepik-link"
            href="https://www.freepik.com"
            target="_blank"
          >
          <span> Freepik</span>
          </a>
        </p>
        <p className="developer">
        {<MdCopyright color="#03045e" />} {year} Handcrafted by <a href="https://baroneg.com" target="_blank">Gabriela
          Barone</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
