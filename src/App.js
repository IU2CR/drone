import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"; // Import the new NavBar component
import "./styles.css"; // Main styles


const App = () => {
  return (
    
    
    <Router>
      
       <NavBar /> {/* Responsive Navbar */}
       <div className="background-container">  {/* Background wrapper */}
       </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer /> {/* Footer at the bottom */}
    </Router>
    
  );
};

export default App;
