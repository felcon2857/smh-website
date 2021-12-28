import React from "react";
import { Container } from "react-bootstrap";

import PageHeader from "../components/page-header/pageheader.component";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doctors } from "../data/doctors.data";
import DoctorCard from "../components/cards/doctor.card";

class DoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: doctors,
    };
  }
  componentDidMount = () => {
    document.title = "DOCTORS | STA. MONICA HOMECARE";
  };
  renderDoctors() {
    return this.state.data.map((doctors, i) => (
      <DoctorCard key={i} item={doctors} />
    ));
  }

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
                {this.renderDoctors()}
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default DoctorPage;
