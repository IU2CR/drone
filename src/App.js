import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import upArrow from "./pictures/scrolltotop.jpeg";

import "./styles.css";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
  const container = document.querySelector(".scroll-container");

  const handleScroll = () => {
    setShowScrollTop(container.scrollTop > 300);
  };

  container.addEventListener("scroll", handleScroll);

  return () => {
    container.removeEventListener("scroll", handleScroll);
  };
}, []);

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />

      <div className="background-container"></div>

      <div className="scroll-container">
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <img
            src={upArrow}
            alt="Scroll to top"
            className="scroll-top-icon"
          />
          <span className="scroll-top-text">To top</span>
        </button>
      )}
    </>
  );
};

export default App;