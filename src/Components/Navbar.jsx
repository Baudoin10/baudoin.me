import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ["Home", "About", "Work", "Portfolio", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-slate-300 text-gradient italic">Baudoin B</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className={`text-slate-300 hover:text-red-400 transition-all duration-300 capitalize`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 bg-opacity-95 px-6 py-4 space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section.toLowerCase());
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-slate-300 hover:text-red-400 transition-all duration-200 capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
