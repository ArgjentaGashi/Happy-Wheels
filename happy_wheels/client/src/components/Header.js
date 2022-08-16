import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className='navs'>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <span> | </span>
      <NavLink className="nav-link" to="/new">
        Add a New Wheel
      </NavLink>
      </div>

      <div className='important-details'>
        <div className='text1'>
          <h1>Happy Wheels</h1>
          <p>Go through high hills, with Happy Wheels</p>
        </div>
        <div className='text2'>
          <img src='https://previews.123rf.com/images/ket4up/ket4up1512/ket4up151200106/49363330-wheels-shop-logo-design-wheels-business-branding.jpg' alt='This is my logo'/>
        </div>
      </div>

    </header>
  )
}

export default Header