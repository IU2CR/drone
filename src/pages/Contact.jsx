import React from "react";
import "./Contact.css"; // Import the styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:rpas4ua@gmail.com">rpas4ua@gmail.com</a></p>
        
        <p><strong>Phone:</strong> <a href="tel:+447417398997">+447417398997</a></p>
        
        <p><strong>Address: </strong> 
          <a 
            href="https://maps.app.goo.gl/qqqdhmByR5i7tkmr5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Greenside House, 50 Station Rd, London N22 7DE, UK
          </a>
        </p>
      </div>
      
      <h2>Find Us on the Map</h2>
<div className="map-container">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122142.45681672479!2d-0.2785723766141764!3d51.59454100079816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b28f29cc3ed%3A0x2134612f3a197ed1!2sClockwise%20Wood%20Green%2C%20London%20-%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2suk!4v1741710886007!5m2!1sen!2suk"
    width="100%"
    height="400"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  );
};

export default Contact;