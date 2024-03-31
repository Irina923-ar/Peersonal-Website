import React from "react";
import {Link} from "react-scroll";

const ServicesPage = () => {
  return (
    <div className="section-1 service-section" id="service">
      <div className="section-container-2">
        <div className="section-header-1">
          <div>
            <div className="page-subtitle-1">My Service</div>
            <div className="text-gradient-1">
              I Provide the Best Service for You.
            </div>
          </div>
          <div className="page-subtitle-2">
            They also ensure that the end-to-end journey with their products or
            services meets desired outcomes identifies new opportunities to
            create better user experiences.
          </div>
        </div>
        <div className="section-container">
          <div className="container-div">
            <img className="img-container" src="assets/product.svg"></img>
            <div className="text-gradient-1">Product Design</div>
            <div className="page-subtitle-4">
              Product design is understanding the end-user customer, the person
              for whom the product is being created.
            </div>
            <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div>
          </div>
          <div className="container-div">
            <img className="img-container" src="assets/ux.svg"></img>
            <div className="text-gradient-1">UX/UI Designer</div>
            <div className="page-subtitle-4">
              Product managers and engineers to gather requirements from users
              before designing ideas.
            </div>
            <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div>
          </div>
          <div className="container-div">
            <img className="img-container" src="assets/product.svg"></img>
            <div className="text-gradient-1">Interactive Design</div>
            <div className="page-subtitle-4">
              The design of interactive products and services in which a
              designer's focus goes beyond.
            </div>
            <div className="div-learn-more">
              Learn More
              <img src="assets/arrow-right.svg"></img>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <div className="border-gradient btn-project">
            <Link to="portfolios" activeClass="active" spy={true}>
              <div className="btn">My Project</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
