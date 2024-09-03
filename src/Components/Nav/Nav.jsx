import React, { useState } from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'

// Components
import DarkMode from '../DarkMode/DarkMode'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <>
      <div id="hamburger">
        <nav className="navBar">
          <button
            className="hamburger-button"
            aria-label="navigation button"
            onClick={handleToggle}
          >
            {navbarOpen ? (
              <MdClose style={{ width: '25px', height: '40px' }} />
            ) : (
              <FiMenu style={{ width: '25px', height: '40px' }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
            <li>
              <NavLink smooth to="#landing" onClick={() => closeMenu()}>
                Home
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink smooth to="#about" onClick={() => closeMenu()}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#skills" onClick={() => closeMenu()}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#projects" onClick={() => closeMenu()}>
                My work
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/passion" onClick={() => closeMenu()}>
                Projects
              </NavLink>
            </li> */}
            <li>
              <NavLink smooth to="#contact" onClick={() => closeMenu()}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-bar">
        <header className="App-header">
          <nav className="navbar">
            <ul>
              <li>
                <NavLink smooth to="#landing">
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink smooth to="#about">
                  <span>About me</span>
                </NavLink>
              </li>
              <li>
                <NavLink smooth to="#skills">
                  <span>Skills</span>
                </NavLink>
              </li>
              <li>
                <NavLink smooth to="#projects">
                  <span>My work</span>
                </NavLink>
              </li>
              {/* <NavLink className="custom-btn btn-3 button " to="/passion">
            <span>Projects</span>
          </NavLink> */}
              <li>
                <NavLink smooth to="#contact">
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <DarkMode />
    </>
  )
}

export default Nav
