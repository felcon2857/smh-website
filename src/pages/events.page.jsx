import React from "react";
import { Container, Modal } from "react-bootstrap";
import { EventCard } from "../components/cards/event.card";
import PageHeader from "../components/page-header/pageheader.component";
import { api } from "../services/api";

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isOpenModal: false,
    };
  }
  componentDidMount = () => {
    document.title = "EVENTS | STA. MONICA HOMECARE";
    this.getEvents();
  };
  getEvents = async () => {
    await fetch(api + "events/published", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((results) => {
        if (results.data.length > 0) {
          this.setState({ data: results.data });
        } else {
          this.setState({ data: null });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // card events render
  renderEventCards() {
    return this.state.data.map((events_published, i) => (
      <EventCard key={i} item={events_published} />
    ));
  }
  render() {
    return (
      <div id="events">
        <PageHeader
          page_title="Latest Events"
          tagline="Be updated to our service and events"
        />
        <div className="py-5 bg-light">
          <Container>
            {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : (
              <div className="row py-5">
                <div className="col-lg-12 py-3">
                  <div className="h1 fw-bold text-muted">No Events Posted</div>
                </div>
              </div>
            )}
          </Container>
        </div>
        {/* testimonial modal */}
        <Modal
          show={this.state.isOpenModal}
          onHide={() => this.setState({ isOpenModal: false })}
          aria-labelledby="ModalHeader"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="ModalHeader">
              Give a review about our service
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Footer>
              <button
                className="section-card-button-theme-seamless mx-2"
                onClick={() => this.setState({ isOpenModal: false })}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default EventsPage;
