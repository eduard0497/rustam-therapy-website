import React from "react";
import "./Services.css";
import { allServices } from "../utilities/services.js";

function Services() {
  return (
    <div className="services_container">
      {allServices.map((item) => {
        return (
          <div key={item.id} className="services_container_item_card">
            <h2>{item.title}</h2>
            <h4>{item.detail}</h4>
          </div>
        );
      })}
      {/*  */}
    </div>
  );
}

export default Services;
