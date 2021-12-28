import React from "react";

function AppointmentForm({
  onCancelAction,
  theDoctor,
  daySchedule,
  timeSchedule,
}) {
  return (
    <div className="row my-4 form-section">
      <div className="colg-lg-12">
        <h6 className="header-form-title">Schedule An Appointment</h6>
        <p
          className="header-form-subtitle"
          style={{ color: "#00AF43", fontStyle: "italic" }}
        >
          Complete the information below then set date and time of visit
          according on doctors tele-schedule.
        </p>
      </div>
      {/* persons info */}
      <div className="row">
        <div className="col-lg-6 my-1">
          <input
            type="text"
            name=""
            id=""
            className="form-input-side"
            placeholder="Firstname"
          />
        </div>
        <div className="col-lg-6 my-1">
          <input
            type="text"
            name=""
            id=""
            className="form-input-side"
            placeholder="Lastname"
          />
        </div>
      </div>
      {/* contact info */}
      <div className="row">
        <div className="col-lg-6 my-1">
          <input
            type="email"
            name=""
            id=""
            className="form-input-side"
            placeholder="Email"
          />
        </div>
        <div className="col-lg-6 my-1">
          <input
            type="text"
            name=""
            id=""
            className="form-input-side"
            placeholder="Phone Number"
          />
        </div>
      </div>
      {/* address */}
      <div className="row">
        <div className="col-lg-12 my-1">
          <input
            type="text"
            className="form-input-side"
            placeholder="Address"
          />
        </div>
      </div>
      {/* schedule */}
      <div className="row my-1">
        <div className="col-lg-6">
          <input type="date" className="form-input-side" />
        </div>
        <div className="col-lg-6">
          <input type="time" className="form-input-side" />
        </div>
      </div>
      {/* message */}
      <div className="row">
        <div className="col-lg-12 my-1">
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="form-input-side"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      {/* button */}
      <div className="mt-2">
        <button className="section-card-button-theme">Set Schedule</button>
        <button
          className="section-card-button-theme-seamless mx-2"
          onClick={onCancelAction}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AppointmentForm;
