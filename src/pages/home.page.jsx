import React from "react";
import { Accordion, Carousel, Container } from "react-bootstrap";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { testimonial } from "../data/testimonial.data";
// import { Link } from "react-router-dom";

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
                        <span>Healthcare</span> should not be expensive.
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We believe that everybody has the right to a fair
                        society wherein quality healthcare should not make a
                        huge impact on your finances.
                      </p>
                      <div className="pt-3">
                        <a
                          className="theme-btn fade-in-bottom3"
                          href="/services"
                          type="button"
                        >
                          GET STARTED
                        </a>
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
                        THE COMFORT OF <span>HOME CARE</span>
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We understand that your home is your sanctuary. Our
                        thrust is helping you heal and recover right in the
                        comfort of your home.
                      </p>
                      <div className="pt-3">
                        <a
                          className="theme-btn fade-in-bottom3"
                          href="/doctors"
                          type="button"
                        >
                          SCHEDULE NOW
                        </a>
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
                        Your health is our top <span>Priority</span>
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        We provide quality medical services with medical
                        professionals who can take care of you round the clock.
                      </p>
                      <div className="pt-3">
                        <a
                          className="theme-btn fade-in-bottom3"
                          href="/services"
                          type="button"
                        >
                          OUR SERVICES
                        </a>
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
                        COVID-19 and NON-COVID <span>CARE</span>
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        Our medical professionals cater to both COVID-19 and
                        NON-COVID patients. Our medical professionals are
                        trained to practice the utmost of safety measures.
                      </p>
                      <div className="pt-3">
                        <a
                          className="theme-btn fade-in-bottom3"
                          href="/services"
                          type="button"
                        >
                          LOOK FOR A DOCTOR
                        </a>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>

            {/* carousel 5*/}
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
                        Get a free <span>Medical Advice</span> from our Doctors
                      </h1>
                      <p className="landing-page-promise-quote py-2 fade-in-bottom2">
                        Aside from our various health-oriented services, you can
                        actually TALK to our DOCTOR for FREE!
                      </p>
                      <div className="pt-3">
                        <a
                          className="theme-btn fade-in-bottom3"
                          href="/doctors"
                          type="button"
                        >
                          TALK TO OUR DOCTOR
                        </a>
                      </div>
                    </div>
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* dont use this section */}
          <div className="landing-page-background">
            {/* <div className="landing-page-background-image">
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
                    <div className="my-">
                      <Link
                        className="theme-btn fade-in-bottom3"
                        to="/doctors"
                        type="button"
                      >
                        Make an Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div> */}
          </div>
          {/* dont use this section */}
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
                    Be a premiere provider of home-based health and wellness
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
                    {/* <p>
                      Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed
                      dinonumy eirmod tempor invidunt ut labore.
                    </p> */}
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
                Our Service
              </div>
              <h2 className="text-center fade-in-bottom">
                What We Provide for Your Health
              </h2>
              <h4 className="text-center fade-in-bottom2">
                Choose from a wide range of Balay Atipan services:
              </h4>
            </div>
            <img
              src="/assets/graph-img.png"
              alt="graph-img"
              className="img-after"
            />
            <div className="mb-5 list-of-service container">
              {/* disabled */}
              {/* first row */}
              <div className="row">
                {/* CARE KIT */}
                {/* <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/consult.png" alt="consult-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">CARE KIT</div>
                  </div>
                </div> */}
                {/* 10-DAY CARE PACKAGE */}
                {/* <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/visit.png" alt="visit-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">
                      10-DAY <br />
                      CARE PACKAGE
                    </div>
                  </div>
                </div> */}
                {/* WOUND CARE */}
                {/* <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/virtual.png" alt="virtual-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">WOUND CARE</div>
                  </div>
                </div> */}
                {/* NON-COVID I.V. THERAPY */}
                {/* <div className="col-lg-3">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img
                        src="/assets/medicine-icon.png"
                        alt="medicine-icon"
                      />
                    </div>
                    <div className="list-of-service-text mt-4">
                      NON-COVID I.V.
                      <br /> THERAPY
                    </div>
                  </div>
                </div> */}
              </div>
              {/* disabled */}
              {/* disabled */}
              {/* 2nd row */}
              <div className="row">
                {/* COVID I.V. THERAPY */}
                {/* <div className="col-lg-3 mt-2">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/consult.png" alt="consult-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">
                      COVID I.V. THERAPY
                    </div>
                  </div>
                </div> */}
                {/* COVID THERAPY WITH CAREGIVER */}
                {/* <div className="col-lg-3 mt-2">
                  <div className="list-of-service-container">
                    <div className="list-of-service-img">
                      <img src="/assets/visit.png" alt="visit-icon" />
                    </div>
                    <div className="list-of-service-text mt-4">
                      COVID THERAPY <br />
                      WITH CAREGIVER
                    </div>
                  </div>
                </div> */}
              </div>
              {/* disabled */}
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
              <a href="/services" className="theme-btn my-3" type="button">
                Learn More
              </a>
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
                <a
                  href="/testimonials"
                  className="theme-btn my-3"
                  type="button"
                >
                  View All Testimonial
                </a>
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
              <div className="text-center my-3">
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
export default HomePage;
