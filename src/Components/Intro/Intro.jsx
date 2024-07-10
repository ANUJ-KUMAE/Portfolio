import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import boy from "../../Images/Boy1.png";

const Intro = () => {
  return (
    <section>
      <div id="Intro-container">
        <div className="I-left">
          <div className="I-name">
            <span className="first-text">Hello, I am</span>
            <span className="second-text">Anuj Kumar</span>
            <span className="last-spam">
              Entry-level FullStack Developer with a passion for web design and
              development, showcasing proficiency in creating impressive
              websites with efficient code.
            </span>
          </div>
          <Link to="contact-container" spy={true} smooth={true}>
            <button className="button button1">Hire Me</button>
          </Link>
          <div className="F-right">
            <a href="https://www.linkedin.com/in/anuj-kumar-421b80255">
              <CiLinkedin className="linkdin I-linkdin" />
            </a>
            <a href="https://github.com/ANUJ-KUMAE">
              <FaGithub className="github I-github" />
            </a>
            <a href="https://www.facebook.com/">
              <CiFacebook className="facebook I-facebook" />
            </a>
          </div>
        </div>
        <div className="I-right">
          <div className="right-image">
            <img src={boy} alt="Boy" className="boy" />
          </div>
          <div
            className="blur"
            style={{ background: "rgb(226 188 250)" }}
          ></div>
          <div
            className="blur1"
            style={{ background: "rgb(204 204 255)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
