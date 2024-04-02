import React from "react";

const ContactMe = ({ toggleBackdrop }) => {
  return (
    <div className="section-1 contact-me-section" id="contact">
      <div className="section-container-2">
        <div className="section-header-1">
          <div className="text-gradient-1">Internship Journey Begins</div>
          <div className="page-subtitle-2">
            I'm a junior developer looking to gain hands-on experience. I’m
            ready to bring my coding skills and enthusiasm to your team.
          </div>
          {/* <div>
            <button className="btn-2" onClick={toggleBackdrop}>
              Let’s Talk
            </button>
          </div> */}
          <div className="div-section-contact">
            <div>
              <a
                href="https://www.linkedin.com/in/irina-galan-4371892a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-contact"
              >
                <img className="icon" src="assets/icon-linkedin.svg"></img>
                <div className="page-subtitle-1">Irina Galan</div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Irina923-ar"
                target="_blank"
                rel="noopener noreferrer"
                className="section-contact"
              >
                <img className="icon" src="assets/icon-github.svg"></img>
                <div className="page-subtitle-1">Irina923-ar</div>
              </a>
            </div>
            <div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="section-contact"
              >
                <img className="icon" src="assets/icon-email.svg"></img>
                <div className="page-subtitle-1">galanirinad@gmail.com</div>
              </a>
            </div>
          </div>
          <div className="bottom-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
