import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
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
            <input id="menu-toggle" type="checkbox" />
            <label className="burger-menu" htmlFor="menu-toggle">
              <FontAwesomeIcon icon={faBars} size="2x" color="#393E46" />
            </label>
            <div className="navbar-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services" onClick={this._handleHideMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/doctors">Doctors</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonial</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
