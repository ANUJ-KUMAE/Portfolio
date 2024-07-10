import React from "react";
import "./Contact.css";
import Student from "../../Images/contact-img.svg";

const Contact = () => {
  return (
    <section>
      <div id="contact-container">
        <div className="c-contact">
          <div className="c-left">
            <img src={Student} alt="Student" className="pop-image" />
          </div>
          <div className="c-right">
            <h1>Get In Touch</h1>
            <form
              action="https://formspree.io/f/xqkrewvg"
              method="POSt"
              className="form-lists"
            >
              <div className="c-inputtype">
                <input
                  type="text"
                  placeholder="First Name"
                  name="UserFirstName"
                  autoComplete="Off"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="UserLastName"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="c-inputtype">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="Email"
                  autoComplete="off"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="c-textarea">
                <textarea placeholder="Message" rows={8} cols={20}></textarea>
              </div>
              <button className="button Submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
