import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () =>
  (
    <nav className="navlinks-container">
      <Link to="/" className="navlink">Dashboard</Link>
      <Link to="/" className="navlink">Calendar</Link>
      <Link to="/" className="navlink">Nutrition</Link>
      <Link to="/" className="navlink">Goals</Link>
      <Link to="/" className="navlink">Notes</Link>
      <Link to="/" className="navlink">Settings</Link>
      <Link to="/" className="navlink">Account</Link>
    </nav>
  );

export default NavLinks;
