import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "CONTACT | STA. MONICA HOMECARE";
  };
  render() {
    return (
      <div id="contact">
        <PageHeader
          page_title="Contact Us"
          tagline="Send us message for more inquiries"
        />
        <Container></Container>
      </div>
    );
  }
}

export default ContactPage;
