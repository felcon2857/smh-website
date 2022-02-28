import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
// import { TeamCard } from "../components/cards/team.card";
import PageHeader from "../components/page-header/pageheader.component";
import { team } from "../data/team.data";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: team };
  }
  componentDidMount = () => {
    document.title = "ABOUT-US | STA. MONICA HOMECARE SOLUTIONS INC.";
  };
  render() {
    return (
      <div id="about-us">
        <PageHeader
          page_title="About us"
          tagline="Your Health. Your Home. Our Care."
        />
        {/* about */}
        <div className="py-5 bg-white">
          <Container>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="image-container-about">
                  <img src="/assets/image-about.png" alt="image-about" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-title my-3">What is Balay Atipan?</div>
                <div className="text-paragraph my-3">
                  <i className="fw-bold">Balay Atipan</i> is the Ilonggo term
                  for Home Care. It is an apt name for the premier comprehensive
                  online homecare service in the province of Negros Occidental,
                  Philippines, where Ilonggo is spoken.
                </div>
                <div className="text-paragraph my-3">
                  This homecare service was established in 2021 by a group of
                  renowned health and medical professionals based in Bacolod
                  City. It was born out of a pressing need of some patients who
                  would rather recover from illness or injury in the comfort of
                  their own homes.
                </div>
                <div className="text-paragraph my-3">
                  Balay Atipan embodies the caring nature of Negrense health and
                  medical professionals.
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* mission vision values */}
        <div className="bg-light py-5">
          <Container>
            <div className="row px-1">
              <div className="col-lg-6 my-2">
                {/* vision */}
                <div className="mt-3">
                  <h2 className="card-item-title my-2">Our Vision</h2>
                  <div className="card-colored-hover d-flex align-items-top my-2">
                    <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                    <div className="card-colored-hover-text px-2">
                      Be a premium provider of home-based health and wellness
                      services.
                    </div>
                  </div>
                </div>
                {/* mission */}
                <div className="my-3">
                  <h2 className="card-item-title my-2">Our Mission</h2>
                  <div className="card-colored-hover d-flex align-items-center my-2">
                    <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                    <div className="card-colored-hover-text px-2">
                      Through our team of highly trained, experienced and
                      dedicated health and medical professionals, we will
                      provide quality, practical and cost-effective home-care
                      services which meet the needs of our patients and their
                      families.
                    </div>
                  </div>
                </div>
              </div>
              {/* values */}
              <div className="col-lg-6 my-2">
                <h2 className="card-item-title mb-3">Our Values</h2>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">INTEGRITY</div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    We do what is right even when no one is looking.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">TEAMWORK</div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    we think and act as one.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    DEDICATION
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    always on call, we put our hearts and collective minds into
                    your well-being.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">RESPECT</div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    We acknowledge you and your family and make sure you are
                    included in decisions about your healthcare.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    COMPASSION
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    We are sensitive and concerned about you and your
                    well-being.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    CUSTOMIZED
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    We will approach your healthcare to suit your personal
                    needs.
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    CONFIDENTIALITY
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    Your information is safe with us
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* our team */}
      </div>
    );
  }
}
export default AboutPage;
