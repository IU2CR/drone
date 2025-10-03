import { motion } from "framer-motion";
import "./Home.css"; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="background-image"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
 {/* Container for Multiple News Items */}
 <div className="slogan-container">
        {/* First Slogan - News Headline */}
     <motion.div
        className="slogan"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        >
        <a 
          href="https://www.theguardian.com/politics/2025/mar/03/western-countries-must-keep-military-aid-flowing-to-ukraine-starmer-warns" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Western countries must keep military aid flowing to Ukraine
        </a>
        <span className="news-source">— Keir Starmer, The Guardian, Mon 3 Mar 2025 18:21 GMT</span>
      </motion.div>
           {/* Second Slogan - Statistic */}
           <motion.div
          className="slogan"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        >
          <a 
            href="https://www.forbes.com/sites/davidhambling/2025/02/18/new-report-drones-now-destroying-two-thirds-of-russian-targets/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            New RUSI Report: Drones Now Inflicting Two Thirds Of Russian Losses
          </a>
          <span className="news-source">— Forbes, Feb 18, 2025, 08:31am EST</span>
        </motion.div>
        <div className="home-text">
        <p> - Drone For UA is a small but dedicated fundraising initiative focused on supporting Ukraine’s defense through drone production. We raise funds to equip Ukrainian forces with advanced UAV technology for reconnaissance, defense, and humanitarian missions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;