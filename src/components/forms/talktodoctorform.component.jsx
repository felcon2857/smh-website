import React from "react";
import { api } from "../../services/api";

function TalkToDoctorForm({ onCancelAction, theDoctor }) {
  // handle variables naming
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();
  const [message, setMessage] = React.useState();

  const handleAppointment = async () => {
    if (!firstName || !lastName || !phone || !address || !message) {
      alert("Please fill all the fields");
    } else {
      await fetch(api + "appointments/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          address: address,
          message: message,
          doctor_name: theDoctor,
          priority: 0,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            setFirstName("");
            setLastName("");
            setPhone("");
            setAddress("");
            setMessage("");
            alert("Appointment successfully sent. Thank you!");
          } else {
            console.log("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row my-4 form-section">
      <div className="colg-lg-12">
        <h6 className="header-form-title">Talk To {theDoctor}</h6>
        <p
          className="header-form-subtitle"
          style={{ color: "#00AF43", fontStyle: "italic" }}
        >
          You will receive a call after sending your infomation.
        </p>
      </div>
      {/* persons info */}
      <div className="row">
        <div className="col-lg-6 my-1">
          <input
            type="text"
            className="form-input-side"
            placeholder="Firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="col-lg-6 my-1">
          <input
            type="text"
            className="form-input-side"
            placeholder="Lastname"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      {/* contact info */}
      <div className="row">
        <div className="col-lg-12 my-1">
          <input
            type="text"
            className="form-input-side"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
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
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
      </div>
      {/* message */}
      <div className="row">
        <div className="col-lg-12 my-1">
          <textarea
            cols="30"
            rows="3"
            className="form-input-side"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
      </div>
      {/* button */}
      <div className="mt-2">
        <button
          className="section-card-button-theme"
          onClick={() => handleAppointment()}
        >
          Talk Now
        </button>
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
export default TalkToDoctorForm;
