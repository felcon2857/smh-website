import React from "react";
import { Container } from "react-bootstrap";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className="vh-100 my-5">
          <h1>About Us</h1>
        </div>
      </Container>
    );
  }
}
export default AboutPage;
