import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { faBuildingColumns, faChalkboardUser, faBook, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="parent">
        {/* CARD 1 */}
        <div className="child">
          <div className="iconCircle">
          <div className="icon"><FontAwesomeIcon icon={faBuildingColumns} style={{color: "rgb(0, 197, 190)"}} />
          </div>
          </div>

          <div className="contentBox">
            <span className="numbers">100+</span>
            <span className="details">COLLEGES</span>
          </div>

          <div className="shadowBox1"></div>
        </div>

        {/* CARD 2 */}
        <div className="child">
          <div className="iconCircle">
            <div className="icon"><FontAwesomeIcon icon={faChalkboardUser}style={{color: "rgb(0, 189, 235)"}} />
          </div>
          </div>
          <div className="contentBox">
            <span className="numbers">150</span>
            <span className="details">TRAINERS</span>
          </div>

          <div className="shadowBox2"></div>
        </div>

        {/* CARD 3 */}
        <div className="child">
          <div className="iconCircle">
             <div className="icon"><FontAwesomeIcon icon={faBook} style={{color: "rgb(243, 176, 79)"}}/>
          </div>
          </div>

          <div className="contentBox">
            <span className="numbers">1000+</span>
            <span className="details">STUDY MATERIALS</span>
          </div>

          <div className="shadowBox3"></div>
        </div>

        {/* CARD 4 */}
        <div className="child">
          <div className="iconCircle">
           <div className="icon"> <FontAwesomeIcon icon={faUserGraduate} style={{color: "rgb(255, 107, 107)"}} />
          </div>
          </div>
          <div className="contentBox">
            <span className="numbers">100000+</span>
            <span className="details">STUDENTS</span>
          </div>

          <div className="shadowBox4"></div>
        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
