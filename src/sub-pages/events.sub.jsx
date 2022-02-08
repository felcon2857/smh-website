import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { api } from "../services/api";

function EventSub() {
  let { id } = useParams();
  const [event, setEvent] = React.useState([]);

  const getSelectedEvent = async () => {
    await fetch(api + "events/edit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((results) => {
        setEvent(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getSelectedEvent();
  }, []);
  return (
    <div id="event_view" className="py-5 bg-light">
      <div className="py-5">
        <div className="container px-5">
          <div className="view-header px-5">
            <div className="view-title d-flex align-item-center justify-content-between pb-3">
              <Link to="/events">
                <FontAwesomeIcon icon={faArrowLeft} />
                &nbsp;Back to events
              </Link>
              <h3>
                {event.title}
                <br />
                <span className="text-muted">By: {event.author}</span>
              </h3>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} /> Published:&nbsp;
                {moment(event.publish_date).format("Do MMM, yy")}
              </span>
            </div>
            <div className="view-body py-5">
              <p className="view-body-text">{event.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventSub;
