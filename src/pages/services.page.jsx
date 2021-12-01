import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "SERVICES | STA. MONICA HOMECARE";
  };
  render() {
    return (
      <div id="services">
        <PageHeader
          page_title="Our Services"
          tagline="Your Health. Your Home. Our Care."
        />
        <div className="py-5 bg-lighter">
          <Container>
            <div className="row">
              <div className="col-lg-12">
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
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default ServicesPage;
