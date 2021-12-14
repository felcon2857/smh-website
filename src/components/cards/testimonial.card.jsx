import {
  faHeart,
  faSadCry,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export function TestimonialCard({ item }) {
  const navigate = useNavigate();
  const _handleOnClickRead = (id) => {
    navigate("/testimonials/reviews/" + id);
  };
  return (
    <div className="col-lg-6 mt-4">
      <div
        className="testimonial-card"
        onClick={() => {
          _handleOnClickRead(item.id);
        }}
      >
        <div className="testimonial-card-title mt-2 mb-4">
          {item.client_name}
        </div>
        <div className="testimonial-card-text my-2">{item.testimony}</div>
        <div className="">
          {/* <button
            className="card-theme-btn"
            id="read-more"
            onClick={() => {
              _handleOnClickRead(item.id);
            }}
          >
            Read More <i className="feather-arrow-right"></i>
          </button> */}
        </div>
        <div className="d-flex align-item-center mt-4">
          <button className="btn-reaction">
            <FontAwesomeIcon icon={faHeart} size="1x" />
          </button>
          <button className="btn-reaction">
            <FontAwesomeIcon icon={faThumbsUp} size="1x" />
          </button>
          <button className="btn-reaction">
            <FontAwesomeIcon icon={faSadCry} size="1x" />
          </button>
        </div>
      </div>
    </div>
  );
}
