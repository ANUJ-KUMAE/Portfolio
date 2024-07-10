import React, {useState, useEffect} from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer>
      <div className="F-container">
        <div className="footer-nav-items">
          <div className="footer-nav-list">
            <ul>
            <li>
                <Link to="Intro-container" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="S-container" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="Tab-Container" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="E-container" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <hr/>
              <li>
                <Link to="contact-container" spy={true} smooth={true}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="between-line" />
          <Link id="button" onClick={scrollToTop} className={showButton ? 'show' : ''} style={{ display: showButton ? 'block' : 'none' }}><FaArrowAltCircleUp className="arrow-icon"/></Link>
          <div className="F-list">
            <div className="F-left">
              <h3>anuj.muz0405@gmail.com</h3>
            </div>
            <div className="F-right">
              <a href="https://www.linkedin.com/in/anuj-kumar-421b80255">
                <CiLinkedin className="linkdin" />
              </a>
              <a href="https://github.com/ANUJ-KUMAE">
                <FaGithub className="github" />
              </a>
              <a href="https://www.facebook.com/">
                <CiFacebook className="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
