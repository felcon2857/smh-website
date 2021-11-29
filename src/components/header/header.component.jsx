import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar">
        <div className="inner-navbar container">
          <div className="navbar-logo">
            <img src="/BA-sm.png" alt="" />
            <div className="header-title">
              <div className="top-title">
                Sta. Monica Healthcare Solutions Inc.
              </div>
              <div className="main-title">BALAY ATIPAN</div>
              <div className="sub-title">Your health. Your home. Our care.</div>
            </div>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/doctors">Doctors</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonial</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderComponent;
