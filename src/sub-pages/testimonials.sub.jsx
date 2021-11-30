import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import PageHeader from "../components/page-header/pageheader.component";
import { testimonial } from "../data/testimonial.data";

function TestimonialSubPage() {
  const pageid = useParams();
  return (
    <div id="testimonial-sub">
      {testimonial
        .filter((testimony) => {
          return testimony.id === pageid.id;
        })
        .map((filterTitle) => (
          <PageHeader
            key={filterTitle.id}
            page_title={filterTitle.client_name + " Testimonial"}
          />
        ))}
      {testimonial
        .filter((revs) => {
          return revs.id === pageid.id;
        })
        .map((filterReviews, index) => (
          <div className="bg-lighter" key={index}>
            <Container className="py-5">
              <div className="simple-height">
                <div className="reviews-text">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size="3x"
                    color="#8C96A7"
                  />
                  <p>{filterReviews.testimony}</p>
                  <div className="client-name">
                    - {filterReviews.client_name}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}
    </div>
  );
}
export default TestimonialSubPage;
