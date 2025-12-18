
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = ["Home", "About", "Work", "Portfolio", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with 3D effect */}
        <motion.div
          className="relative perspective-1000"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="text-2xl font-bold italic cursor-pointer relative text-white"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              style={{ transform: "translateZ(20px)" }}
              className="inline-block"
            >
              BMB
            </motion.span>

            {/* Sparkle effect */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-4 h-4 text-red-400" />
            </motion.div>
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 blur-xl opacity-0"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          {sections.map((section, index) => (
            <motion.div
              key={section}
              className="relative perspective-1000"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.button
                onClick={() => scrollToSection(section.toLowerCase())}
                className="relative px-4 py-2 text-slate-300 capitalize overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  z: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ duration: 0.3, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Text with 3D depth */}
                <motion.span
                  className="relative z-10"
                  animate={{
                    color: hoveredIndex === index ? "#f87171" : "#cbd5e1",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section}
                </motion.span>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-600"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredIndex === index ? "100%" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-600/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0,
                        }}
                        animate={{
                          x: `${Math.random() * 100}%`,
                          y: `${Math.random() * 100 - 50}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Icon with 3D animation */}
        <motion.div
          className="md:hidden perspective-1000"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-2 rounded-lg overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: isMenuOpen ? 180 : 0,
            }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg"
              animate={{
                opacity: isMenuOpen ? 0.2 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              style={{ transform: "translateZ(10px)" }}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white relative z-10" />
              ) : (
                <Menu className="w-6 h-6 text-white relative z-10" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu with 3D cascade effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-slate-300 capitalize rounded-lg relative overflow-hidden perspective-1000"
                  initial={{ x: -50, opacity: 0, rotateY: -20 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  exit={{ x: -50, opacity: 0, rotateY: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: 10,
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Text with depth */}
                  <motion.span
                    style={{ transform: "translateZ(10px)" }}
                    className="relative z-10"
                  >
                    {section}
                  </motion.span>

                  {/* Sliding background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-600/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Border accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-purple-600"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated border at bottom of navbar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />
    </motion.nav>
  );
};

export default Navbar;