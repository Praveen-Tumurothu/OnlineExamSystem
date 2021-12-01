import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light fixed-top "
          id="move"
        >
          <div class="container">
            <NavLink class="navbar-brand" to="/">
              EXAM PORTAL
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <NavLink class="navbar-brand" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="navbar-brand" to="/">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="navbar-brand" to="/courses">
                    Courses
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
