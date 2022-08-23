import { NavLink } from "react-router-dom";
import React from 'react';
import './Header.css';


function Header() {
  return (
    <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-collapse collapse "
        id="navbarNav"
      >
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/list">List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" } 
                to="/about">About
            </NavLink>
          </li>    
        </ul>
      </div>
    </nav>
  );
}

export default Header;
