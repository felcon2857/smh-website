import React from "react";
import { Container } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <Container>
          <div className="footer-info-section pb-3">
            <div className="row align-items-center">
              <div className="col-lg-7">
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
              <div className="col-lg-5">
                <div className="footer-contact-info-section">
                  <div className="row">
                    <div className="col-lg-12 my-2">
                      <a
                        className="footer-contact-info-section-icon"
                        href="https://web.facebook.com/Balay-Atipan-100231752530357"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                        &nbsp; Visit Our Facebook Page
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 my-2">
                      <a className="footer-contact-info-section-icon" href="/">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        &nbsp; Smart: 0999-9752665 | Globe: 0966-7384977 |
                        Landline: (034) 468-5203
                      </a>
                    </div>
                  </div>
                </div>
                <div className="footer-brand-section">
                  <div className="footer-brand-section-text">
                    Copyright &copy; Sta. Monica Homecare 2021. All rights
                    Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default FooterComponent;
