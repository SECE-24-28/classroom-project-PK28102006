import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { faBuildingColumns, faChalkboardUser, faBook, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>
      <div className="parent">
        <div className="child">
          <FontAwesomeIcon icon={faBuildingColumns} style={{color: "rgb(0, 197, 190)"}} />
          <span className="numbers">100+</span>
          <br></br>
          <span className="details">Colleges</span>
        </div>
        <div className="child">
          <FontAwesomeIcon icon={faChalkboardUser} style={{color: "rgb(0, 189, 235)"}} />
          <span className="numbers">150</span>
          <br></br>
          <span className="details">Professional Trainers</span>
        </div>
        <div className="child">
          <FontAwesomeIcon icon={faBook} style={{color: "rgb(243, 176, 79)"}} />
          <span className="numbers">1000+</span>
          <br></br>
          <span className="details">Study Materials</span>
        </div>
        <div className="child">
          <FontAwesomeIcon icon={faUserGraduate} style={{color: "rgb(255, 107, 107)"}} />
          <span className="numbers"> 100000+</span>
          <br></br>
          <span className="details">Students</span>
        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
