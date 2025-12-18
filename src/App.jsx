
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import PortfolioSection from "./Components/PortfolioSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ThreeBackground from "./Components/ThreeBackground";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden relative">
      {/* 3D Background Animation */}
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <PortfolioSection />
        <About />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
};

export default App;