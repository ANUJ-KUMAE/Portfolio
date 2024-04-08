import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { HiOutlineViewList } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header>
      <div className="Nav-Component" id="NavCompo">
        <div className="Nav-lists">
          <div className="Nav-Name">
            <h2 className="N-left">PortFolio</h2>
          </div>
          <div className="N-right">
            <ul className={click ? "list-data active" : "list-data"}>
              <li>
                <Link to="Intro-container" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="S-container" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="Tab-Container" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="E-container" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="contact-container" spy={true} smooth={true}>
                  <button className="button Nav-Button">Get In Touch</button>
                </Link>
              </li>
            </ul>
            <div className="humberg" onClick={handleClick}>
              {click ? (
                <FaTimes className="display-lists-data" />
              ) : (
                <HiOutlineViewList className="display-lists-data" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
