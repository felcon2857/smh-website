import { faMobileAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "CONTACT | STA. MONICA HOMECARE SOLUTIONS INC.";
  };
  render() {
    return (
      <div id="contact">
        <PageHeader page_title="Contact Us" tagline="Please let us help you" />
        <div className="py-5 bg-light">
          <Container>
            <div className="row">
              {/* form sender */}
              <div className="col-lg-6">
                <div className="form-card">
                  <form action="" method="post">
                    <div className="form-title">Send us a Message</div>
                    <div className="form-sub-title mb-4">
                      Please fill up and we will get back to you
                    </div>
                    {/* row1 */}
                    <div className="row mt-2">
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          name="fullname"
                          id="fullname-id"
                          className="form-input"
                          placeholder="Fullname"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          name="phone"
                          id="phone-id"
                          className="form-input"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    {/* row 2 */}
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <input
                          type="email"
                          name="email"
                          id="email-id"
                          className="form-input"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    {/* row 3 */}
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <input
                          type="text"
                          name="address"
                          id="address-id"
                          className="form-input"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    {/* row 3 */}
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <textarea
                          name=""
                          id=""
                          cols="0"
                          rows="5"
                          className="form-input"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    {/* row 4 */}
                    <div className="row">
                      <div className="col-lg-12 mb-3 text-right">
                        <button className="theme-btn  float-right">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* other contact information */}
              <div className="col-lg-6">
                <div className="row mt-2">
                  <div className="form-title">Call us</div>
                  <div className="form-sub-title mb-3">
                    We are here to listen to your concern.
                    {/* We are here to listen in your concern. */}
                  </div>
                  {/* smart number */}
                  <div className="col-lg-6">
                    {/* smart */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">Smart</div>
                      <div className="card-colored-hover-text2 px-2">
                        (0929) 478 0834
                      </div>
                    </div>
                    {/* smart 1 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Smart 1
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0999) 975 2666
                      </div>
                    </div>
                    {/* smart 2 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Smart 2
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0999) 975 2665
                      </div>
                    </div>
                    {/* smart 3 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Smart 3
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0999) 975 2653
                      </div>
                    </div>
                  </div>
                  {/* globe number */}
                  <div className="col-lg-6">
                    {/* globe */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faPhoneAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Landline
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        +63 34 468 5203
                      </div>
                    </div>
                    {/* smart 1 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Globe 1
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0966) 738 4975
                      </div>
                    </div>
                    {/* smart 2 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Globe 2
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0966) 738 4977
                      </div>
                    </div>
                    {/* smart 3 */}
                    <div className="card-colored-hover d-flex align-items-center my-2">
                      <FontAwesomeIcon icon={faMobileAlt} color="#00af43" />
                      <div className="card-colored-hover-title px-2">
                        Globe 3
                      </div>
                      <div className="card-colored-hover-text2 px-2">
                        (0966) 738 4978
                      </div>
                    </div>
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

export default ContactPage;
