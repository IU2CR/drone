import React, { useState } from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const [active, setActive] = useState(null);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggle = (section) => {
    setActive(active === section ? null : section);
  };

  return (
    <footer className="footer">

      {/* TITLE */}
      <motion.h1
        className="footer-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Drone For UA
      </motion.h1>

      <div className="footer-content">

        {/* NAV LINKS (SCROLL) */}
        <ul className="footer-links">
          <li><button onClick={() => scrollTo("home")}>Home</button></li>
          <li><button onClick={() => scrollTo("services")}>Donate</button></li>
          <li><button onClick={() => scrollTo("about")}>Production</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        </ul>

        {/* CONTACT */}
        <ul className="footer-contact">
          <li><strong>📍 Address:</strong> Greenside House, 50 Station Rd, London N22 7DE, UK</li>
          <li><strong>📞 Phone:</strong> <a href="tel:+447404584064">+447404584064</a></li>
          <li><strong>📧 Email:</strong> <a href="mailto:rpas4ua@gmail.com">rpas4ua@gmail.com</a></li>
        </ul>

        {/* LEGAL LINKS (TOGGLES) */}
        <ul className="footer-links">
          <li>
            <button onClick={() => toggle("privacy")}>
              Privacy Policy
            </button>
          </li>

          <li>
            <button onClick={() => toggle("terms")}>
              Terms of Service
            </button>
          </li>
        </ul>

        {/* TOGGLED CONTENT */}
        {active === "privacy" && (
          <div className="footer-popup">
            <p>
              We respect your privacy. Your data is not shared with third parties
              and is used only to improve our services and donation transparency.
            </p>
          </div>
        )}

        {active === "terms" && (
          <div className="footer-popup">
            <p>
              By using this site, you agree that donations are voluntary and
              used exclusively for drone production and operational support.
            </p>
          </div>
        )}

        {/* COPYRIGHT */}
        <p>
          © {new Date().getFullYear()} DroneForUA. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;