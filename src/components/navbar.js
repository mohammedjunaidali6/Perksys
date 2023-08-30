import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar" >
      <div className="company-name">PERK SYSTEMS INC</div>
      <div className="nav-links" >
        <Link
          to="/"
          className={location.pathname === '/' ? 'active-link' : ''}
        >
          HOME
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>ABOUT US</Link>

        <Link to="/service" className={location.pathname === '/service' ? 'active-link' : ''}>SERVICES</Link>

        <Link to="/client" className={location.pathname === '/client' ? 'active-link' : ''}>CLIENTS</Link>
        <Link to="/career" className={location.pathname === '/career' ? 'active-link' : ''}>CAREERS</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT US</Link>
      </div>
    </div>
  );
};

export default Navbar;