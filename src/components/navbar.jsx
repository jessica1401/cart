import React, { Component } from "react";

//Stateless functional component

const NavBar = ({ totalCounters }) => {

  console.log("Navbar-renderd");
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-warning m-2">{totalCounters}</span>
        </a>
      </nav>
    </React.Fragment>
  );
};

// class NavBar extends React.Component {
//   render() {
    
//   }
// }

export default NavBar;
