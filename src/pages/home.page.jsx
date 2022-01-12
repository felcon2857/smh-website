import React from "react";
import { Accordion, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { api } from "../services/api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialData: [],
    };
  }
  componentDidMount = () => {
    document.title = "STA. MONICA HOMECARE";
    this.onRenderReview();
  };
  onRenderReview = async () => {
    await fetch(api + "reviews/status", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "published",
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log("error");
        }
      })
      .then((results) => {
        this.setState({
          testimonialData: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderTestimonials() {
    return this.state.testimonialData.map((testimony, i) => (
      <TestimonialCard key={i} item={testimony} />
    ));
  }
  render() {
    return (
      <div id="bg-body">
        {/* carousel landing page */}
        <div className="landing-page-top">
          <Carousel fade>
            {/* carousel 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/image-bg.png"
                alt="image-bg"
                className="desktop-image"
              />
              <img
                className="d-block w-100"
                src="/assets/image-bg-mobile.png"
                alt="image-bg"
                className="mobile-image"
              />
              <Carousel.Caption>
                <Container>
                  <div className="row align-items-center landing-page-promise ">
                    <div className="col-lg-6">
                      <h1 className="landing-page-promise-title fade-in-bottom">
                        <span>Healthcare</span> should <span>not</span> be
                        expensive.
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We believe that everybody has the right to a fair
                        society wherein quality healthcare should not make a
                        huge impact on your finances.
                      </p>
                      <div className="pt-3">
                        <Link
                          className="theme-btn fade-in-bottom3"
                          to="/services"
                          type="button"
                        >
                          GET STARTED
                        </Link>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>

            {/* carousel 2*/}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/services-bg.png"
                alt="services-bg"
                className="desktop-image"
              />
              <img
                className="d-block w-100"
                src="/assets/services-bg-mobile.png"
                alt="services-bg"
                className="mobile-image"
              />

              <Carousel.Caption>
                <Container>
                  <div className="row align-items-center landing-page-promise ">
                    <div className="col-lg-6">
                      <h1 className="landing-page-promise-title fade-in-bottom">
                        THE <span>COMFORT</span> OF HOME CARE
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We understand that your home is your sanctuary. Our
                        thrust is helping you heal and recover right in the
                        comfort of your home.
                      </p>
                      <div className="pt-3">
                        <Link
                          className="theme-btn fade-in-bottom3"
                          to="/doctors"
                          type="button"
                        >
                          SCHEDULE NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>

            {/* carousel 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/services-bg.png"
                alt="services-bg"
                className="desktop-image"
              />
              <img
                className="d-block w-100"
                src="/assets/services-bg-mobile.png"
                alt="services-bg"
                className="mobile-image"
              />

              <Carousel.Caption>
                <Container>
                  <div className="row align-items-center landing-page-promise ">
                    <div className="col-lg-6">
                      <h1 className="landing-page-promise-title fade-in-bottom">
                        Your <span>health</span> is our top{" "}
                        <span>Priority</span>
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We provide quality medical services with medical
                        professionals who can take care of you round the clock.
                      </p>
                      <div className="pt-3">
                        <Link
                          className="theme-btn fade-in-bottom3"
                          to="/services"
                          type="button"
                        >
                          OUR SERVICES
                        </Link>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>

            {/* carousel 4*/}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/doctor-bg.png"
                alt="doctor-bg"
                className="desktop-image"
              />
              <img
                className="d-block w-100"
                src="/assets/doctor-bg-mobile.png"
                alt="doctor-bg"
                className="mobile-image"
              />
              <Carousel.Caption>
                <Container>
                  <div className="row align-items-center landing-page-promise ">
                    <div className="col-lg-6">
                      <h1 className="landing-page-promise-title fade-in-bottom">
                        <span>COVID-19</span> and <span>NON-COVID</span> CARE
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        Our medical professionals cater to both COVID-19 and
                        NON-COVID patients. Our medical professionals are
                        trained to practice the utmost of safety measures.
                      </p>
                      <div className="pt-3">
                        <Link
                          className="theme-btn fade-in-bottom3"
                          to="/services"
                          type="button"
                        >
                          LOOK FOR A DOCTOR
                        </Link>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* after state */}
        <div className="after-state-section">
          <Container>
            <div className="after-state-section-background my-5">
              <h2 className="text-center fade-in-bottom">
                THE FIRST COMPREHENSIVE ONLINE <br />
                HOMECARE SYSTEM IN NEGROS OCCIDENTAL
              </h2>
              <h4 className="text-center fade-in-bottom2">
                <i>Your Health. Your Home. Our Care.</i>
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
                    Through our team of highly trained, experienced, and
                    dedicated health and medical professionals, we will provide
                    quality, practical and cost-effective home-care services
                    which meet the needs of our patients and their families.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-item py-4 px-5 fade-in-bottom">
                  <img
                    src="/assets/target-icon.png"
                    alt="target-icon"
                    className="img-icon"
                  />
                  <h2 className="card-item-title my-3">Our Mission</h2>
                  <p className="card-item-content">
                    Be a premium provider of home-based health and wellness
                    services.
                  </p>
                </div>
              </div>
            </div>
            {/* goals */}
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container-left">
                  <img src="/assets/image-goal.png" alt="image-goal" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-item-colored py-5 fade-in-bottom">
                  <h2 className="card-item-title mb-3">Our Values</h2>
                  <div className="card-item-content">
                    <p>
                      {/* Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed
                      dinonumy eirmod tempor invidunt ut labore. */}
                    </p>
                    {/* goal in accordion */}
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>INTEGRITY</Accordion.Header>
                        <Accordion.Body>
                          We do what is right even when no one is looking
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>TEAMWORK</Accordion.Header>
                        <Accordion.Body>We think and act as one</Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>DEDICATION</Accordion.Header>
                        <Accordion.Body>
                          always on call, we put our hearts and collective minds
                          into your well-being.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>RESPECT</Accordion.Header>
                        <Accordion.Body>
                          We acknowledge you and your family and make sure you
                          are included in decisions about your healthcare
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>COMPASSION</Accordion.Header>
                        <Accordion.Body>
                          We are sensitive and concerned about you and your
                          well-being.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>CUSTOMIZED </Accordion.Header>
                        <Accordion.Body>
                          We will approach your healthcare to suit your needs.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6">
                        <Accordion.Header>CONFIDENTIAL</Accordion.Header>
                        <Accordion.Body>
                          Your information is safe with us.
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
                Our Services
              </div>
              <h2 className="text-center fade-in-bottom">
                What We Provide for Your Health
              </h2>
              <h4 className="text-center fade-in-bottom2">
                Choose from a wide range of Balay Atipan services:
              </h4>
            </div>

            <div className="mb-5 list-of-service container">
              {/* new section */}
              <div className="row">
                <div className="col-lg-6">
                  {/* care kit */}
                  <div className="d-flex align-items-center justify-content-end my-5 mx-4">
                    <div className="title-package-container px-3">
                      <div className="title-package text-right">CARE KIT</div>
                      <div className="sub-title-package text-right">
                        Balay Atipan "CARE KIT" Service.
                      </div>
                    </div>
                    <div className="icon-package">
                      <img src="/assets/consult.png" alt="consult-icon" />
                    </div>
                  </div>
                  {/* 10-DAY CARE PACKAGE*/}
                  <div className="d-flex align-items-center justify-content-end my-5 mx-4">
                    <div className="title-package-container px-3">
                      <div className="title-package text-right">
                        10-DAY's CARE PACKAGE
                      </div>
                      <div className="sub-title-package text-right">
                        Balay Atipan "10 DAY's CARE" Service.
                      </div>
                    </div>
                    <div className="icon-package">
                      <img src="/assets/visit.png" alt="visit-icon" />
                    </div>
                  </div>
                  {/* WOUND CARE*/}
                  <div className="d-flex align-items-center justify-content-end my-5 mx-4">
                    <div className="title-package-container px-3">
                      <div className="title-package text-right">WOUND CARE</div>
                      <div className="sub-title-package text-right">
                        Balay Atipan "WOUND CARE" Service.
                      </div>
                    </div>
                    <div className="icon-package">
                      <img src="/assets/virtual.png" alt="virtual-icon" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* NON-COVID I.V. THERAPY*/}
                  <div className="d-flex align-items-center justify-content-start my-5 mx-4">
                    <div className="icon-package">
                      <img src="/assets/virtual.png" alt="virtual-icon" />
                    </div>
                    <div className="title-package-container px-3">
                      <div className="title-package">
                        NON-COVID I.V. THERAPY
                      </div>
                      <div className="sub-title-package">
                        Balay Atipan "NON-COVID I.V. THERAPY" Service.
                      </div>
                    </div>
                  </div>
                  {/*   COVID I.V. THERAPY */}
                  <div className="d-flex align-items-center justify-content-start my-5 mx-4">
                    <div className="icon-package">
                      <img src="/assets/consult.png" alt="consult-icon" />
                    </div>
                    <div className="title-package-container px-3">
                      <div className="title-package">COVID I.V. THERAPY</div>
                      <div className="sub-title-package">
                        Balay Atipan "COVID I.V. THERAPY" Service.
                      </div>
                    </div>
                  </div>
                  {/* COVID THERAPY WITH CAREGIVER*/}
                  <div className="d-flex align-items-center justify-content-start my-5 mx-4">
                    <div className="icon-package">
                      <img src="/assets/visit.png" alt="visit-icon" />
                    </div>
                    <div className="title-package-container px-3">
                      <div className="title-package">
                        COVID THERAPY WITH CAREGIVER
                      </div>
                      <div className="sub-title-package">
                        Balay Atipan "COVID THERAPY WITH CAREGIVER" Service.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-3">
              <Link to="/services" className="theme-btn my-3" type="button">
                Learn More
              </Link>
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
                See client feedbacks about our services
              </h4>
              {/* testimonial card */}
              <div className="row my-5 mobile-mx pt-4">
                {this.renderTestimonials()}
              </div>
              <div className="text-center my-3">
                <Link
                  to="/testimonials"
                  className="theme-btn my-3"
                  type="button"
                >
                  View All Testimonial
                </Link>
              </div>
            </div>
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
                <Link to="/doctors" className="theme-btn my-3" type="button">
                  Make an Appointment Now!
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default HomePage;
