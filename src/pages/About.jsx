import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import aboutImage1 from "../pictures/about1.jpeg";
import aboutImage2 from "../pictures/about2.jpeg";
import aboutImage3 from "../pictures/about3.jpeg";
import aboutImage4 from "../pictures/about4.jpeg";
import aboutImage5 from "../pictures/about5.jpeg";

const About = () => {
  return (
    <div className="about-wrapper">

      {/* TEXT SIDE */}
      
      <motion.h1
            className="about-title h1"
            initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
                >
            Production
          </motion.h1>
      <div className="about-text">
        
        <p>
          Drone For UA is a fundraising initiative supporting Ukraine’s defense
          through advanced UAV production for reconnaissance, security and humanitarian missions.
        </p>
      </div>

      {/* SLIDESHOW SIDE */}
      <div className="about-slider">

        <Swiper
           modules={[Autoplay, Navigation, Pagination]}
             autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
        >

          <SwiperSlide>
            <img src={aboutImage1} alt="Production" />
            <p>Mass drone production at scale</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={aboutImage2} alt="Recon" />
            <p>Team work in complex tasks</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={aboutImage3} alt="Technology" />
            <p>Testing before flight</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={aboutImage4} alt="Technology" />
            <p>Diferent modification of UAV</p>
          </SwiperSlide>

          <SwiperSlide>
            <img src={aboutImage5} alt="Technology" />
            <p>Final Dispatching</p>
          </SwiperSlide>

        </Swiper>

      </div>

    </div>
  );
};

export default About;