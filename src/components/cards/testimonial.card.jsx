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
  const [countHeart, setCountHeart] = React.useState([]);
  const [countSadCry, setCountSadCry] = React.useState([]);
  const [countThumbsUp, setCountThumbsUp] = React.useState([]);

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
          getReactHeart();
          getReactSadCry();
          getReactThumbsUp();
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // reaction functions call
  const getReactHeart = async () => {
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
        setCountHeart(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getReactSadCry = async () => {
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
        setCountSadCry(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getReactThumbsUp = async () => {
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
        setCountThumbsUp(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get onload reactions
  React.useEffect(() => {
    getReactHeart();
    getReactSadCry();
    getReactThumbsUp();
  }, []);
  return (
    <div className="col-lg-6 mt-4">
      <div className="testimonial-card">
        <div className="testimonial-card-title mt-2 mb-4">{item.name}</div>
        <div
          className={
            !onOpen
              ? "testimonial-card-text my-2"
              : "testimonial-card-text-open my-2"
          }
        >
          {item.review}
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
            <div className="score">
              {countHeart &&
                countHeart.filter((iHeart) => iHeart.review_id === item.id)
                  .length}
            </div>
          </button>
          <button
            className="btn-reaction mx-2"
            onClick={() => handleReaction("thumbsup", item.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} size="xs" />
            <div className="score">
              {countThumbsUp &&
                countThumbsUp.filter(
                  (iThumbsUp) => iThumbsUp.review_id === item.id
                ).length}
            </div>
          </button>
          <button
            className="btn-reaction mx-2"
            onClick={() => handleReaction("sadcry", item.id)}
          >
            <FontAwesomeIcon icon={faSadCry} size="xs" />
            <div className="score">
              {countSadCry &&
                countSadCry.filter((iSadCry) => iSadCry.review_id === item.id)
                  .length}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
