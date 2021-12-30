import React from 'react';
import { NavLink } from 'react-router-dom'

// Components

// import Logo from '../../assests/logo.png'

const Nav = () => {
  return(
    <nav className='nav-bar'>
      <NavLink className='page-link' id="logo" to='/'>Home</NavLink> 
      <NavLink className='page-link' to='/about'>About me</NavLink>
      <NavLink className='page-link' to='/work'>My work</NavLink>
      <NavLink className='page-link' to='/skills'>My skills</NavLink>
      <NavLink className='page-link' to='/passion'>My passion projects</NavLink>
      <NavLink className='page-link' to='/contact'>Contact me</NavLink>
    </nav>
  )
}

export default Nav