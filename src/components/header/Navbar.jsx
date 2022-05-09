import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const mobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="navbar container">
        <a href="#">
          <img src={Logo} className="logo" alt="Logo" />
        </a>

        <div className={isOpen ? "menu activated" : "menu"} id="menu">
          <ul className="list">
            <li className="list-item">
              <a
                href="#work"
                className={isOpen ? "list-link activated" : "list-link"}
              >
                MY WORK
              </a>
            </li>
            <li className="list-item">
              <a
                href="#about"
                className={isOpen ? "list-link activated" : "list-link"}
              >
                ABOUT ME
              </a>
            </li>
            <li className="list-item">
              <a href="#footer" className={isOpen ? "btn activated" : "btn"}>
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>

        <div className="list">
          <Hamburger
            size={40}
            color="#00B4D8"
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
    </nav>
  );
}

export default Navbar;
