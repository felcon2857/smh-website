import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { TeamCard } from "../components/cards/team.card";
import PageHeader from "../components/page-header/pageheader.component";
import { team } from "../data/team.data";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: team };
  }
  componentDidMount = () => {
    document.title = "ABOUT US | STA. MONICA HOMECARE";
  };
  renderOfficers(department) {
    return this.state.data
      .filter((filterTeams) => {
        return filterTeams.department === department;
      })
      .map((teams, i) => {
        return <TeamCard key={i} item={teams} />;
      });
  }
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
                  Balay Atipan is the Ilonggo term for Home Care. It is an apt
                  name for the premier comprehensive online homecare service in
                  the province of Negros Occidental, Philippines, where Ilonggo
                  is spoken.
                </div>
                <div className="text-paragraph my-3">
                  This homecare service was established in 2021 by a group of
                  renowned health and medical professionals based in Bacolod
                  City. It was borne out of a pressing need of some patients who
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
        <div className="bg-white py-5">
          <Container>
            <div className="row px-1">
              <div className="col-lg-6 my-2">
                {/* mission */}
                <div className="my-3">
                  <h2 className="card-item-title my-2">Our Mission</h2>
                  <div className="card-colored-hover d-flex align-items-center my-2">
                    <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                    <div className="card-colored-hover-text px-2">
                      Be a premiere provider of home-based health and wellness
                      services.
                    </div>
                  </div>
                </div>
                {/* vision */}
                <div className="mt-3">
                  <h2 className="card-item-title my-2">Our Vision</h2>
                  <div className="card-colored-hover d-flex align-items-top my-2">
                    <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                    <div className="card-colored-hover-text px-2">
                      Through our team of highly trained, experienced, and
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
                    We do what is right even when no one is looking
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">TEAMWORK</div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    we think and act as one
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    DEDICATION
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    always on call, we put our hearts and collective minds into
                    your well-being
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">RESPECT</div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    we acknowledge you and your family and make sure you are
                    included in decisions about your healthcare
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
                    we will approach your healthcare to suit your needs
                  </div>
                </div>

                <div className="card-colored-hover d-flex align-items-center my-2">
                  <div className="card-colored-hover-title px-2">
                    CONFIDENTIAL
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} color="#00af43" />
                  <div className="card-colored-hover-text px-2">
                    your information is safe with u
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* our team */}
        <div className="bg-light py-5">
          <Container>
            <div className="after-state-section-background my-5">
              <div className="card-item-title text-center mb-3">Our Team</div>
              <h2 className="text-center">Meet The BALAY ATIPAN People's</h2>
              <h4 className="text-center">Our team's ready to serve you.</h4>
            </div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">OFFICERS</h4>
              </div>
            </div>
            <div className="row mb-2">{this.renderOfficers("OFFICERS")}</div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">BOARD OF DIRECTORS</h4>
              </div>
            </div>
            <div className="row mb-2">
              {this.renderOfficers("BOARD OF DIRECTORS")}
            </div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">MANAGEMENT {"&"} OPERATIONS</h4>
              </div>
            </div>
            <div className="row mb-2">
              {this.renderOfficers("MANAGEMENT & OPERATIONS")}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default AboutPage;
