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
    document.title = "SERVICES | STA. MONICA HOMECARE";
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
        <div className="py-5 bg-white">
          <Container>
            <div className="row pt-5">
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
              <ServicesTabs />
            </div>
            {/* disabled */}
            <div className="row">
              {/* <div className="col-lg-12">
                <div className="card-item-colored py-5">
                  <h2 className="card-item-title">CARE PACKAGE FOR 10 DAYS</h2>
                  <div className="card-item-content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed
                      dinonumy eirmod tempor invidunt ut labore.
                    </p>
                    <div className="card-item-content-view my-3">
                      <img
                        src="/assets/consult-white.png"
                        alt="consult-white"
                      />
                      <div>2 Tele-consultation with a Physician</div>
                    </div>
                    <div className="card-item-content-view my-3">
                      <img src="/assets/visit-white.png" alt="consult-white" />
                      <div>2 times Nursing Visit (physical visit)</div>
                    </div>
                    <div className="card-item-content-view my-3">
                      <img
                        src="/assets/virtual-white.png"
                        alt="consult-white"
                      />
                      <div>Virtual Nursing Assistance for 10 days</div>
                    </div>
                    <p className="mt-5">
                      <b>Note:</b>&nbsp; All other consultations, medicines and
                      other medical needs will be billed separately
                    </p>
                    <p className="mb-3">
                      For other concerns, please call 0999-9752665 or
                      0966-7384977
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            {/* end disable */}
          </Container>
        </div>
        {/* last to call aciton */}
        <div className="to-call-action bg-light p-5">
          <Container>
            <div className="to-call-action-prefer my-3">
              <h2 className="text-center">READY? LET'S GET STARTED!</h2>
              <h4 className="text-center my-2">Ready to inquire, manage</h4>
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
