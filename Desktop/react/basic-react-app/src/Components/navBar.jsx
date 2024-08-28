import './NavBar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCategoryMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartDisplay = () => {
    navigate('/cart');
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };

  return (
    <div className="hamburger-menu">
      <div className='category-div'>
        <div className='category-hamburger-menu' onClick={toggleCategoryMenu}>
          <h3>Categories</h3> {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Render CategoryMenu conditionally based on isMenuOpen */}
        {isMenuOpen && <CategoryMenu />}
      </div>

      <h1>Shamaq Traders</h1>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* Navigation links */}
        <Link to='/' onClick={handleClick}>Home</Link>
        <Link to='/about' onClick={handleClick}>About</Link>
        <Link to='/services' onClick={handleClick}>Services</Link>
        <Link to='/contact' onClick={handleClick}>Contact</Link>
      </nav>
      
      <div className='cart-div'>
        <i className="fa-solid fa-cart-shopping" id='cart-icon' onClick={cartDisplay}></i>
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
