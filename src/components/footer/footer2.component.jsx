import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function FooterComponentsTwo() {
  return (
    <div className="container pb-5">
      <div className="row py-3">
        <div className="col-lg-12">
          {/* footer logo */}
          <div className="d-flex justify-content-center">
            <div className="footer-logo">
              <img src="/BA-sm.png" alt="" />
              <div className="footer-title">
                <div className="bottom-title">
                  Sta. Monica Healthcare Solutions Inc.
                </div>
                <div className="main-title">BALAY ATIPAN</div>
                <div className="sub-title">
                  Your health. Your home. Our care.
                </div>
              </div>
            </div>
          </div>
          {/* end footer logo */}

          {/* footer menu */}
          <div className="footer-menu">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-menu-section">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/doctors">Doctors</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonial</Link>
                    </li>
                    <li>
                      <Link to="/teams">Teams</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end footer menu */}

          {/* footer contact info */}
          <hr />
          <div className="footer-contact-info">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="footer-brand-section">
                  <div className="footer-brand-section-text">
                    Copyright &copy; Sta. Monica Homecare{" "}
                    {moment().format("YYYY")}. All rights Reserved.
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-3">
                <div className="flex-grid">
                  <a
                    className="footer-contact-info-section-icon"
                    href="https://web.facebook.com/Balay-Atipan-100231752530357"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                    &nbsp; Facebook Page
                  </a>

                  <a className="footer-contact-info-section-icon" href="/">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    &nbsp;Smart: 0929-478-0834
                  </a>
                  <a className="footer-contact-info-section-icon" href="/">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    &nbsp; Globe: 0966-738-4977
                  </a>
                  <a className="footer-contact-info-section-icon" href="/">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    &nbsp;(034) 468-5203
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterComponentsTwo;
