import { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
  className="logo"
  onClick={() => handleScroll("home")}
  role="button"
>
  <img
    src={`${process.env.PUBLIC_URL}/favicon.ico`}
    alt="logo"
    className="logo-icon"
  />
  DroneForUA
</div>

      {/* Hamburger Icon */}
      <div
        className="menu-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => handleScroll("services")}>Donate</li>
        <li onClick={() => handleScroll("about")}>Production</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;