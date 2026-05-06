import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* 🌄 BACKGROUND LAYER */}
      <motion.div
        className="background-image"
        initial={{ scale: 1.2, opacity: 0, filter: "blur(12px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* OPTIONAL DARK OVERLAY */}
      <div className="home-overlay" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="home-content">

        {/* TOP / CENTER AREA */}
        <div className="home-center">
          
        </div>

        {/* BOTTOM AREA (SLOGANS) */}
        <div className="slogan-container">

          <motion.div
            className="slogan"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

          <motion.div
            className="slogan"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.forbes.com/sites/davidhambling/2025/02/18/new-report-drones-now-destroying-two-thirds-of-russian-targets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drones reshaping battlefield outcomes
            </a>
            <span className="news-source">— Forbes, Feb 18, 2025, 08:31am EST</span>
          </motion.div>
            <motion.h1
              className="home-title"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                                                    >
                Drone For UA
            </motion.h1>
            <div className="home-text">
            

            <p>
              
              Drone For UA is a fundraising initiative supporting Ukraine’s defense
              through drone production for reconnaissance, defense, and humanitarian missions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;