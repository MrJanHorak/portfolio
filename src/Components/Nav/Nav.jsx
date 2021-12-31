import React from "react";
import { NavLink } from "react-router-dom";

// Components

// import Logo from '../../assests/logo.png'

const Nav = () => {
  return (
    <nav className="nav-bar">
      <NavLink className="custom-btn btn-3 button page-link" id="logo" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink className="custom-btn btn-3 button page-link" to="/about">
        <span>About me</span>
      </NavLink>
      <NavLink className="custom-btn btn-3 button page-link" to="/work">
        <span>My work</span>
      </NavLink>
      <NavLink className="custom-btn btn-3 button page-link" to="/skills">
        <span>Skills</span>
      </NavLink>
      <NavLink className="custom-btn btn-3 button page-link" to="/passion">
        <span>Projects</span>
      </NavLink>
      <NavLink className="custom-btn btn-3 button page-link" to="/contact">
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
