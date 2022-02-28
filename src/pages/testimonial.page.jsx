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
      onReadText: "Read More",
      readMore: false,
      countHeart: [],
      countSadCry: [],
      countThumbsUp: [],
    };
  }

  componentDidMount = () => {
    document.title = "TESTIMONIALS | STA. MONICA HOMECARE SOLUTIONS INC.";
    this.onRenderReview();
    this.getReactHeartMain();
    this.getReactSadCryMain();
    this.getReactThumbsUpMain();
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
  handleOnClickRead = () => {
    if (this.state.onReadText === "Read More") {
      this.setState({
        onReadText: "Read Less",
        readMore: true,
      });
    } else {
      this.setState({ onReadText: "Read More", readMore: false });
    }
  };
  // reaction
  handleReactionMain = (reaction, review_id) => {
    fetch(api + "reviews/reactions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review_id: review_id,
        reaction: reaction,
        token_sniffer: "ea92e3d9b6922de3f1ab4bf3c5c183b1",
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          this.getReactHeartMain();
          this.getReactSadCryMain();
          this.getReactThumbsUpMain();
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getReactHeartMain = async () => {
    await fetch(api + "reviews/reactions/count", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reaction: "heart",
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
        this.setState({ countHeart: results.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getReactSadCryMain = async () => {
    await fetch(api + "reviews/reactions/count", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reaction: "sadcry",
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
        this.setState({ countSadCry: results.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getReactThumbsUpMain = async () => {
    await fetch(api + "reviews/reactions/count", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reaction: "thumbsup",
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
        this.setState({ countThumbsUp: results.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let closeModal = () => this.setState({ open: false });
    return (
      <div id="testimonial">
        <PageHeader
          page_title="Testimonial"
          tagline="Read clients' feedback about our services"
        />
        <div className="bg-white">
          <Container>
            <div className="after-state-section-background py-5">
              <h4 className="text-center">
<<<<<<< HEAD
                Give us your feedback and let us know what you think about our services.
=======
                Give us your feedback and let us know what you think about our
                services.
>>>>>>> 8b669d2656cff6f3e37be11e6c042508ce9c87e8
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
          <div className="bg-lighter py-5 px-4">
            <div className="container py-5">
              {/* balcells */}
              <div className="featured-card my-3">
                <div className="row">
                  {/* image */}
                  <div className="col-md-4">
                    <div className="featured-card-image">
                      <img src="../assets/featured-img.png" alt="testimonial" />
                    </div>
                  </div>
                  {/* content */}
                  <div className="col-md-8">
                    <div className="featured-card-content">
                      <div className="px-3 py-3">
                        <div className="featured-card-bookmark">
                          <span>FEATURED</span>
                        </div>
                      </div>

                      <h4 className="featured-card-title">ANNA BALCELLS</h4>
                      <p
                        className="featured-card-sub"
                        style={{ color: "#00AF43" }}
                      >
                        One very happy Patient, after a hard battle with
                        COVID-19. Cared for by Balay Atipan
                      </p>
                      <p
                        className={
                          !this.state.readMore
                            ? "featured-card-text my-2"
                            : "featured-card-text-open my-2"
                        }
                      >
                        <span>
                          When I was hit badly with Covid last November, I had
                          all the severe symptoms - low oxygen, difficulty
                          breathing, altered sense of taste, body aches and
                          debilitating weakness. Worse, I ended up with double
                          pneumonia. Even with the seriousness of my condition,
                          getting admitted to a hospital was a long shot, as
                          they were all at maximum capacity at the time.
                        </span>
                        <br />
                        <br />
                        <span>
                          Employing the services of BALAY ATIPAN was the best
                          decision I made. Aside from the convenience of having
                          all the tests and procedures done at the comforts of
                          my own room, delivering and administering all my
                          medications, they assigned to me two wonderful nurses
                          to monitor everything and relay it to my team of
                          doctors in real-time.
                        </span>
                        <br />
                        <br />
                        <span>
                          All the worries and anxieties I initially had - BALAY
                          ATIPAN really took that weight off my shoulders. 25
                          days in total isolation was incredibly difficult, but
                          due to the assurance of care that they have afforded
                          me, I was able to rest and recuperate with peace of
                          mind that I was getting proper and immediate care.
                        </span>
                        <br />
                        <br />
                        <span>
                          Now that I have recovered, I truly recall the
                          excellent service of BALAY ATIPAN as my life-saver. It
                          is really a blessing for us Negrenses to have this
                          kind of home care service.
                        </span>
                      </p>
                    </div>
                    <div className="d-flex align-item-center justify-content-between">
                      <button
                        className="featured-read-btn my-3"
                        onClick={() => this.handleOnClickRead()}
                      >
                        {this.state.onReadText}
                      </button>
                      {/* display reaction icon emoji */}
                      <div className="d-flex align-item-center justify-content-end">
                        <button
                          className="btn-reaction mx-2"
                          onClick={() => this.handleReactionMain("heart", 200)}
                        >
                          <img
                            src="/assets/heart-emoji.png"
                            alt="heart-emoji"
                          />
                          <div className="score">
                            {this.state.countHeart &&
                              this.state.countHeart.filter(
                                (iHeart) => iHeart.review_id === 200
                              ).length}
                          </div>
                        </button>
                        <button
                          className="btn-reaction mx-2"
                          onClick={() =>
                            this.handleReactionMain("thumbsup", 200)
                          }
                        >
                          <img src="/assets/like-emoji.png" alt="like-emoji" />
                          <div className="score">
                            {this.state.countThumbsUp &&
                              this.state.countThumbsUp.filter(
                                (iThumbsUp) => iThumbsUp.review_id === 200
                              ).length}
                          </div>
                        </button>
                        <button
                          className="btn-reaction mx-2"
                          onClick={() => this.handleReactionMain("sadcry", 200)}
                        >
                          <img src="/assets/sad-emoji.png" alt="sad-emoji" />
                          <div className="score">
                            {this.state.countSadCry &&
                              this.state.countSadCry.filter(
                                (iSadCry) => iSadCry.review_id === 200
                              ).length}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Salta-Macesar */}

              <div className="featured-card my-3">
                <div className="row row2 order-sm-first order-md-0">
                  {/* image */}
                  {/* <div className="col-md-4">
                    <div className="featured-card-image">
                      <img src="../assets/featured-img.png" alt="testimonial" />
                    </div>
                  </div> */}
                  {/* content */}
                  <div className="col-md-8">
                    <div className="featured-card-content">
                      <div className="px-3 py-3">
                        <div className="featured-card-bookmark">
                          <span>FEATURED</span>
                        </div>
                      </div>

                      <i
                        className="featured-card-sub"
                        style={{ fontSize: "22px", color: "#00AF43" }}
                      >
                        A daughter who lives abroad expresses gratitude to Balay
                        Atipan's Holistic Home Care Services for her beloved
                        aging mother in Bacolod City.
                      </i>
                      <p
                        className={
                          !this.state.readMore
                            ? "featured-card-text my-2"
                            : "featured-card-text-open my-2"
                        }
                      >
                        <span>
                          I am one of those Filipinos who live abroad and
                          confronted daily with the thought of our aging parents
                          back home. As a senior economist in an international
                          organization, I was blessed to be able to visit Mom
                          every quarter and checked on how she was taken cared
                          by her caregivers. Covid-19 pandemic, however, changed
                          our lives. Travels stopped and mom's routine abruptly
                          changed - Isolated, forcibly quarantined in her home,
                          and could not see her friends. Mom's health
                          deteriorated. In November 2021, mom was rushed to
                          Bacolod due to a complicated UTI (a common illness
                          with elderly women). With the pandemic, I did not want
                          Mom to be confined in the hospital for fear of her
                          contracting the virus. Plus, the fact that when an
                          elderly is hospitalized, they become more depressed
                          making recovery more challenging. I am an only child
                          and far from mom - the stress level when Mom is not
                          well is sky-high. Mom's Internal Medicine specialist,
                          Doctor Helen Campos, gave me a really good solution:
                          Balay Atipan (a hospital-like home care). Mom was
                          enrolled with Balay Atipan and given an all out home
                          care (nurse shifts at home, 5 days of IV antibiotics,
                          3x a day Blood sugar check, BP, etc). Balay Atipan
                          went out of its way to take care of mom in Bacolod. It
                          was an end-to-end care service (medicine procurement,
                          supplies, nurses to check on mom, home blood tests,
                          doctor's home visit, tele-consult, etc).
                        </span>
                        <br />
                        <br />
                        <span>
                          More than that, Balay Atipan supported Doctor Campos'
                          medical treatment method of HOLISTIC MEDICINE. Dr.
                          Campos is not just a very good internal medicine
                          specialist but she is also an international and
                          national board certified “lifestyle medicine”
                          specialist. She integrates her two specializations for
                          a wholistic care and healthy living. Dr. Campos
                          revamped Mom's diet and emphasized hygiene, water
                          intake, exercises for the elderly and lots of early
                          morning sunshine. Balay Atipan helped us carry-out Dr.
                          Campos' orders, retrained mom's caregivers, organized
                          dietary/nutrition seminars for the caregivers to
                          understand Mom's nutrition designed by Dr. Campos,
                          checked Mom daily, ensured her supplies. They also
                          organized Mom's pneumonia and flu vaccines and had it
                          administered by no other than Dr. Tiples Ruiz (another
                          excellent specialist, head of Negros' infectious
                          diseases medical treatment and part of Balay Atipan's
                          line-up of outstanding specialists).
                        </span>
                        <br />
                        <br />
                        <span>
                          It has been three months since we started the holistic
                          treatment. Mom is recovering strong. Several meds
                          taken out, blood sugar at pre-diabetic stage, normal
                          blood pressure and not taking BP medication anymore,
                          healthy liver function, higher energy levels, sharp
                          cognitive and memory at 87 years old. Three months
                          under Dr. Campos' care and Balay Atipan's active
                          involvement. Balay Atipan nurses would even go out of
                          their way to visit mom and make her laugh (even when
                          they are off duty), really extra miles of service
                        </span>
                        <br />
                        <br />
                        <span>
                          The journey of caring for mom's health continues and I
                          am not stressed out with Dr. Helen Campos, Dr. Tiples
                          Ruiz and the rest of Balay Atipan with me. As Nurses
                          MJ, Rizza, Arhel and Cyril would say “we got Mom and
                          your back Cel”. I keep thanking God for Balay Atipan
                          (mom's doctors and nurses). A real blessing! SA BALAY
                          ATIPAN, OKAY GID KAMI.
                        </span>
                      </p>
                    </div>
                    <h4
                      className="featured-card-title my-4"
                      style={{ fontSize: "22px" }}
                    >
                      Dr. Cel Salta-Macesar (PhD, International
                      Business/Economics)
                    </h4>
                    <div className="d-flex align-item-center justify-content-between">
                      <button
                        className="featured-read-btn my-3"
                        onClick={() => this.handleOnClickRead()}
                      >
                        {this.state.onReadText}
                      </button>
                      {/* display reaction icon emoji */}
                      <div className="d-flex align-item-center justify-content-end">
                        <button
                          className="btn-reaction mx-2"
                          onClick={() => this.handleReactionMain("heart", 201)}
                        >
                          <img
                            src="/assets/heart-emoji.png"
                            alt="heart-emoji"
                          />
                          <div className="score">
                            {this.state.countHeart &&
                              this.state.countHeart.filter(
                                (iHeart) => iHeart.review_id === 201
                              ).length}
                          </div>
                        </button>
                        <button
                          className="btn-reaction mx-2"
                          onClick={() =>
                            this.handleReactionMain("thumbsup", 201)
                          }
                        >
                          <img src="/assets/like-emoji.png" alt="like-emoji" />
                          <div className="score">
                            {this.state.countThumbsUp &&
                              this.state.countThumbsUp.filter(
                                (iThumbsUp) => iThumbsUp.review_id === 201
                              ).length}
                          </div>
                        </button>
                        <button
                          className="btn-reaction mx-2"
                          onClick={() => this.handleReactionMain("sadcry", 201)}
                        >
                          <img src="/assets/sad-emoji.png" alt="sad-emoji" />
                          <div className="score">
                            {this.state.countSadCry &&
                              this.state.countSadCry.filter(
                                (iSadCry) => iSadCry.review_id === 201
                              ).length}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="featured-card-image"
                      style={{
                        maxWidth: "500px",
                      }}
                    >
                      <img src="../assets/image-goal2.png" alt="testimonial" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
