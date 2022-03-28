import React from "react";
import map from "../../assets/map.jpg";
import phone from "../../assets/phoneeee.jpg";
import "./ContactUS.css";
const ContactUS = () => {
  return (
    <div>
      <div className="back">
        <br />
        <br />
        <br />
        <div className="contact">
          <img alt="map" src={map} />
          <h2 className="attr"> Address : </h2>
        </div>
        <h2 className="para"> BIZERTE </h2>
        <div className="contactt">
          <img alt="phone" src={phone} />

          <h2 className="attr">Phone: </h2>
          <h2 className="para"> (+)216********</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
