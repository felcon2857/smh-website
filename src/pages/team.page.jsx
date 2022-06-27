import React from "react";
import { Container } from "react-bootstrap";
import { TeamCard } from "../components/cards/team.card";
import PageHeader from "../components/page-header/pageheader.component";
import { team } from "../data/team.data";

class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: team };
  }
  componentDidMount = () => {
    document.title = "OUR TEAM | STA. MONICA HOMECARE SOLUTIONS INC.";
  };
  renderOfficers(department) {
    return this.state.data
      .filter((filterTeams) => {
        return filterTeams.department === department;
      })
      .map((teams, i) => {
        return <TeamCard key={i} item={teams} />;
      });
  }
  render() {
    return (
      <div id="team">
        <PageHeader
          page_title="Our Team"
          tagline="Your Health. Your Home. Our Care."
        />
        <div className="bg-light py-5">
          <Container>
            <div className="after-state-section-background my-5">
              {/* <div className="card-item-title text-center mb-3">Our Team</div> */}
              <h2 className="text-center">
                MEET THE BALAY ATIPAN HEALTH PROFESSIONALS
              </h2>
              <h4 className="text-center">Our team is ready to serve you.</h4>
            </div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">OFFICERS</h4>
              </div>
            </div>
            <div className="row mb-2">{this.renderOfficers("OFFICERS")}</div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">BOARD OF DIRECTORS</h4>
              </div>
            </div>
            <div className="row mb-2">
              {this.renderOfficers("BOARD OF DIRECTORS")}
            </div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">MANAGEMENT {"&"} OPERATIONS</h4>
              </div>
            </div>
            <div className="row mb-2">
              {this.renderOfficers("MANAGEMENT & OPERATIONS")}
            </div>
            <div className="row mb-2">
              <div className="col-lg-12">
                <h4 className="text-team-title">NURSING STAFF</h4>
              </div>
            </div>
            <div className="row mb-2">
              {this.renderOfficers("NURSING STAFF")}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default TeamPage;
