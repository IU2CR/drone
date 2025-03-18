import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Left Column */}
      <div className="about-left">
            
      </div>

      {/* Right Column */}
      <div className="about-right">
         {/* About Image in Middle Right with Depth Effect */}
         <div className="about-image-container">
        <img src="/images/about.jpg" alt="About Us" className="about-image" />
      </div>
      </div>

      {/* Text Overlay */}
    <div className="about-text">
      <h2><span className="line"></span>About Us</h2>
      <p> - Drone For UA is a small but dedicated fundraising initiative focused on supporting Ukraine’s defense through drone production. We raise funds to equip Ukrainian forces with advanced UAV technology for reconnaissance, defense, and humanitarian missions. Every donation helps enhance battlefield awareness, protect lives, and strengthen Ukraine’s resilience. Together, we empower innovation for victory.</p>
    </div>

    </div>
  );
};

export default About;