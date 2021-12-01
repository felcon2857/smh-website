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
        <div className="mt-4">
          <button
            className="card-theme-btn"
            id="read-more"
            onClick={() => {
              _handleOnClickRead(item.id);
            }}
          >
            Read More <i className="feather-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
