import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; 
import './Navbar.css';

const Navbar = () => {
  // selected language
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // handle navigation
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };


  // check the current path
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;




  return (
    <div className='navbar'>

      {/* Promo Banner Section */}
      <div className="promo-banner">

        {/* Promo Text */}
        <div className='promo-text'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
          &nbsp;&nbsp;&nbsp;
          <a href="#">Shop Now</a>
        </div>

        {/* Language Selector Dropdown */}
        <div className="language-selector">       
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>






      {/* Navigation Container */}
      <div className="nav-container">
        {/* Brand Logo */}
        <h2 className="brand-logo">Exclusive</h2>
        
        {/* Navigation Links */}
        <ul className="nav-links">
          <li 
            className={`nav-item ${isActive("/") ? "active" : ""}`} 
            onClick={() => handleNavigate("/")}>
            Home
          </li>
          <li 
            className={`nav-item ${isActive("/contact") ? "active" : ""}`} 
            onClick={() => handleNavigate("/contact")}>
            Contact
          </li>
          <li 
            className={`nav-item ${isActive("/about") ? "active" : ""}`} 
            onClick={() => handleNavigate("/about")}>
            About
          </li>
          <li 
            className={`nav-item ${isActive("/signup") ? "active" : ""}`} 
            onClick={() => handleNavigate("/signup")}>
            Sign Up
          </li>
        </ul>
        
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
        </div>
       
        {/* Icons Section */}
        <div className="nav-icons">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => handleNavigate("/account")}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
