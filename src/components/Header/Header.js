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
      <div className="navbar-collapse collapse" id="navbarNav">
        <div className="navbar-nav">
            <NavLink className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
              to="/">To Do List
            </NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
              to="/calc">Calculator
            </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
