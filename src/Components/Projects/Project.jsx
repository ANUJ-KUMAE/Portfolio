import React, { useState } from "react";
import "./Project.css";
import web from "../../Images/testing.jpg";
import code from "../../Images/code.jpg";
import Mobile from "../../Images/MobileApp.jpg";
import WebD from "../../Images/wdevelop.jpg";
import machine from "../../Images/Machine.jpg";
import deep from "../../Images/machine-learning.jpg";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Project = () => {
  const [toggleState, SetToggleState] = useState(1);

  const toggleTab = (index) => {
    SetToggleState(index);
  };

  return (
    <section>
      <div id="Tab-Container">
        <h1>Projects</h1>
        <div className="Tab-Blocks">
          <div
            className={toggleState === 1 ? "tab active-tabs" : "tab"}
            onClick={() => toggleTab(1)}
          >
            All
          </div>
          <div
            className={toggleState === 2 ? "tab active-tabs" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Web
          </div>
          <div
            className={toggleState === 3 ? "tab active-tabs" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Android
          </div>
          <div
            className={toggleState === 4 ? "tab active-tabs" : "tab"}
            onClick={() => toggleTab(4)}
          >
            ML
          </div>
        </div>

        <div className="Content-tab">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div className="All-Project">
              <div className="Project-lists">
                <div className="project-image">
                  <img src={Mobile} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">MedFest</h2>
                  <a href="https://github.com/ANUJ-KUMAE/MedFest.git">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
              <div className="Project-lists">
                <div className="project-image">
                  <img src={web} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">ShopNest</h2>
                  <a href="https://shop-nest-client.vercel.app/">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
              <div className="Project-lists">
                <div className="project-image">
                  <img src={code} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">Crop Disease</h2>
                  <a href="">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <div className="All-Project">
              <div className="Project-lists">
                <div className="project-image">
                  <img src={WebD} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">E-Commerce</h2>
                  <a href="https://github.com/ANUJ-KUMAE/E-Commerce-Dashboard.git">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
              <div className="Project-lists">
                <div className="project-image">
                  <img src={web} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">EduQuest</h2>
                  <a href="https://github.com/ANUJ-KUMAE/EduQuest.git">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
              <div className="Project-lists">
                <div className="project-image">
                  <img src={web} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">ShopNest</h2>
                  <a href="https://shop-nest-client.vercel.app/">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <div className="All-Project">
              <div className="Project-lists">
                <div className="project-image">
                  <img src={code} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">Medfist</h2>
                  <a href="https://github.com/ANUJ-KUMAE/MedFest.git">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <div className="All-Project">
              <div className="Project-lists">
                <div className="project-image">
                  <img src={machine} alt="cproject" />
                </div>
                <div className="project-name">
                  <h2 className="work-title">Crop Disease</h2>
                  <a href="">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
              <div className="Project-lists">
                <div className="project-image">
                  <img src={deep} alt="cproject" />
                </div>
                <div className="title project-name">
                  <h2 className="work-title">Schizophrenia</h2>
                  <a href="https://github.com/ANUJ-KUMAE/Schizophrenia.git">
                    <FaArrowRightToBracket className="Fa-Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="blur4"
            style={{ background: "rgb(255 204 255)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
