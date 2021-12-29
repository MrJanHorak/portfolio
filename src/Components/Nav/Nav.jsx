import React from 'react';
import { Navlink } from 'react-router-dom'

// Components

// import Logo from '../../assests/logo.png'

const Nav = () => {
  return(
    <nav className='nav-bar'>
      <Navlink id="logo" to='/'>Home</Navlink>  //* <img src={Logo}/> */
      <Navlink to='/about'>About me</Navlink>
      <Navlink to='/work'>My work</Navlink>
      <Navlink to='/skills'>My skills</Navlink>
      <Navlink to='/passion'>My passion projects</Navlink>
      <Navlink to='/contact'>Contact me</Navlink>
    </nav>
  )
}