import React from "react";
import { PositionExampleStyle } from "./position-example-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const PositionExampleComponent = () => {
  return (
    <PositionExampleStyle>
      <div>
        <div className="box">
          <div className="box__content">
            <div className="circular__parent1">
              <div className="circle">
              <FontAwesomeIcon icon={faBuildingColumns} style={{color: "rgb(0, 197, 190)"}} />
              </div>
            </div>
            <div className="value">100</div>
            <div className="name">Colleges</div>
          </div>
          <div className="box__color1"></div>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="box__content">
            <div className="circular__parent2">
              <div className="circle">
              <FontAwesomeIcon icon={faChalkboardUser} style={{color: "rgb(0, 189, 235)"}} />
              </div>
            </div>
            <div className="value">150</div>
            <div className="name">Professional Trainers</div>
          </div>
          <div className="box__color2"></div>
        </div>
      </div>
       <div>
        <div className="box">
          <div className="box__content">
            <div className="circular__parent3">
              <div className="circle">
             <FontAwesomeIcon icon={faBook} style={{color: "rgb(243, 176, 79)"}} />
              </div>
            </div>
            <div className="value">100000+</div>
            <div className="name">Students</div>
          </div>
          <div className="box__color3"></div>
        </div>
      </div>
       <div>
        <div className="box">
          <div className="box__content">
            <div className="circular__parent4">
              <div className="circle">
             <FontAwesomeIcon icon={faUserGraduate} style={{color: "rgb(255, 107, 107)"}} />
              </div>
            </div>
            <div className="value">1000+</div>
            <div className="name">Study Materials</div>
          </div>
          <div className="box__color4"></div>
        </div>
      </div>
    </PositionExampleStyle>
  );
};
export default PositionExampleComponent;