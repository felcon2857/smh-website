import React from "react";

function AppointmentForm({ onCancelAction }) {
  return (
    <div className="row my-4 form-section">
      <div className="colg-lg-12">
        <h6 className="header-form-title">Schedule An Appointment</h6>
        <p className="header-form-subtitle">
          A confirmation email will be sent to you to confirm your doctor’s
          appointment.
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
            name=""
            id=""
            className="form-input-side"
            placeholder="Address"
          />
        </div>
      </div>
      {/* schedule */}
      <div className="row">
        <div className="col-lg-12 my-1">
          <select name="" id="" className="form-input-side">
            <option>Select Appointment Schedule</option>
          </select>
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
