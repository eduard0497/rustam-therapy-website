import React from "react";
import "./ServicesWithPoints.css";
import { allServicesWithPoints } from "../utilities/services.js";

function ServicesWithPoints() {
  return (
    <div className="services_with_points_container">
      {allServicesWithPoints.map((data) => {
        return (
          <div key={data.id} className="services_with_points_container_card">
            <h1>{data.title}</h1>
            <ul className="services_with_points_container_card_details_container">
              {data.detail.map((item) => {
                return (
                  <li className="services_with_points_container_card_details_container_row">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesWithPoints;
