import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";
import { TestimonialCard } from "../components/cards/testimonial.card";
import { testimonial } from "../data/testimonial.data";

class TestimonialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: testimonial };
  }
  componentDidMount = () => {
    document.title = "TESTIMONIALS | STA. MONICA HOMECARE";
  };
  renderTestimonials() {
    return this.state.data.map((testimony, i) => (
      <TestimonialCard key={i} item={testimony} />
    ));
  }
  render() {
    return (
      <div id="testimonial">
        <PageHeader
          page_title="Testimonial"
          tagline="See client feedbacks about our services"
        />
        <div className="bg-lighter">
          <Container>
            <div className="after-state-section-background py-5">
              <h4 className="text-center">
                Give us your feedbacks and let us know what you think about our
                services.
              </h4>
              <div className="pt-4 text-center">
                <button className="theme-btn">Give us Feedback</button>
              </div>
              {/* testimonial card */}
              <div className="row my-3 mx-2 pt-4">
                {this.renderTestimonials()}
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default TestimonialPage;
