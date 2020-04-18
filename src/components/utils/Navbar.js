import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import flag from "./flag.svg";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgba(0,0,70, 0.9)" }}
      >
        <Link to="/">
          <a className="navbar-brand ml-5" href="/">
            CoronEye
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <Link to="/india">
                <a className="nav-link" href="/">
                  <div className="india">
                    <img src={flag} alt="logo" />
                    <p className="nav-options india">India</p>
                  </div>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn">
                <a className="nav-link" href="/">
                  <p className="nav-options ">Learn</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
