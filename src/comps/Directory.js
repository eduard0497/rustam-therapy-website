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
        <h2>230 N Maryland Ave, #106</h2>
        <h2>Glendale, CA 91206</h2>
        <h2>Ph: 818-484-5554</h2>
        <h2>Fax: 747-777-4308</h2>
        <h2>brandhomehealth@yahoo.com</h2>
      </div>
    </div>
  );
}

export default Directory;
