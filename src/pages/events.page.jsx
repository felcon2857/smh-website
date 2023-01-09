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

          {/* BAZKET */}
          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
            <div className="row py-5">

            
              <div className="col-lg-12 py-3">
                <h1 className="text-center event-title">
                  <div><h1>BazketBCD</h1></div>

                  <div className="img-wrapper">
                    <video className="inner-vid" controls>
                      <source src="/assets/0816bazket/1.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div className="event-title-sub my-3">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp; July 22, 2022
                  </div>

                </h1>
                {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}

                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/0816bazket/b2.png" alt="cs0" />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b1.png"
                    alt="myr1"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b3.jpg"
                    alt="myr2"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b4.jpg"
                    alt="myr3"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b5.jpg"
                    alt="myr4"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b6.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b7.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b8.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b9.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b10.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b11.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b12.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b13.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b14.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b15.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b16.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b17.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b18.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816bazket/b19.jpg"
                    alt="cs01"
                  />
                </div>

              </div>
            </div>
            {/* )} */}
          </Container>
          {/*BAZKET -end*/}

          {/* CONTINUING ENRICHMENTS */}
          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
            <div className="row py-5">


              <div className="col-lg-12 py-3">
                <h1 className="text-center event-title">
                  CONTINUING NURSE EDUCATION and ENRICHMENT PROGRAM

                  <div className="img-wrapper">
                    <video className="inner-vid" controls>
                      <source src="/assets/0816B/video-1658981681.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div className="event-title-sub my-3">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp; July 26, 2022
                  </div>

                </h1>
                {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}

                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/0816b/1.jpg" alt="cs0" />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/2.jpg"
                    alt="myr1"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/3.jpg"
                    alt="myr2"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/4.jpg"
                    alt="myr3"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/5.jpg"
                    alt="myr4"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/6.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/7.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816b/8.jpg"
                    alt="cs01"
                  />
                </div>

              </div>
            </div>
            {/* )} */}
          </Container>
          {/*CONTINUING ENRICHMENT -end*/}

          {/*SY GAMES*/}
          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
            <div className="row py-5">
              <div className="col-lg-12 py-3">
                <h1 className="text-center event-title">
                  <div className="img-wrapper">
                    <img className="inner-img" src="/assets/0816/banner.jpg" alt="cs0" />
                  </div>
                  <div className="event-title-sub my-3">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp; July 2022
                  </div>
                </h1>
                {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}

                <div className="img-wrapper">
                  <video className="inner-vid" controls>
                    <source src="/assets/0816/sy.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/0816/20220716_163520.jpg" alt="cs0" />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816/20220716_163523.jpg"
                    alt="myr1"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816/293252196_1226175121470259_7376293846590794964_n.jpg"
                    alt="myr2"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816/293372546_798931761111339_5811619261366183719_n.jpg"
                    alt="myr3"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816/293632646_1091714908418880_6502522016914059533_n.jpg"
                    alt="myr4"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/0816/20220716_165518.jpg"
                    alt="cs01"
                  />
                </div>

              </div>
            </div>
            {/* )} */}
          </Container>
          {/*SY GAMES -end*/}





          {/*CLUB SOCIALS*/}
          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
            <div className="row py-5">
              <div className="col-lg-12 py-3">
                <h1 className="text-center event-title">
                  CLUB SOCIALS BACOLOD EDITION
                  <div className="event-title-sub my-3">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp; July 1-2, 2022
                  </div>
                </h1>
                {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}

                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs0.jpg" alt="cs0" />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/myr1.jpg"
                    alt="myr1"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/myr2.jpg"
                    alt="myr2"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/myr3.jpg"
                    alt="myr3"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/myr4.jpg"
                    alt="myr4"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/myr5.jpg"
                    alt="myr5"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs01.jpg"
                    alt="cs01"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs02.jpg"
                    alt="cs02"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs03.jpg"
                    alt="cs03"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs04.jpg"
                    alt="cs04"
                  />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs1.jpg" alt="cs1" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs2.jpg" alt="cs2" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs3.jpg" alt="cs3" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs4.jpg" alt="cs4" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs5.jpg" alt="cs5" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs6.jpg" alt="cs6" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs7.jpg" alt="cs7" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs8.jpg" alt="cs8" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/cs9.jpg" alt="cs9" />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs10.jpg"
                    alt="cs10"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs11.jpg"
                    alt="cs11"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs12.jpg"
                    alt="cs12"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs13.jpg"
                    alt="cs13"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs13.jpg"
                    alt="cs13"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs32.jpg"
                    alt="cs32"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs33.jpg"
                    alt="cs33"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs34.jpg"
                    alt="cs34"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs35.jpg"
                    alt="cs35"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs36.jpg"
                    alt="cs36"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs37.jpg"
                    alt="cs37"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs38.jpg"
                    alt="cs38"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs39.jpg"
                    alt="cs39"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs40.jpg"
                    alt="cs40"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/cs41.jpg"
                    alt="cs41"
                  />
                </div>
              </div>
            </div>
            {/* )} */}
          </Container>
          {/*CLUB SOCIALS - end */}

          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
            <div className="row py-5">
              <div className="col-lg-12 py-3">
                <h1 className="text-center event-title">
                  TEAM BUILDING: Balay Atipan Harmony Matters
                  <div className="event-title-sub my-3">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp; February 26, 2022
                  </div>
                </h1>
                {/* <div className="event-img">
                    <img src="/assets/events-bg.png" alt="events-bg" />
                  </div> */}
                <div className="img-wrapper">
                  <video className="inner-vid" controls>
                    <source src="/assets/v1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb1.jpg" alt="tb1" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb2.jpg" alt="tb2" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb3.jpg" alt="tb3" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb4.jpg" alt="tb4" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb5.jpg" alt="tb5" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb6.jpg" alt="tb6" />
                </div>

                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb7.jpg" alt="tb7" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb8.jpg" alt="tb8" />
                </div>
                <div className="img-wrapper">
                  <img className="inner-img" src="/assets/tb9.jpg" alt="tb9" />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb11.jpg"
                    alt="tb11"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb12.jpg"
                    alt="tb12"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb13.jpg"
                    alt="tb13"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb14.jpg"
                    alt="tb14"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb15.jpg"
                    alt="tb15"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb16.jpg"
                    alt="tb16"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb17.jpg"
                    alt="tb17"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb18.jpg"
                    alt="tb18"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb19.jpg"
                    alt="tb19"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb20.jpg"
                    alt="tb20"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb21.jpg"
                    alt="tb21"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb22.jpg"
                    alt="tb22"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb23.jpg"
                    alt="tb23"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb24.jpg"
                    alt="tb24"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb25.jpg"
                    alt="tb25"
                  />
                </div>

                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb28.jpg"
                    alt="tb28"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb29.jpg"
                    alt="tb29"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb30.jpg"
                    alt="tb30"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="inner-img"
                    src="/assets/tb31.jpg"
                    alt="tb31"
                  />
                </div>
              </div>
            </div>
            {/* )} */}
          </Container>

          <Container>
            {/* {this.state.data != null ? (
              <div className="row">{this.renderEventCards()}</div>
            ) : ( */}
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
            {/* )} */}
          </Container>
        </div>
      </div>
    );
  }
}
export default EventsPage;
