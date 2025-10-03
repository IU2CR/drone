import "./About.css";
import aboutImage1 from "../pictures/about1.jpg";
import aboutImage2 from "../pictures/about2.jpg";
import aboutImage3 from "../pictures/about3.jpg";


const About = () => {
  return (
    <div className="about-container">
      {/* Left Column */}
      <div className="about-left">
            
      

      {/* Right Column */}
      <div className="about-right">
         {/* About Image in Middle Right with Depth Effect */}
         <div className="about-image-container">

         <div className="image-wrapper">
    <img src={aboutImage2} alt="About 2" className="about-image" />
    <div className="trigger-wrapper">
    <div className="hover-trigger">...</div>
    <div className="hover-text">This drone is used for reconnaissance missions.</div>
    </div>
  </div>

         <div className="image-wrapper">
         <img src={aboutImage1} alt="About 1" className="about-image" />
         <div className="trigger-wrapper">
          <div className="hover-trigger">...</div>
          <div className="hover-text">Mass production of drones involves the large-scale manufacturing of unmanned aerial vehicles (UAVs).</div>
          </div> 
          </div>

  

  <div className="image-wrapper">
    <img src={aboutImage3} alt="About 3" className="about-image" />
    <div className="trigger-wrapper">
    <div className="hover-trigger">...</div>
    <div className="hover-text">Advanced navigation and night vision tech.</div>
    </div>
  </div>
        
        
      </div>
      </div>
      {/* Text Overlay */}
    <div className="about-text">
      <h2><span className="line"></span>Production</h2>
      <p> - Drone For UA is a committed fundraising initiative dedicated to strengthening Ukraine’s defense by facilitating the production of cutting-edge drones. Through collective contributions, we provide Ukrainian forces with state-of-the-art UAV technology designed for reconnaissance, security, and humanitarian efforts. Each donation directly supports situational awareness on the battlefield, safeguards lives, and bolsters Ukraine’s resistance.</p>
    </div>

    </div>
    </div>
  );
};

export default About;