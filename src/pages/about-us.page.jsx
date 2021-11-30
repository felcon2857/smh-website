import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "ABOUT US | STA. MONICA HOMECARE";
  };
  render() {
    return (
      <div id="about-us">
        <PageHeader
          page_title="About us"
          tagline="Your Health. Your Home. Our Care."
        />
        <Container></Container>
      </div>
    );
  }
}
export default AboutPage;
