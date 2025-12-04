import React from "react";
import { ContactStyle } from "./cotactStyle";

const ContactComponent = () => {
  return (
    <ContactStyle>
      <div className="contact">
        <h1>GET IN TOUCH</h1>
        <p>
          Have questions or feedback? We're here to help. <br />
          Send us a message and we'll respond soon.
        </p>
        <button className="contactBtn">Contact Us</button>
      </div>
      <div className="imageWrap">
        <img className="imageContainer" src="https://aptitudeguru.in/static/media/get-in-touch.8c521c235d4bd711343c.jpg" alt="" />
      </div>
    </ContactStyle>
  );
};

export default ContactComponent;
