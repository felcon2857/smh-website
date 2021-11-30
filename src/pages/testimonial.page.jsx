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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                <br />
                dinonumy eirmod tempor invidunt ut labore et dolore magn.
              </h4>
              {/* testimonial card */}
              <div className="row my-3 mx-5 pt-4">
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
