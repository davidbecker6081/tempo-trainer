import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () =>
  (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/">Calendar</Link>
      <Link to="/">Nutrition</Link>
      <Link to="/">Goals</Link>
      <Link to="/">Notes</Link>
      <Link to="/">Settings</Link>
      <Link to="/">Account</Link>
    </nav>
  );

export default NavLinks;
