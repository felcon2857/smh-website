import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function EventCard({ item }) {
  return (
    <div className="col-lg-4">
      <div className="card-events">
        <div className="card-events-header py-3">
          <div className="card-events-title">{item.title}</div>
          <div className="card-events-date">
            <FontAwesomeIcon icon={faCalendarAlt} />{" "}
            {moment(item.publish_date).format("Do MMM, yy")}
          </div>
        </div>
        <div className="card-events-body py-3">
          <div className="card-events-text">{item.content}</div>
          <div className="pt-4 pb-2">
            <Link
              className="read-btn-a py-2"
              to={`/events/event_view/${item.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card-events-footer pt-3 pb-2">
          <div className="card-events-footer-text">
            Author : <span>{item.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
