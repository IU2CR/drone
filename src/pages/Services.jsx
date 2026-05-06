import "./Services.css";
import RevolutQR from "../components/RevolutQR";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services-section">

      {/* LEFT SIDE */}
      <div className="services-left">
        <RevolutQR />
      </div>

      {/* RIGHT SIDE */}
      <div className="services-right">

        <motion.h1
            className="services-title"
            initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
                >
            Donate
          </motion.h1>

        <p>
          Our services include crowdfunding campaigns, direct partnerships
          with drone manufacturers, and supplying essential UAV technology
          for reconnaissance and tactical operations.
          Every donation helps enhance battlefield awareness, protect lives,
          and strengthen Ukraine’s resilience.
        </p>

      </div>

    </div>
  );
};

export default Services;