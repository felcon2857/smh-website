import React from "react";
import {
  faCalendarCheck,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppointmentForm from "../../components/forms/appointmentform.component";
import TalkToDoctorForm from "../../components/forms/talktodoctorform.component";

export default function DoctorCard({ item }) {
  const [showAppointment, setShowAppointment] = React.useState(0);
  const [showTalkDoctor, setShowTalkDoctor] = React.useState(0);
  // handle action on state
  const handleCancel = () => {
    setShowAppointment(0);
    setShowTalkDoctor(0);
  };
  const handleShowAppointment = (id_form) => {
    setShowAppointment(id_form);
    setShowTalkDoctor(0);
    // console.log(id_form)
  };
  const handleShowTalkDoctor = (id_form) => {
    setShowAppointment(0);
    setShowTalkDoctor(id_form);
    // console.log(id_form)
  };
  return (
    <div className="section-card">
      <div className="row">
        <div className="col-lg-2">
          <div className="section-card-image">
            <img src={item.img} alt="avatar" />
          </div>
        </div>
        <div className="col-lg-5 my-3">
          <div className="section-card-title">
            <h3>
              {item.name}
              {item.master !== "" ? ", " + item.master : ""}
            </h3>
          </div>
          <div className="info-section">
            <h5>{item.designation}</h5>
            {item.email == "" ? null : (
              <>
                <div className="dots"></div>
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp; {item.email}
                </a>
              </>
            )}
          </div>
          <div className="section-card-subtitle">{item.description}</div>
          <div className="section-card-schedule">
            <h6>
              <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
              &nbsp; Tele-Consult Schedule:
            </h6>
          </div>
          <div className="my-4">
            {item.scheduleSum.map((schedule, i) => (
              <>
                <span className="section-card-schedule-badge">{schedule}</span>
                &nbsp; &nbsp;
              </>
            ))}
          </div>
          <div className="mt-4">
            <button
              className="section-card-button-theme"
              onClick={() => handleShowAppointment(item.id)}
            >
              Set Appointment
            </button>
            <button
              className="section-card-button-theme-seamless mx-2"
              onClick={() => handleShowTalkDoctor(item.id)}
            >
              Talk to Doctor
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          {showAppointment !== item.id ? null : (
            <AppointmentForm
              onCancelAction={() => handleCancel()}
              theDoctor={item.name}
            />
          )}
          {showTalkDoctor !== item.id ? null : (
            <TalkToDoctorForm
              onCancelAction={() => handleCancel()}
              theDoctor={item.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}
