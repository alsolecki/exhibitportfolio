import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/">Projects</NavLink></li>
      <li><NavLink to="courseinfo">Drawings</NavLink></li>
      <li><NavLink to="beyond">Renderings</NavLink></li>
    </ul>    
  </header>
);

export default Header;