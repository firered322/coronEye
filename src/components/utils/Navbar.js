import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgba(87,8,105, 0.8)" }}
      >
        <a className="navbar-brand ml-5" href="/">
          CoronEye
        </a>
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
              <a className="nav-link" href="/countries">
                Global Stats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-auto" href="/learn">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-auto" href="#">
                News
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
