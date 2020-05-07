import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "./Navbar.css";
import flag from "./flag.svg";

class Navbara extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar
          dark
          expand="md"
          style={{ backgroundColor: "rgba(0,0,70, 0.9)" }}
        >
          <NavbarBrand>
            <Link to="/">
              <a className="navbar-brand ml-3" href="/">
                CoronEye
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <div className="india">
                    <img src={flag} alt="logo" />
                    <p className="nav-options india">India</p>
                  </div>
                </DropdownToggle>
                <DropdownMenu
                  right
                  style={{ backgroundColor: "rgba(0,0,70, 0.6)" }}
                >
                  <DropdownItem className="dropdown-parent">
                    <Link to="/india">
                      <p className="dropdwn-item">Stats</p>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="dropdown-parent">
                    <Link to="/zones">
                      <p className="dropdwn-item">Zones</p>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/learn">
                  <a className="nav-link" href="/">
                    <p className="nav-options ">Learn</p>
                  </a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      // <div>
      //   <Navbar bg="light" expand="lg">
      //     <Navbar.Brand>
      //       <Link to="/">
      //         <a className="navbar-brand ml-5" href="/">
      //           CoronEye
      //         </a>
      //       </Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="ml-auto mr-5">
      //         <Nav.Link>
      //           <NavDropdown
      //             className="nav-options"
      //             onMouseEnter={this.handleOpen}
      //             onMouseLeave={this.handleClose}
      //             open={this.state.isOpen}
      //             title="India"
      //             id="basic-nav-dropdown"
      //           >
      //             <NavDropdown.Item href="#action/3.1">
      //               <Link to="/india">
      //                 <a className="nav-link" href="/">
      //                   <div className="india">
      //                     <img src={flag} alt="logo" />
      //                     <p className="nav-options india">India</p>
      //                   </div>
      //                 </a>
      //               </Link>
      //             </NavDropdown.Item>
      //             <NavDropdown.Item href="#action/3.2">Zones</NavDropdown.Item>
      //           </NavDropdown>
      //         </Nav.Link>
      //         <Nav.Link>
      //           <Link to="/learn">
      //             <a className="nav-link" href="/">
      //               <p className="nav-options ">Learn</p>
      //             </a>
      //           </Link>
      //         </Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </div>
      // <nav
      //   className="navbar navbar-expand-lg navbar-dark"
      //   style={{ backgroundColor: "rgba(0,0,70, 0.9)" }}
      // >
      // <Link to="/">
      //   <a className="navbar-brand ml-5" href="/">
      //     CoronEye
      //   </a>
      // </Link>

      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav ml-auto mr-5">
      //       <li className="nav-item">
      // <Link to="/india">
      //   <a className="nav-link" href="/">
      //     <div className="india">
      //       <img src={flag} alt="logo" />
      //       <p className="nav-options india">India</p>
      //     </div>
      //   </a>
      // </Link>
      //       </li>
      //       <li className="nav-item">
      // <Link to="/learn">
      //   <a className="nav-link" href="/">
      //     <p className="nav-options ">Learn</p>
      //   </a>
      // </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

export default Navbara;
