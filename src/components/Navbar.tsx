import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-background hover:text-secondary">Home</Link>
        </li>
        <li>
          <Link to="/AboutMe" className="text-background hover:text-secondary">About Me</Link>
        </li>
        <li>
          <Link to="/Projects" className="text-background hover:text-secondary">Projects</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-background hover:text-secondary">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
