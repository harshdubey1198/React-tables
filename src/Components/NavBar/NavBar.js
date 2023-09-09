import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from "./logo1198.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={image} alt="Logo" />
      </div>
      <div className="navbar-center">
        <h1>Page Title</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">Back</Link>
        <Link to="/dashboard/P001 ">Dashboard</Link>
        <Link to="/Login">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
