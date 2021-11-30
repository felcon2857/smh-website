import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/page-header/pageheader.component";

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    document.title = "EVENTS | STA. MONICA HOMECARE";
  };
  render() {
    return (
      <div id="eventys">
        <PageHeader
          page_title="Latest Events"
          tagline="Be updated to our service and events"
        />
        <Container></Container>
      </div>
    );
  }
}
export default EventsPage;
