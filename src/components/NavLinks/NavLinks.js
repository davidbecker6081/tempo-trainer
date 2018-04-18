import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = ({ display }) =>
  (
    <nav className={`container nav-links ${display}`}>
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

NavLinks.propTypes = {
  display: PropTypes.string.isRequired,
};
