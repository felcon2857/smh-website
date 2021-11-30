import React from "react";
import { Container } from "react-bootstrap";

function SliderCard() {
  return (
    <div>
      <Container>
        <div className="slider-container">
          <div className="slider-container-content">
            <div className="slider-carousel-content">
              {/* images */}
              <div className="slider-image-content">
                <img src="" alt="" />
              </div>
              {/* text and button*/}
              <div className="slider-text-content">
                <h1 className="slider-text-title"></h1>
                <h1 className="slider-text-sub"></h1>
                <button className="slider-text-button"></button>
              </div>
              {/* arrow navigation */}
              <div className="arrow-content-left"></div>
              <div className="arrow-content-right"></div>
              {/* dots navigation */}
              <div className="dots-content"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
