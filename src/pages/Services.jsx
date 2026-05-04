import "./Services.css";
import RevolutQR from "../components/RevolutQR";

const Services = () => {
  return (
    <div className="services-section">

      {/* LEFT SIDE */}
      <div className="services-left">
        <RevolutQR />
      </div>

      {/* RIGHT SIDE */}
      <div className="services-right">

        <h2>Donate</h2>

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