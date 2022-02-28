import React from "react";

export function PhysicianCard({ item }) {
  return (
    <div className="col-lg-4 my-3">
      <div className="card-user">
        <img src={item.img} alt="" className="card-user-img" />
        <div className="card-user-info">
          <div className="card-user-info-name">
            {item.name} {item.master !== "" ? ", " + item.master : ""}
          </div>
          <div className="card-user-info-position">{item.designation}</div>
        </div>
      </div>
    </div>
  );
}
