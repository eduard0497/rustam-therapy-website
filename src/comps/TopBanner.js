import React from "react";
import "./TopBanner.css";

function TopBanner() {
  return (
    <div className="top_banner">
      <div className="top_banner_image_container">
        <img src="/images/banner_image.jpg" alt="HappyFamily" />
      </div>
      <div className="top_banner_text_container">
        <div className="top_banner_text_container_card">
          <h2>
            Our Mission is to maintain and realize the full potential of human
            life by delivering quality medical, nursing, and supportive care to
            individuals and their tamilies who require extended care at home.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
