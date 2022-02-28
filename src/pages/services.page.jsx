import React from "react";
import { Container } from "react-bootstrap";
// import ServiceCard from "../components/cards/services.card";
import PageHeader from "../components/page-header/pageheader.component";
import ServicesTabs from "../components/tabs/services.tabs";
import { services } from "../data/service.data";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: services,
    };
  }
  componentDidMount = () => {
    document.title = "SERVICES | STA. MONICA HOMECARE SOLUTIONS INC.";
  };
  // renderServices() {
  //   return this.state.data.map((services, i) => (
  //     <ServicesTabs key={i} item={services} />
  //   ));
  // }
  render() {
    return (
      <div id="services">
        <PageHeader
          page_title="Our Services"
          tagline="Your Health. Your Home. Our Care."
        />
        <div className="py-5 bg-light">
          <div className="container-fluid px-5">
            <div className="row pt-5 px-5">
              <div className="after-state-section-background">
                <h2 className="text-center">
                  {/* What We Provide for Your Health */}
                  THE FIRST COMPREHENSIVE ONLINE HOMECARE <br />
                  SYSTEM IN NEGROS OCCIDENTAL
                </h2>
                <div className="caption-text text-center">
                  {/* We provide quality medical services with medical professionals
                  who can take care of you round the clock. */}
                  Your Health. Your Home. Our Care.
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-9">
                <ServicesTabs />
              </div>
              <div className="col-lg-3">
                <div className="card-banner">
                  <div className="mb-3">
                    <div className="featured-card-bookmark-right">
                      <span>NOT INCLUDED IN ALL PACKAGES!</span>
                    </div>
                  </div>

                  <div className="card-banner-text">
                    All Diagnostics, Laboratory Tests, Medication, Medical Fees,
                    Physician's Home Visit, Additional Nurse/Caregiver services
                    are <span>not included!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="container">
            <div className="row">
              <div className="card-text-title">BABY/CHILD HOME CARE</div>
              <div className="col-lg-6 my-3">
                <div className="row">
                  {/* 1 */}
                  <div className="col-lg-4">
                    <div className="img_baby_con">
                      <img
                        src="/assets/baby/baby1.jpg"
                        alt="baby1"
                        className="baby_img"
                      />
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="col-lg-4">
                    <div className="img_baby_con">
                      <img
                        src="/assets/baby/baby2.jpg"
                        alt="baby2"
                        className="baby_img"
                      />
                    </div>
                  </div>
                  {/* 3*/}
                  <div className="col-lg-4">
                    <div className="img_baby_con">
                      <img
                        src="/assets/baby/baby3.jpg"
                        alt="baby3"
                        className="baby_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 my-3">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img_baby_con">
                      <img
                        src="/assets/alejano.jpg"
                        alt="baby1"
                        className="baby_img"
                      />
                    </div>
                    <div className="my-3">
                      <div className="card-text-title">
                        John P. Alejano, MD
                        <div className="fw-bold">Pedia Surgeon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* last to call aciton */}
        <div className="to-call-action bg-light p-5">
          <Container>
            <div className="to-call-action-prefer mb-3">
              <h2 className="text-center">READY? LET'S GET STARTED!</h2>
              {/* <h4 className="text-center my-2">Ready to inquire, manage</h4> */}
            </div>
            <div className="my-3">
              <div className="text-center py-3">
                <a href="/doctors" className="theme-btn my-3" type="button">
                  Make an Appointment Now!
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default ServicesPage;
