import React, { Component } from "react";

class RoughNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-warning m-2">0</span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default RoughNavbar;
