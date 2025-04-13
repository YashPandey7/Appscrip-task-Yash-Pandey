import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <div className='navbar' >
            <img src='./assets/Logo.svg'/>
            <div className='logo'>
                <b>LOGO</b>
            </div>
            <div>
                <img className='icons' src='./assets/search-normal.svg'/>
                <img className='icons' src='./assets/heart.svg'/>
                <img className='icons' src='./assets/shopping-bag.svg'/>
                <img className='icons' src='./assets/profile.svg'/>
                <img className='icons' src='./assets/Language.svg'/>
            </div>
        </div>
        <ul className='nav-links'>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
    </>
  )
}

export default Navbar