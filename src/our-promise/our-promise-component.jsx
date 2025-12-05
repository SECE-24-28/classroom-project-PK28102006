import React from "react";
import { OurPromiseStyle } from "./our-promise-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLaptopCode, 
  faTabletScreenButton, 
  faPeopleGroup, 
  faDiamondTurnRight, 
  faShieldHalved,
  faLifeRing
} from "@fortawesome/free-solid-svg-icons";

const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle>
      <h1 className="title">Our Promise</h1>
      <p className="title-content">
        As part of our high quality service, we'd like to offer something extra too.
      </p>

      <div className="grid">

        {/* Top Code Quality */}
        <div className="card top-quality">
          <div className="card-header">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" style={{color: "rgb(68, 178, 179)"}} />
            <div className="card-title">Top Code Quality</div>
          </div>
          <p className="card-text">
            Our commitment goes beyond mere code – it encompasses providing
            solutions. You receive W3C fully compliant markup, without any
            compromise on quality.
          </p>
        </div>

        {/* Responsive */}
        <div className="card responsive">
          <div className="card-header">
            <FontAwesomeIcon icon={faTabletScreenButton} className="icon" style={{color: "rgb(239, 175, 75)"}} />
            <div className="card-title">Responsive</div>
          </div>
          <p className="card-text">
            We understand the value of a positive attitude, timely responsiveness,
            and adaptability. We're dedicated to attentively listening and serving you better.
          </p>
        </div>

        {/* Rockstar Team */}
        <div className="card rockstar">
          <div className="card-header">
            <FontAwesomeIcon icon={faPeopleGroup} className="icon" style={{color: "rgb(0, 189, 235)"}} />
            <div className="card-title">Rockstar Team</div>
          </div>
          <p className="card-text">
            You’ll have access to an all-star team of experienced professionals
            with exceptional coding skills dedicated to your success.
          </p>
        </div>

        {/* Fast Turn-arounds */}
        <div className="card fast-turn">
          <div className="card-header">
            <FontAwesomeIcon icon={faDiamondTurnRight} className="icon" style={{color: "rgb(134, 74, 249)"}} />
            <div className="card-title">Fast Turn-arounds</div>
          </div>
          <p className="card-text">
            We are swift, nimble, and capable of providing high-quality code
            quickly and efficiently.
          </p>
        </div>

        {/* Life-time Support */}
        <div className="card lifetime">
          <div className="card-header">
            <FontAwesomeIcon icon={faLifeRing} className="icon" style={{color: "rgb(252, 41, 71)"}}/>
            <div className="card-title">Life-time Support</div>
          </div>
          <p className="card-text">
            Our enduring support ensures you can always reach out for assistance
            anytime bugs or improvements are needed.
          </p>
        </div>

        {/* Secured Agreement */}
        <div className="card secured">
          <div className="card-header">
            <FontAwesomeIcon icon={faShieldHalved} className="icon" style={{color: "rgb(50, 199, 102)"}} />
            <div className="card-title">Secured Agreement</div>
          </div>
          <p className="card-text">
            Your creative work remains entirely yours. We guarantee NDA protection
            and complete confidentiality.
          </p>
        </div>

      </div>
    </OurPromiseStyle>
  );
};

export default OurPromiseComponent;