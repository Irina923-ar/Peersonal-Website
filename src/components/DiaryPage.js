import React from "react";
import { Link } from "react-scroll";

const DiaryPage = () => {
  return (
    <div className="section-1 service-section" id="diary">
      <div className="section-container-2">
        <div className="section-header-1">
          <div>
            <div className="page-subtitle-1">My Creative Explorations</div>
            <div className="text-gradient-1">Innovating Tomorrow's Design.</div>
          </div>
          <div className="page-subtitle-2">
            In the fertile soil of innovation, my journey unfolds, transforming
            budding concepts into vibrant digital ecosystems. Each project is a
            testament to growth, blending design and technology into a tapestry
            of learning—one pixel at a time.
          </div>
        </div>
        <div className="section-container">
          <div className="container-div">
            <img className="img-container" src="assets/product.svg"></img>
            <div className="text-gradient-1">Skill Cultivation</div>
            <div className="page-subtitle-4">
              From concepts to creations, every project nurtures my growing
              expertise in a fusion of design and technology.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
          <div className="container-div">
            <img className="img-container" src="assets/ux.svg"></img>
            <div className="text-gradient-1">Design Discovery</div>
            <div className="page-subtitle-4">
              Venturing beyond tasks, my work delves into the innovation
              landscape, guided by the compass of creativity.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
          <div className="container-div">
            <img className="img-container" src="assets/product.svg"></img>
            <div className="text-gradient-1">Insightful Crafting</div>
            <div className="page-subtitle-4">
              Every interface imparts wisdom, with each user flow constructing
              the narrative of my evolving craftsmanship.
            </div>
            {/* <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div> */}
          </div>
        </div>
        <div className="btn-div">
          <div className="border-gradient btn-project">
            <Link to="portfolios" activeClass="active" spy={true}>
              <div className="btn">Explore the Visions</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
