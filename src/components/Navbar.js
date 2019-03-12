import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = () => {

  return(
    <nav className='nav-wrapper purple darken-4'>
      <div className='container'>
        <Link to="/" className='brand-logo'>My Assignment 2</Link>
        <ul className='right'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><NavLink to="/contact">Contact Form</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
