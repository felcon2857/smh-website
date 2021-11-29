import React from "react";

export function TestimonialCard({ item }) {
  return (
    <div className="col-lg-6 mt-4">
      <div className="testimonial-card p-5">
        <div className="testimonial-card-title mt-2 mb-4">
          {item.client_name}
        </div>
        <div className="testimonial-card-text my-2">{item.testimony}</div>
        <div className="mt-4">
          <button className="card-theme-btn">
            Read More <i className="feather-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
