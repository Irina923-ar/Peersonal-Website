import React from "react";

const Backdrop = ({ toggleBackdrop }) => {
  return (
    <div className="backdrop-section">
      <div className="backdrop-content">
        <div className="text-gradient-1">Let’s Talk?</div>
        <div className="page-subtitle-5">Choose Your Need *</div>
        <div className="backdrop-container-1">
          <div className="backdrop-div">
            <input type="checkbox"></input>
            <label className="page-subtitle-5">Website</label>
          </div>
          <div className="backdrop-div">
            <input type="checkbox"></input>
            <label className="page-subtitle-5">Mobile App</label>
          </div>
          <div className="backdrop-div">
            <input type="checkbox"></input>
            <label className="page-subtitle-5">Brand Design</label>
          </div>
          <div className="backdrop-div">
            <input type="checkbox"></input>
            <label className="page-subtitle-5">Corporate Identity Design</label>
          </div>
        </div>
        <div className="backdrop-container-2">
          <div className="backdrop-div-2">
            <label className="page-subtitle-5">Full Name*</label>
            <input></input>
          </div>
          <div className="backdrop-div-2">
            <label className="page-subtitle-5">Mobile No*</label>
            <input></input>
          </div>
        </div>
        <div className="backdrop-div-2">
          <label className="page-subtitle-5">Email Address*</label>
          <input></input>
        </div>
        <div className="backdrop-div-2">
          <label className="page-subtitle-5">
            Tell Us About Your Projects*
          </label>
          <input type="text"></input>
        </div>
        <div className="btn-div">
          <button className="btn-2" onClick={toggleBackdrop}>
            Let’s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
