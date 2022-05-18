import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import DarkMode from "../DarkMode/DarkMode";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div id="humburger">
        <nav className="navBar">
          <button className="hamburger-button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose style={{ width: "40px", height: "40px" }} />
            ) : (
              <FiMenu style={{ width: "40px", height: "40px" }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
            <li>
              <NavLink to="/" onClick={() => closeMenu()}>
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/about" onClick={() => closeMenu()}>
                About Me
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/work" onClick={() => closeMenu()}>
                My work
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => closeMenu()}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/passion" onClick={() => closeMenu()}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => closeMenu()}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-bar">
        <nav className="nav-bar">
          <NavLink className="custom-btn btn-3 button " to="/">
            <span>Home</span>
          </NavLink>
          <NavLink className="custom-btn btn-3 button " to="/about">
            <span>About me</span>
          </NavLink>
          <NavLink className="custom-btn btn-3 button " to="/work">
            <span>My work</span>
          </NavLink>
          <NavLink className="custom-btn btn-3 button " to="/skills">
            <span>Skills</span>
          </NavLink>
          <NavLink className="custom-btn btn-3 button " to="/passion">
            <span>Projects</span>
          </NavLink>
          <NavLink className="custom-btn btn-3 button " to="/contact">
            <span>Contact</span>
          </NavLink>
        </nav>
      </div>
      <DarkMode />
    </>
  );
};

export default Nav;
