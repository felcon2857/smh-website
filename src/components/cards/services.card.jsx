import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceCard({ item }) {
  return (
    <div className="col-lg-3 my-5">
      <div className="service-card">
        <div className="service-card-inner">
          <div className="d-flex justify-content-center">
            <div className="service-card-icon-container">
              <img src="/assets/consult.png" alt="consult-icon" />
            </div>
          </div>
          <div className="service-text">
            <div className="service-text-title mt-4 mb-3">
              {item.package}
              <div className="d-flex justify-content-center mt-3">
                <div></div>
              </div>
            </div>
            {!item.custom ? null : (
              // <div className="btn-card-inner">
              //   <div className="btn-card"></div>
              // </div>
              <div className="text-center">Cutomizable</div>
            )}
            {/* services */}
            <ul>
              {item.list.map((listItem, i) => (
                <li key={i} className="d-flex align-items-top">
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />{" "}
                  <p>{listItem}</p>
                </li>
              ))}
            </ul>

            {/* end services */}
          </div>
        </div>
      </div>
    </div>
  );
}
