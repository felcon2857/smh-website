import React from "react";

export function TeamCard({ item }) {
  return (
    <div className="col-lg-3 my-3">
      <div className="card-user">
        <img src={item.image} alt="" className="card-user-img" />
        <div className="card-user-info">
          <div className="card-user-info-name">{item.name}</div>
          <div className="card-user-info-position">
            {item.position === "NA"
              ? item.department == "BOARD OF DIRECTORS"
              : item.position}
          </div>
        </div>
      </div>
    </div>
  );
}
