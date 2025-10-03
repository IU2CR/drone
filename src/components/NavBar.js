import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import styles for navbar
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
       <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        DroneForUA
      </Link>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Donate</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>Production</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;