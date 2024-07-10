import React from "react";
import "./Experience.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <section>
      <div id="E-container">
        <div className="E-container-lists">
          <div className="E-conatiner-name">
            <h1>Experience</h1>
          </div>
          <div className="E-parts">
            <div className="L-part">
              <MdWork className="work" />
              <li>Binoary Club (Content Creation And Designing Group)</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
