import React from 'react';
import { NavLink } from 'react-router-dom'

// Components

// import Logo from '../../assests/logo.png'

const Nav = () => {
  return(
    <nav className='nav-bar'>
      <NavLink id="logo" to='/'>Home</NavLink> 
      <NavLink to='/about'>About me</NavLink>
      <NavLink to='/work'>My work</NavLink>
      <NavLink to='/skills'>My skills</NavLink>
      <NavLink to='/passion'>My passion projects</NavLink>
      <NavLink to='/contact'>Contact me</NavLink>
    </nav>
  )
}

export default Nav