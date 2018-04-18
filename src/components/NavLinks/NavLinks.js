import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () =>
  (
    <nav className="container nav-links">
      <NavLink to="/" className="navlink">Dashboard</NavLink>
      <NavLink to="/" className="navlink">Calendar</NavLink>
      <NavLink to="/" className="navlink">Nutrition</NavLink>
      <NavLink to="/" className="navlink">Goals</NavLink>
      <NavLink to="/" className="navlink">Notes</NavLink>
      <NavLink to="/" className="navlink">Settings</NavLink>
      <NavLink to="/" className="navlink">Account</NavLink>
    </nav>
  );

export default NavLinks;
