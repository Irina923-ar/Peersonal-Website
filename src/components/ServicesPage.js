import React from "react";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page-header">
        <div>
          <div className="about-page-subtitle2">My Service</div>
          <div className="multicolor">I Provide the Best Service for You.</div>
        </div>
        <div className="about-page-subtitle">
          They also ensure that the end-to-end journey with their products or
          services meets desired outcomes identifies new opportunities to create
          better user experiences.
        </div>
      </div>
      <div className="services-page-container">
        <div className="container-div mr">
          <img className="img-container" src="assets/product.svg"></img>
          <div className="multicolor">Product Design</div>
          <div className="about-page-subtitle">
            Product design is understanding the end-user customer, the person
            for whom the product is being created.
          </div>
          <div className="div-learn-more">
            Learn More
            <img src="assets/arrow-right.svg"></img>
          </div>
        </div>
        <div className="container-div mr">
          <img className="img-container" src="assets/ux.svg"></img>
          <div className="multicolor">UX/UI Designer</div>
          <div className="about-page-subtitle">
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
          <div className="multicolor">Interactive Design</div>
          <div className="about-page-subtitle">
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
        <div className="btn-project">
          <div className="btn">My Project</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
