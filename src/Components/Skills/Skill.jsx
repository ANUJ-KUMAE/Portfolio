import React from "react";
import "./Skill.css";
import { GrReactjs } from "react-icons/gr";
import { TbFileTypeHtml } from "react-icons/tb";
import { PiFileCssDuotone } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { RiMacLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";

const Skill = () => {
  return (
    <section>
      <div id="S-container">
        <div className="S-left">
          <h1>My Skills</h1>
          <p>Technical Proficiencies</p>
          <a href="https://drive.google.com/file/d/1IyJ8yl5QvbyxbcQW1kdk1GWEJ2azOYNC/view?usp=sharing">
            <button className="button button2">Download Resume</button>
          </a>
        </div>
        <div className="S-right">
          <div className="right-left-Skill">
            <ul>
              <div className="list-box">
                <TbFileTypeHtml className="list-icons" style={{color:"brown"}}/>
                <li>HTML</li>
              </div>
              <div className="list-box">
                <PiFileCssDuotone className="list-icons"  style={{color:"orange"}}/>
                <li>CSS</li>
              </div>
              <div className="list-box">
                <TbBrandJavascript className="list-icons" style={{color:"darkorange"}}/>
                <li>JavaScript</li>
              </div>
              <div className="list-box">
                <GrReactjs className="list-icons" style={{color:"green"}}/>
                <li>ReactJs</li>
              </div>
              <div className="list-box">
                <FaBootstrap className="list-icons" style={{color:"blue"}}/>
                <li>Bootstrap</li>
              </div>
            </ul>
          </div>
          <div className="right-skill">
            <ul>
              <div className="list-box1">
                <FaJava className="list-icons1" style={{color:"darkblue"}}/>
                <li>Java</li>
              </div>
              <div className="list-box1">
                <BsFiletypeSql className="list-icons1" style={{color:"midnightblue"}}/>
                <li>SQL</li>
              </div>
              <div className="list-box1">
                <SiMongodb className="list-icons1" style={{color:"green"}}/>
                <li>MongoDB</li>
              </div>
              <div className="list-box1">
                <FaNodeJs className="list-icons1" style={{color:"darkgreen"}}/>
                <li>NodeJs</li>
              </div>
              <div className="list-box1">
                <RiMacLine className="list-icons1" style={{color:"darkgoldenrod"}}/>
                <li>Machine Learning</li>
              </div>
            </ul>
          </div>
          <div className="tools-used">
              <ul>
                 <div className="list-box2">
                     <SiCanva className="list-icons" style={{color:"#01C3CC"}}/>
                     <li>Canva</li>
                 </div>
                 <div className="list-box2">
                    <FaFigma className="list-icons" style={{color:"#ff7262"}}/>
                    <li>Figma</li>
                 </div>
              </ul>
          </div>
          <div
            className="blur5"
            style={{ background: "rgb(255 204 229)" }}
          ></div>
          <div
            className="blur2"
            style={{ background: "rgb(153 255 255)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
