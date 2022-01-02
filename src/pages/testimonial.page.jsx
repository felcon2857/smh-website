import React from "react";
import { Container, Modal } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { testimonial } from "../data/testimonial.data";

class TestimonialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: testimonial };
  }

  componentDidMount = () => {
    document.title = "TESTIMONIALS | STA. MONICA HOMECARE";
  };
  renderTestimonials() {
    return this.state.data.map((testimony, i) => (
      <TestimonialCard key={i} item={testimony} />
    ));
  }
  render() {
    let closeModal = () => this.setState({ open: false });
    return (
      <div id="testimonial">
        <PageHeader
          page_title="Testimonial"
          tagline="See client feedbacks about our services"
        />
        <div className="bg-lighter">
          <Container>
            <div className="after-state-section-background py-5">
              <h4 className="text-center">
                Give us your feedbacks and let us know what you think about our
                services.
              </h4>
              <div className="pt-4 text-center">
                <button
                  className="theme-btn"
                  onClick={() => this.setState({ open: true })}
                >
                  Give us Feedback
                </button>
              </div>
              {/* testimonial card */}
              <div className="row my-3 mx-2 pt-4">
                {this.renderTestimonials()}
              </div>
            </div>
          </Container>
        </div>
        {/* testimonial modal */}
        <Modal
          show={this.state.open}
          onHide={closeModal}
          aria-labelledby="ModalHeader"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">
              Give a review about our service
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* your name */}
              <div className="col-lg-12 my-2">
                <label htmlFor="" className="label-modal">
                  Your prefered name:
                </label>
                <input
                  type="text"
                  className="form-input-side"
                  placeholder="What would you like us to call you?"
                />
              </div>
              {/* review */}
              <div className="col-lg-12 my-2">
                <label htmlFor="" className="label-modal">
                  Your review:
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="form-input-side"
                  placeholder="Message"
                ></textarea>
              </div>
              {/* agree */}
              <div className="col-lg-12 mt-1">
                <label className="check-container">
                  I agree that my review posted here will be use by Balay
                  Atipan.
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="notes mb-3">
                <span>Notes:</span> All given testimonial will be review and
                classified to avoid the spam content in this page.
              </div>
            </div>
            <Modal.Footer>
              <button
                className="section-card-button-theme-seamless mx-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="section-card-button-theme">Post Review</button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default TestimonialPage;
