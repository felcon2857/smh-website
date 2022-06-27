import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doctors } from "../data/doctors.data";
import { physician } from "../data/physician.data";
import { familyphysician } from "../data/familyphysician.data";
import DoctorCard from "../components/cards/doctor.card";
import { PhysicianCard } from "../components/cards/physician.card";
import { FamilyPhysicianCard } from "../components/cards/familyphysician.card";

class DoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datad: doctors,
      datap: physician,
      datafamilyphysician: familyphysician,
    };
  }
  componentDidMount = () => {
    document.title = "DOCTORS | STA. MONICA HOMECARE SOLUTIONS INC.";
  };
  renderDoctors() {
    return this.state.datad.map((doctors, i) => (
      <DoctorCard key={i} item={doctors} />
    ));
  }

  renderPhysician() {
    return this.state.datap.map((doctors, i) => (
      <PhysicianCard key={i} item={doctors} />
    ));
  }

  renderFamilyPhysician() {
    return this.state.datafamilyphysician.map((doctors, i) => (
      <FamilyPhysicianCard key={i} item={doctors} />
    ));
  }

  render() {
    return (
      <div id="doctors">
        <PageHeader
          page_title="Our Doctors and Affiliate Service Providers"
          tagline="We have professionals that can take care of you round the clock."
        />
        {/* doctors area */}
        <div className="py-5 bg-light">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <FontAwesomeIcon
                    icon={faStethoscope}
                    size="lg"
                    color="#00AF43"
                  />
                  <h3 className="mx-3">BALAY ATIPAN DOCTORS</h3>
                </div>
                {this.renderDoctors()}
              </div>
            </div>
          </Container>
        </div>


        {/* physician */}
        <div className="bg-white py-5">
          <Container>
            <div className="section-title">
              <FontAwesomeIcon icon={faStethoscope} size="lg" color="#00AF43" />
              <h3 className="mx-3">AFFILIATE PHYSICIANS</h3>
            </div>
            <hr />
            <div className="row">{this.renderPhysician()}</div>
          </Container>
        </div>


        {/* family physician */}
        <div className="bg-white py-5">
          <Container>
            <div className="section-title">
              <FontAwesomeIcon icon={faStethoscope} size="lg" color="#00AF43" />
              <h3 className="mx-3" style={{display:"flex"}}>AFFILIATE &nbsp;<h3 style={{color:"red"}}>FAMILY</h3>&nbsp; PHYSICIANS</h3>
            </div>
            <hr />
            <div className="row">{this.renderFamilyPhysician()}</div>
          </Container>
        </div>


        {/* nurse affiliate */}
        <div className="bg-light py-5">
          <Container>
            <div className="section-title">
              <FontAwesomeIcon icon={faStethoscope} size="lg" color="#00AF43" />
              <h3 className="mx-3">AFFILIATE PRIVATE DUTY NURSES</h3>
            </div>
            <div className="row">
              {/* nurse */}
              <div className="col-lg-4 my-3">
                <div className="card-user" style={{ height: "100%" }}>
                  <img
                    src="/assets/nurse_affiliate.jpg"
                    alt="nurse_affiliate"
                    className="card-user-img"
                  />
                  <div className="card-user-info">
                    <div className="card-user-info-name">
                      Association of Private Duty Nurse Practitioners Phil. Inc.
                    </div>
                    <div
                      className="card-user-info-position"
                      style={{ fontSize: "13px" }}
                    >
                      @thelegitimatepriv8dutynurses - Home Health Care Service
                    </div>
                  </div>
                </div>
              </div>
              {/* diagnostic 1 */}
            </div>



            <div className="section-title mt-3">
              <FontAwesomeIcon icon={faStethoscope} size="lg" color="#00AF43" />
              <h3 className="mx-3">AFFILIATE DIAGNOSTICS</h3>
            </div>

            <div className="row">
              <div className="col-lg-4 my-3">
                <div className="card-user" style={{ height: "100%" }}>
                  <img
                    src="/assets/health_horizon.jpg"
                    alt="health_horizon"
                    className="card-user-img"
                  />
                  <div className="card-user-info">
                    <div className="card-user-info-name">
                      Health Horizon <br />
                      Diagnostic Center
                    </div>
                    <div
                      className="card-user-info-position"
                      style={{ fontSize: "13px" }}
                    >
                      @healthhorizondc · Diagnostic Center
                    </div>
                  </div>
                </div>
              </div>
              {/* diagnostic 2 */}
              <div className="col-lg-4 my-3">
                <div className="card-user">
                  <img
                    src="/assets/healberg.jpg"
                    alt="healberg"
                    className="card-user-img"
                  />
                  <div className="card-user-info">
                    <div className="card-user-info-name">
                      HealBerg Lifestyle Medical <br /> Center {"&"} Clinics
                      Inc.
                    </div>
                    <div
                      className="card-user-info-position"
                      style={{ fontSize: "13px" }}
                    >
                      healbergbacolod@gmail.com | 0916 769 6970
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 my-3">
                <div className="card-user" style={{ height: "100%" }}>
                  <img
                    src="/assets/MJPsychotherapy.jpg"
                    alt="health_horizon"
                    className="card-user-img"
                  />
                  <div className="card-user-info">
                    <div className="card-user-info-name">
                      MJ Physiotherapy <br />
                      Services
                    </div>
                    <div
                      className="card-user-info-position"
                      style={{ fontSize: "13px" }}
                    >
                      mjphysiotherapyservices@gmail.com | 09198501003
                    </div>
                  </div>
                </div>
              </div>
              {/* diagnostic 2 */}
              
              {/*<div className="col-lg-4 my-3">
                <div className="card-user">
                  <img
                    src="/assets/healberg.jpg"
                    alt="healberg"
                    className="card-user-img"
                  />
                  <div className="card-user-info">
                    <div className="card-user-info-name">
                      HealBerg Lifestyle Medical <br /> Center {"&"} Clinics
                      Inc.
                    </div>
                    <div
                      className="card-user-info-position"
                      style={{ fontSize: "13px" }}
                    >
                      healbergbacolod@gmail.com | 0916 769 6970
                    </div>
                  </div>
                </div>
              </div>*/}

            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default DoctorPage;
