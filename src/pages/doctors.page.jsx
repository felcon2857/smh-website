import {
  faCalendarCheck,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import AppointmentForm from "../components/forms/appointmentform.component";
import TalkToDoctorForm from "../components/forms/talktodoctorform.component";
import PageHeader from "../components/page-header/pageheader.component";

class DoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_appointment: 0,
      show_talkdoctor: 0,
    };
  }
  componentDidMount = () => {
    document.title = "DOCTORS | STA. MONICA HOMECARE";
  };
  handleShowAppointment = (id_form) => {
    this.setState({
      show_appointment: id_form,
      show_talkdoctor: 0,
    });
  };
  handleShowTalkDoctor = (id_form) => {
    this.setState({
      show_appointment: 0,
      show_talkdoctor: id_form,
    });
  };
  handleCancel = () => {
    this.setState({
      show_appointment: 0,
      show_talkdoctor: 0,
    });
  };
  render() {
    return (
      <div id="doctors">
        <PageHeader
          page_title="Our Doctors"
          tagline="We have profesionals that can take care of you round the clock."
        />
        {/* doctors area */}
        <div className="py-5 bg-lighter">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    size="lg"
                    color="#00AF43"
                  />
                  <h3 className="mx-3">GENERAL PRACTITIONER</h3>
                </div>
                {/* 1 */}
                <div className="section-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="section-card-image">
                        {/* <img src="/assets/avatar.png" alt="avatar" /> */}
                      </div>
                    </div>
                    <div className="col-lg-5 my-3">
                      <div className="section-card-title">
                        <h3>Dr. Leonilo Del Carmen</h3>
                      </div>
                      <div className="info-section">
                        <h5>Surgery</h5>
                        <div className="dots"></div>
                        <a href="#">
                          <FontAwesomeIcon icon={faEnvelope} />
                          &nbsp; nilo_exlap@balayatipan.com
                        </a>
                      </div>
                      <div className="section-card-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="section-card-schedule">
                        <h6>
                          <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
                          &nbsp; Tele-Consult Schedule:
                        </h6>
                      </div>
                      <div className="my-4">
                        <span className="section-card-schedule-badge">
                          By appointment
                        </span>
                      </div>
                      <div className="mt-4">
                        <button
                          className="section-card-button-theme"
                          onClick={() => this.handleShowAppointment(1)}
                        >
                          Set Appointment
                        </button>
                        <button
                          className="section-card-button-theme-seamless mx-2"
                          onClick={() => this.handleShowTalkDoctor(1)}
                        >
                          Talk to Doctor
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {this.state.show_appointment !== 1 ? null : (
                        <AppointmentForm onCancelAction={this.handleCancel} />
                      )}
                      {this.state.show_talkdoctor !== 1 ? null : (
                        <TalkToDoctorForm onCancelAction={this.handleCancel} />
                      )}
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="section-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="section-card-image">
                        {/* <img src="/assets/avatar.png" alt="avatar" /> */}
                      </div>
                    </div>
                    <div className="col-lg-5 my-3">
                      <div className="section-card-title">
                        <h3>Dr. Dolores Romella Tiples-Ruiz, MD</h3>
                      </div>
                      <div className="info-section">
                        <h5>Internist | infectious Disease Consultant</h5>
                        <div className="dots"></div>
                        <a href="#">
                          <FontAwesomeIcon icon={faEnvelope} />
                          &nbsp; rommela-ID@balayatipan.com
                        </a>
                      </div>
                      <div className="section-card-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="section-card-schedule">
                        <h6>
                          <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
                          &nbsp; Tele-Consult Schedule:
                        </h6>
                      </div>
                      <div className="my-4 mobile-grid">
                        <span className="section-card-schedule-badge">
                          Tuesday 2:00 PM - 4:00 PM
                        </span>
                        <span className="section-card-schedule-badge">
                          Thursday 2:00 PM - 4:00 PM
                        </span>
                      </div>
                      <div className="mt-4">
                        <button
                          className="section-card-button-theme"
                          onClick={() => this.handleShowAppointment(2)}
                        >
                          Set Appointment
                        </button>
                        <button
                          className="section-card-button-theme-seamless mx-2"
                          onClick={() => this.handleShowTalkDoctor(2)}
                        >
                          Talk to Doctor
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {this.state.show_appointment !== 2 ? null : (
                        <AppointmentForm onCancelAction={this.handleCancel} />
                      )}
                      {this.state.show_talkdoctor !== 2 ? null : (
                        <TalkToDoctorForm onCancelAction={this.handleCancel} />
                      )}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="section-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="section-card-image">
                        {/* <img src="/assets/avatar2.png" alt="avatar" /> */}
                      </div>
                    </div>
                    <div className="col-lg-5 my-3">
                      <div className="section-card-title">
                        <h3>Dr. Leonard Baraquia, MD</h3>
                      </div>
                      <div className="info-section">
                        <h5>
                          Internal Medicine | Pulmonary Medicine | Lifestyle
                          Medicine
                        </h5>
                      </div>
                      <div className="section-card-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="section-card-schedule">
                        <h6>
                          <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
                          &nbsp; Tele-Consult Schedule:
                        </h6>
                      </div>
                      <div className="my-4">
                        <span className="section-card-schedule-badge">
                          By Appointment
                        </span>
                      </div>
                      <div className="mt-4">
                        <button
                          className="section-card-button-theme"
                          onClick={() => this.handleShowAppointment(3)}
                        >
                          Set Appointment
                        </button>
                        <button
                          className="section-card-button-theme-seamless mx-2"
                          onClick={() => this.handleShowTalkDoctor(3)}
                        >
                          Talk to Doctor
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {this.state.show_appointment !== 3 ? null : (
                        <AppointmentForm onCancelAction={this.handleCancel} />
                      )}
                      {this.state.show_talkdoctor !== 3 ? null : (
                        <TalkToDoctorForm onCancelAction={this.handleCancel} />
                      )}
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="section-card">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="section-card-image">
                        {/* <img src="/assets/avatar2.png" alt="avatar" /> */}
                      </div>
                    </div>
                    <div className="col-lg-5 my-3">
                      <div className="section-card-title">
                        <h3>Dr. Melvin L. Ibanez, MBA, MD</h3>
                      </div>
                      <div className="info-section">
                        <h5>
                          Internal Medicine-Cardiovascular | Diseases Geriatric
                          and Family Medicine
                        </h5>
                      </div>
                      <div className="address-section">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        &nbsp;Clinica Ibanez Ground Floor, DMLI Building
                        13th-Lacson St, Brgy. 7 Bacolod City
                        <br />
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        &nbsp;Tel. No. 434-55-46
                      </div>
                      <div className="section-card-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="section-card-schedule">
                        <h6>
                          <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
                          &nbsp; Tele-Consult Schedule:
                        </h6>
                      </div>
                      <div className="my-4 mobile-grid">
                        <span className="section-card-schedule-badge">
                          Mon - Fri 8:30 AM - 9:00 AM
                        </span>
                        <span className="section-card-schedule-badge">
                          Mon - Fri 5:30 PM - 6:30 PM
                        </span>
                      </div>
                      <div className="mt-4">
                        <button
                          className="section-card-button-theme"
                          onClick={() => this.handleShowAppointment(4)}
                        >
                          Set Appointment
                        </button>
                        <button
                          className="section-card-button-theme-seamless mx-2"
                          onClick={() => this.handleShowTalkDoctor(4)}
                        >
                          Talk to Doctor
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {this.state.show_appointment !== 4 ? null : (
                        <AppointmentForm onCancelAction={this.handleCancel} />
                      )}
                      {this.state.show_talkdoctor !== 4 ? null : (
                        <TalkToDoctorForm onCancelAction={this.handleCancel} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default DoctorPage;
