import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles.css";

const App = () => {
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
      <button className="scroll-top-btn" onClick={scrollToTop}>
        ↑
      </button>
      
    </>
  );
};

export default App