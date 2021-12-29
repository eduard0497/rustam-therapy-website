import React from "react";
import "./SecondBanner.css";

function SecondBanner() {
  return (
    <div className="second_banner">
      <div className="second_banner_image_container">
        <img src="/images/second_banner_image.jpg" alt="image here" />
      </div>
      <div className="second_banner_text_container">
        <div className="second_banner_text_container_card">
          <h2>
            Our Goal is to establish a healthy patient-care provider
            relationship while enjoying a good quality of life. It is our
            commitment to put the patient as our utmost prionty in delivering
            excellent care. We encourage our cient's in making health related
            choices and decisions that benetits them the most.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
