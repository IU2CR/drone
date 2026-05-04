import "./About.css";
import aboutImage1 from "../pictures/about1.jpeg";
import aboutImage2 from "../pictures/about2.jpeg";
import aboutImage3 from "../pictures/about3.jpeg";

const About = () => {
  return (
    <div className="about-section">

      {/* TEXT SIDE */}
      <div className="about-text">
        <h2>Production</h2>

        <p>
          Drone For UA is a committed fundraising initiative dedicated to
          strengthening Ukraine’s defense by facilitating the production of
          cutting-edge drones. Through collective contributions, we provide
          Ukrainian forces with UAV technology for reconnaissance, security,
          and humanitarian efforts.
        </p>
      </div>

      {/* IMAGE GRID SIDE */}
      <div className="about-images">

        <div className="image-card">
          <img src={aboutImage2} alt="Recon drone" />
          <div className="hover-text">
            This drone is used for reconnaissance missions.
          </div>
        </div>

        <div className="image-card">
          <img src={aboutImage1} alt="Production" />
          <div className="hover-text">
            Mass production of drones at scale.
          </div>
        </div>

        <div className="image-card">
          <img src={aboutImage3} alt="Advanced tech" />
          <div className="hover-text">
            Advanced navigation and night vision tech.
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;