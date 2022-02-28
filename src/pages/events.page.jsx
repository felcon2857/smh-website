import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    document.title = "EVENTS | STA. MONICA HOMECARE SOLUTIONS INC.";
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
          tagline="Be updated with our events and activities"
        />
        <div className="py-5 bg-light">
          <Container>
            {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : (
              <div className="row py-5">
                <div className="col-lg-12 py-3">
                  <h1 className="text-center event-title">
                    Balay Atipan Blessing Ceremony
                    <div className="event-title-sub my-3">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      &nbsp; Dec 8, 2021
                    </div>
                  </h1>
                  {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events1.JPG"
                      alt="events1"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events2.JPG"
                      alt="events2"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events3.JPG"
                      alt="events3"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events4.JPG"
                      alt="events4"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events5.JPG"
                      alt="events5"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events6.JPG"
                      alt="events6"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events7.JPG"
                      alt="events7"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events8.JPG"
                      alt="events8"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events9.JPG"
                      alt="events9"
                    />
                  </div>
                  <div className="img-wrapper">
                    <img
                      className="inner-img"
                      src="/assets/events10.JPG"
                      alt="events10"
                    />
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    );
  }
}
export default EventsPage;
