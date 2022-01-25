import React from "react";
import { Container, Modal } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { api } from "../services/api";
import * as moment from "moment";

class TestimonialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialData: [],
      checked: false,
      postDisabled: true,
      reviewerName: "",
      reviewerMessage: "",
      successMsg: false,
    };
  }

  componentDidMount = () => {
    document.title = "TESTIMONIALS | STA. MONICA HOMECARE";
    this.onRenderReview();
  };
  renderTestimonials() {
    return this.state.testimonialData.map((testimony, i) => (
      <TestimonialCard key={i} item={testimony} />
    ));
  }
  onAgree = () => {
    if (this.state.reviewerName !== "" || this.state.reviewerName !== "") {
      this.setState({
        postDisabled: !this.state.postDisabled,
        checked: !this.state.checked,
      });
    }
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
  onPostSubmit = async () => {
    if (
      this.state.reviewerName === "" ||
      this.state.reviewerName === "" ||
      this.state.checked === false
    ) {
      alert("Please fill all the fields");
    } else {
      await fetch(api + "reviews/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.reviewerName,
          review: this.state.reviewerMessage,
          consent: "Yes",
          post_date: moment().format("YYYY-MM-DD"),
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Review successfully posted. Thank you!");
            this.setState({
              reviewerMessage: "",
              reviewerName: "",
              checked: false,
              open: false,
            });
          } else {
            console.log("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    let closeModal = () => this.setState({ open: false });
    return (
      <div id="testimonial">
        <PageHeader
<<<<<<< HEAD
          page_title="Testimonial"
          tagline="Read clients' feedback about our services"
=======
          page_title="Testimonials"
          tagline="See client feedbacks about our services"
>>>>>>> 1a0161419fc3340be7bbb3b02418ad1229808226
        />
        <div className="bg-lighter">
          <Container>
            <div className="after-state-section-background py-5">
              <h4 className="text-center">
                Give us your feedback and let us know what you think about our
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
                  onChange={(e) =>
                    this.setState({
                      reviewerName: e.target.value,
                    })
                  }
                  value={this.state.reviewerName}
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
                  onChange={(e) =>
                    this.setState({
                      reviewerMessage: e.target.value,
                    })
                  }
                  value={this.state.reviewerMessage}
                ></textarea>
              </div>
              {/* agree */}
              <div className="col-lg-12 mt-1">
                <label className="check-container">
                  I agree that my review posted here will be use by Balay
                  Atipan.
                  <input type="checkbox" onChange={() => this.onAgree()} />
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
              <button
                className="section-card-button-theme"
                onClick={() => this.onPostSubmit()}
              >
                Post Review
              </button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default TestimonialPage;
