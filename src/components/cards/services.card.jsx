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
            {/* services */}
            <ul>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />2
                Telemedicine Consultations with our Specialists
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />2 Nurse
                Home Visits (with Assessment and Re-assessment good for 1 hour
                30 minutes)
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                10-Day Nursing Virtual Assistance
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />1 Doctor
                and Registered Nurse Visit (for Wound Dressing)
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                Complete PPE
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                Medical Supplies and Instruments
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                Wound Patch or Ointments (cost includes Doctor and RN complete
                PPE)
              </li>
            </ul>
            {/* end services */}
          </div>
          {item.custom ? null : (
            <div className="btn-card-inner">
              <button className="btn-card">Cutomizable</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
