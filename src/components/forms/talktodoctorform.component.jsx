import React from "react";

function TalkToDoctorForm({onCancelAction}) {
  return (
    <div className="row my-4 form-section">
      <div className="colg-lg-12">
        <h6 className="header-form-title">Talk To The Doctor</h6>
        <p className="header-form-subtitle">
          You will receive a call after sending your infomation.
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
        <div className="col-lg-12 my-1">
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
        <button className="section-card-button-theme">Talk Now</button>
        <button className="section-card-button-theme-seamless mx-2" onClick={onCancelAction}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default TalkToDoctorForm;
