import React from "react";

const SkillsPage = () => {
  return (
    <div className="section-1 skills-section" id="skills">
      <div className="section-container-2">
        <div className="section-header-1">
          <div>
            <div className="page-subtitle-1">My Skills</div>
            <div className="text-gradient-1">Growing Digital Expertise</div>
          </div>
          <div className="page-subtitle-2">
            Blooming in the tech field with a toolkit of HTML, CSS, JavaScript,
            and React, my journey is rich with continuous learning and creative
            expression.
          </div>
        </div>
        <div className="section-container">
          <div className="container-div">
            <div className="subtitle-container">Feb 2022 - Now</div>
            <div className="text-gradient-1">Artistic Exploration</div>
            <div className="about-page-subtitle">
              Unfurled my creative wings with Procreate in February 2022,
              painting pixels into expressive digital art.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
          <div className="container-div">
            <div className="subtitle-container">Aug 2022 - Now</div>
            <div className="text-gradient-1"> Initiation</div>
            <div className="about-page-subtitle">
              Began my front-end journey in August 2022, immersing myself in the
              essentials of HTML, CSS, and the interactive realms of JavaScript
              and React.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
          <div className="container-div">
            <div className="subtitle-container">Oct 2022 - Feb 2023</div>
            <div className="text-gradient-1">Meta Certification</div>
            <div className="about-page-subtitle">
              Completed the Meta Front-End Developer Course from 08.10.2022 to
              18.02.2023, solidifying my foundation in web development.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
          <div className="container-div">
            <div className="subtitle-container">Nov 2022 - Now</div>
            <div className="text-gradient-1">Practical Application</div>
            <div className="about-page-subtitle">
              Applied my learning to build my first website on 26.11.2022, a
              tangible step in my hands-on development journey.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
        </div>
        <div className="container-percent">
          <div className="box">
            <div className="btn-div percent">
              <svg>
                <circle className="circle-1" cx="85" cy="85" r="85"></circle>
                <circle className="circle-1" cx="85" cy="85" r="85"></circle>
              </svg>
              <div className="border-gradient-2 btn-project number">
                <div className="btn">94%</div>
              </div>
            </div>
            <div className="text">HTML</div>
          </div>
          <div className="box">
            <div className="btn-div percent">
              <svg>
                <circle className="circle-2" cx="85" cy="85" r="85"></circle>
                <circle className="circle-2" cx="85" cy="85" r="85"></circle>
              </svg>
              <div className="border-gradient-2 btn-project number">
                <div className="btn">89%</div>
              </div>
            </div>
            <div className="text">CSS</div>
          </div>
          <div className="box">
            <div className="btn-div percent">
              <svg>
                <circle className="circle-3" cx="85" cy="85" r="85"></circle>
                <circle className="circle-3" cx="85" cy="85" r="85"></circle>
              </svg>
              <div className="border-gradient-2 btn-project number">
                <div className="btn">91%</div>
              </div>
            </div>
            <div className="text">JavaScript</div>
          </div>
          <div className="box">
            <div className="btn-div percent">
              <svg>
                <circle className="circle-4" cx="85" cy="85" r="85"></circle>
                <circle className="circle-4" cx="85" cy="85" r="85"></circle>
              </svg>
              <div className="border-gradient-2 btn-project number">
                <div className="btn">75%</div>
              </div>
            </div>
            <div className="text">React.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
