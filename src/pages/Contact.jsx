import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-section">

      {/* TITLE */}
      
      <motion.h1
            className="contact-title h1"
            initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
                >
            Contact Us
          </motion.h1>
      {/* CONTACT INFO */}
      <div className="contact-info">

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:rpas4ua@gmail.com">rpas4ua@gmail.com</a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+447404584064">+447404584064</a>
        </p>

        <p>
          <strong>Address:</strong>{" "}
          <a
            href="https://maps.app.goo.gl/qqqdhmByR5i7tkmr5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Greenside House, 50 Station Rd, London N22 7DE, UK
          </a>
        </p>

      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122142.45681672479!2d-0.2785723766141764!3d51.59454100079816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b28f29cc3ed%3A0x2134612f3a197ed1!2sClockwise%20Wood%20Green%2C%20London%20-%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2suk!4v1741710886007!5m2!1sen!2suk"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;