import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <>
      <div className='navbar'>
        <div className='left-section'>
          <img
            src='/assets/menu.svg'
            alt='menu'
            className='hamburger'
            onClick={toggleMenu}
          />
          <img src='/assets/Logo.svg' alt='logo' className='brand-logo' />
        </div>

        <div className='logo'>
          <b>LOGO</b>
        </div>

        <div className='right-section'>
          <img className='icons' src='/assets/search-normal.svg' alt='search' />
          <img className='icons' src='/assets/heart.svg' alt='wishlist' />
          <img className='icons' src='/assets/shopping-bag.svg' alt='cart' />
          <img className='icons profile' src='/assets/profile.svg' alt='profile' />
          <img className='icons language' src='/assets/Language.svg' alt='language' />
        </div>
      </div> 

      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}> 
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </>
  );
};

export default Navbar;
