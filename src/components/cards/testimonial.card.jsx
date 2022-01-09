import {
  faHeart,
  faSadCry,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function TestimonialCard({ item }) {
  const navigate = useNavigate();
  const [onOpen, setOnOpen] = React.useState(false);
  const [onReadText, setOnReadText] = React.useState("Read More");
  const handleOnClickRead = () => {
    setOnOpen(!onOpen);
    if (onReadText === "Read More") {
      setOnReadText("Read Less");
    } else {
      setOnReadText("Read More");
    }
  };
  const handleReaction = (reaction, review_id) => {
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
          console.log("Reaction added");
        } else {
          console.log("Reaction not added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-lg-6 mt-4">
      <div className="testimonial-card">
        <div className="testimonial-card-title mt-2 mb-4">
          {item.client_name}
        </div>
        <div
          className={
            !onOpen
              ? "testimonial-card-text my-2"
              : "testimonial-card-text-open my-2"
          }
        >
          {item.testimony}
        </div>
        <button className="read-btn" onClick={() => handleOnClickRead()}>
          {onReadText}
        </button>
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
          <button
            className="btn-reaction mx-2"
            onClick={() => handleReaction("heart", item.id)}
          >
            <FontAwesomeIcon icon={faHeart} size="xs" />
            <div className="score">0</div>
          </button>
          <button
            className="btn-reaction mx-2"
            onClick={() => handleReaction("thumbs_up", item.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} size="xs" />
            <div className="score">0</div>
          </button>
          <button
            className="btn-reaction mx-2"
            onClick={() => handleReaction("sad_cry", item.id)}
          >
            <FontAwesomeIcon icon={faSadCry} size="xs" />
            <div className="score">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}
