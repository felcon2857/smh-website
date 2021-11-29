import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { testimonial } from "../data/testimonial.data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testimonial,
    };
  }
  componentDidMount = () => {
    document.title = "STA. MONICA HOMECARE";
  };
  renderTestimonials() {
    return this.state.data.map((testimony, i) => (
      <TestimonialCard key={i} item={testimony} />
    ));
  }
  render() {
    return (
      <div id="bg-body">
        <div className="landing-page-top">
          <div className="landing-page-background">
            <div className="landing-page-background-image">
              <Container>
                <div className="row align-items-center landing-page-promise ">
                  <div className="col-lg-6">
                    <h1 className="landing-page-promise-title fade-in-bottom">
                      <span>Healthcare</span> should not be expensive.
                    </h1>
                    <p className="landing-page-promise-quote my-3 fade-in-bottom2">
                      We provide quality medical services within the comfort of
                      your home. We have profesionals that can take care of you
                      round the clock.
                    </p>
                    <button className="theme-btn my-3 fade-in-bottom3">
                      Make an Appointment
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        {/* after state */}
        <div className="after-state-section">
          <Container>
            <div className="after-state-section-background my-5">
              <h2 className="text-center fade-in-bottom">
                First online homecare services in Western Visayas
              </h2>
              <h4 className="text-center fade-in-bottom2">
                Your Health. Your Home. Our Care.
              </h4>
            </div>
            {/* mission vision */}
            <div className="row">
              <div className="col-lg-6">
                <div className="card-item py-4 px-5 fade-in-bottom">
                  <img
                    src="/assets/eye-icon.png"
                    alt="eye-icon"
                    className="img-icon"
                  />
                  <h2 className="card-item-title my-3">Our Vision</h2>
                  <p className="card-item-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-item p-4 fade-in-bottom">
                  <img
                    src="/assets/target-icon.png"
                    alt="target-icon"
                    className="img-icon"
                  />
                  <h2 className="card-item-title my-3">Our Mission</h2>
                  <p className="card-item-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            {/* goals */}
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container-legf">Your Image Here</div>
              </div>
              <div className="col-lg-6">
                <div className="card-item-colored px-5 py-5 fade-in-bottom">
                  <h2 className="card-item-title mb-3">Our Goals</h2>
                  <div className="card-item-content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed
                      dinonumy eirmod tempor invidunt ut labore.
                    </p>
                    {/* goal in accordion */}
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Goal Item #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Goal item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Goal Item #3</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Goal Item #4</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Goal Item #5</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Goal Item #6</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Goal Item #7</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    {/* end goal in accordion */}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* after state 2 */}
        <div className="after-state-section">
          <Container>
            <div className="after-state-section-background my-5">
              <div className="card-item-title text-center mb-3">
                Services We Offer
              </div>
              <h2 className="text-center fade-in-bottom">
                What We Provide for Your Health
              </h2>
              <h4 className="text-center fade-in-bottom2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                <br />
                dinonumy eirmod tempor invidunt ut labore et dolore magn.
              </h4>
            </div>
            <img
              src="/assets/graph-img.png"
              alt="graph-img"
              className="img-after"
            />
            <div className="list-of-service container">
              <div className="row">
                {/* xray */}
                <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/x-rays-icon.png" alt="x-rays-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">X-ray</div>
                  </div>
                </div>
                {/* lab */}
                <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img
                        src="/assets/microscope-icon.png"
                        alt="microscope-icon"
                      />
                    </div>
                    <div className="list-of-service-text mt-4">LABORATORY</div>
                  </div>
                </div>
                {/* rehab */}
                <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img
                        src="/assets/rehabilitation-icon.png"
                        alt="rehabilitation-icon"
                      />
                    </div>
                    <div className="list-of-service-text mt-4">
                      REHABILITATION
                    </div>
                  </div>
                </div>
                {/* pharmacy */}
                <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img
                        src="/assets/medicine-icon.png"
                        alt="medicine-icon"
                      />
                    </div>
                    <div className="list-of-service-text mt-4">PHARMACY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-3">
              <button className="theme-btn my-3">View All Service Lists</button>
            </div>
          </Container>
        </div>
        {/* after state 2 */}
        <div className="after-state-section">
          <Container>
            <div className="after-state-section-background my-5">
              <h2 className="text-center fade-in-bottom">
                What our client say?
              </h2>
              <h4 className="text-center fade-in-bottom2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                <br />
                dinonumy eirmod tempor invidunt ut labore et dolore magn.
              </h4>
              {/* testimonial card */}
              <div className="row my-5 mx-5 pt-4">
                {this.renderTestimonials()}
              </div>
              <div className="text-center my-3">
                <button className="theme-btn my-3">View All Testimonial</button>
              </div>
            </div>
          </Container>
        </div>
        {/* last to call aciton */}
        <div className="to-call-action p-5">
          <Container>
            <div className="to-call-action-prefer my-3">
              <h2 className="text-center">Let's get started</h2>
              <h4 className="text-center my-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dinonumy <br />
                eirmod tempor invidunt ut labore et dolore magn.
              </h4>
            </div>
            <div className="my-3">
              <div className="text-center my-3">
                <button className="theme-btn my-3">
                  Make an Appointment Now!
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default HomePage;
