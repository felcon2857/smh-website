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
            <input
              id="menu-toggle"
              type="checkbox"
              checked={this.state.checked}
            />
            <label
              className="burger-menu"
              htmlFor="menu-toggle"
              onClick={() => this.setState({ checked: !this.state.checked })}
            >
              <FontAwesomeIcon icon={faBars} size="2x" color="#393E46" />
            </label>
            <div className="navbar-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctors"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => this.setState({ checked: false })}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => this.setState({ checked: false })}
                  >
                    Contact
                  </Link>
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
