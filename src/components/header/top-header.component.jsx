import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top-header">
        <Container>
          <div className="top-header-content">
            <div className="top-header-content-left">
              <div className="top-header-content-left-item">
                <FontAwesomeIcon icon={faPhoneAlt} />
                &nbsp; Smart: 0929-478-0834 | Globe: 0966-738-4977 | Landline:
                (034) 468-5203
              </div>
            </div>
            <div className="top-header-content-right">
              <a
                className="top-header-content-right-item"
                href="https://web.facebook.com/Balay-Atipan-100231752530357"
                target="_blank"
                rel="noreferrer"
              >
                <div className="top-header-content-right-item-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="top-header-content-right-item-text">
                  Visit our facebook page
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default TopHeader;
