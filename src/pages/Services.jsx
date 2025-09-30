import "./Services.css";
import RevolutQR from "../components/RevolutQR";
import serviceImage from "../public/images/services.jpg";

const Services = () => {
  return (
    <div className="services-container">
      {/* Left Column */}
      <div className="services-left">
        <div className="revolut-qr-container">
        <RevolutQR />
        </div>
      </div>

      {/* Right Column */}
      <div className="services-right">
         {/* services Image in Middle Right with Depth Effect */}
         <div className="services-image-container">
         <img src={serviceImage} alt="services" className="services-image" />
        
      </div>
      </div>

      {/* Text Overlay */}
    <div className="services-text">
      <h2><span className="line"></span>Services</h2>
      
      <p> - Our services include crowdfunding campaigns, direct partnerships with drone manufacturers, and supplying essential UAV technology for reconnaissance and tactical operations.</p>
      
      
    </div>

    </div>
  );
};

export default Services;