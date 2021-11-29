import React from "react";
import { Container } from "react-bootstrap";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className="vh-100 my-5">
          <h1>Our Services</h1>
        </div>
      </Container>
    );
  }
}
export default ServicesPage;
