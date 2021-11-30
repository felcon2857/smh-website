import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navbar-area sticky-top">
        <div className="navbar">
          <div className="inner-navbar container">
            <a className="navbar-logo" href="/">
              <img src="/BA-sm.png" alt="" />
              <div className="header-title">
                <div className="top-title">
                  Sta. Monica Healthcare Solutions Inc.
                </div>
                <div className="main-title">BALAY ATIPAN</div>
                <div className="sub-title">
                  Your health. Your home. Our care.
                </div>
              </div>
            </a>
            <div className="navbar-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
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
      </div>
    );
  }
}
export default HeaderComponent;
