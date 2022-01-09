import React from "react";
import { api } from "../../services/api";

function AppointmentForm({ onCancelAction, theDoctor }) {
  const refdate = React.useRef();
  const reftime = React.useRef();
  const disableBtn = true;

  // handle variables naming
  const [firstName, setFirsName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();
  const [message, setMessage] = React.useState();
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();
  const [successMsg, setSuccessMsg] = React.useState(false);

  const handleAppointment = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !message ||
      !date ||
      !time
    ) {
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
          email: email,
          phone: phone,
          address: address,
          message: message,
          date: date,
          time: time,
          doctor_name: theDoctor,
          priority: 1,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            setFirsName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setMessage("");
            setDate("");
            setTime("");
            setSuccessMsg(true);
            setTimeout(() => {
              setSuccessMsg(false);
            }, 3000);
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
    <div>
      {successMsg ? (
        <div className="flex-col">
          <div className="successMessage">
            <h1>Appointment sent. Thank you!</h1>
          </div>
        </div>
      ) : (
        <div className="row my-4 form-section">
          <div className="colg-lg-12">
            <h6 className="header-form-title">Schedule An With {theDoctor}</h6>
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
                className="form-input-side"
                placeholder="Firstname"
                onChange={(e) => setFirsName(e.target.value)}
              />
            </div>
            <div className="col-lg-6 my-1">
              <input
                type="text"
                className="form-input-side"
                placeholder="Lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* contact info */}
          <div className="row">
            <div className="col-lg-6 my-1">
              <input
                type="email"
                className="form-input-side"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-lg-6 my-1">
              <input
                type="text"
                className="form-input-side"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
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
              />
            </div>
          </div>
          {/* schedule */}
          <div className="row my-1">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-input-side"
                ref={refdate}
                onFocus={() => (refdate.current.type = "date")}
                onBlur={() => (refdate.current.type = "text")}
                placeholder="Appointment Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-input-side"
                placeholder="Appointment Time"
                ref={reftime}
                onFocus={() => (reftime.current.type = "time")}
                onBlur={() => (reftime.current.type = "text")}
                onChange={(e) => setTime(e.target.value)}
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
              ></textarea>
            </div>
          </div>

          {/* button */}
          <div className="mt-2">
            <button
              className="section-card-button-theme"
              onClick={() => handleAppointment()}
            >
              Set Schedule
            </button>
            <button
              className="section-card-button-theme-seamless mx-2"
              onClick={onCancelAction}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;
