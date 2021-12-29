import React from "react";
import "./Directory.css";

function Directory() {
  return (
    <div className="directory_container">
      <div className="directory_logo_container">
        <div className="directory_logo_container_inner">
          <img src="symbol.png" alt="logo" />
          <h1>Brand Home Health Care, Inc</h1>
        </div>
      </div>
      <div className="directory_details_container">
        <h1>Contact Details</h1>
        <h2>127 S Brand Blvd., #208</h2>
        <h2>Glendale, CA 91204</h2>
        <h2>Ph: 747-215-9133</h2>
        <h2>Fax: 747-215-9181</h2>
        <h2>brandhomehealth@yahoo.com</h2>
      </div>
    </div>
  );
}

export default Directory;
