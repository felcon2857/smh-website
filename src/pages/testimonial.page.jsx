import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class TestimonialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "TESTIMONIALS | STA. MONICA HOMECARE";
  };
  render() {
    return (
      <div id="testimonial">
        <PageHeader
          page_title="Testimonial"
          tagline="See client feedbacks about our services"
        />
        <div className="bg-lighter">
          <Container></Container>
        </div>
      </div>
    );
  }
}
export default TestimonialPage;
