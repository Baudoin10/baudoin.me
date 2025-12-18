
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";
import { useState } from "react";

const Footer = ({ scrollToSection }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/Baudoin10",
      color: "from-gray-600 to-gray-800",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/baudoin_10/",
      color: "from-pink-500 to-purple-600",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/baudoin-bolingo-b19229221/",
      color: "from-blue-500 to-blue-700",
      label: "LinkedIn",
    },
  ];

  const navLinks = ["Home", "About", "Work", "Portfolio"];

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 border-t border-slate-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background:
                i === 0
                  ? "rgba(239, 68, 68, 0.05)"
                  : i === 1
                  ? "rgba(139, 92, 246, 0.05)"
                  : "rgba(236, 72, 153, 0.05)",
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Column: Brand & Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-2xl font-bold text-gradient perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                style={{ transform: "translateZ(20px)" }}
                className="inline-block"
              >
                Baudoin Bolingo
              </motion.span>
            </motion.div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Software Engineer crafting beautiful digital experiences with
              passion and precision.
            </p>

            {/* Made with love indicator */}
            <motion.div
              className="flex items-center gap-2 text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <Code className="w-4 h-4" />
              <span>&</span>
              <Coffee className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Middle Column: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
              Quick Links
            </h4>
            <div className="space-y-2">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  className="perspective-1000"
                  onHoverStart={() => setHoveredLink(index)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative block text-slate-400 font-medium py-1 overflow-hidden group"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      x: hoveredLink === index ? 10 : 0,
                      rotateY: hoveredLink === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    whileHover={{ color: "#f87171" }}
                  >
                    <motion.span
                      style={{ transform: "translateZ(10px)" }}
                      className="relative z-10"
                    >
                      {item}
                    </motion.span>

                    {/* Sliding underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-red-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredLink === index ? "100%" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Social Icons with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Let's Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    className="perspective-1000"
                    onHoverStart={() => setHoveredSocial(index)}
                    onHoverEnd={() => setHoveredSocial(null)}
                  >
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{
                        rotateY: hoveredSocial === index ? 360 : 0,
                        z: hoveredSocial === index ? 30 : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full blur-lg`}
                        animate={{
                          opacity: hoveredSocial === index ? 0.6 : 0,
                          scale: hoveredSocial === index ? 1.5 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon container */}
                      <motion.div
                        className="relative w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 overflow-hidden"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        {/* Background gradient on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color}`}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredSocial === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Icon */}
                        <Icon className="relative z-10 text-2xl text-slate-400 group-hover:text-white transition-colors" />
                      </motion.div>

                      {/* Floating particles on hover */}
                      {hoveredSocial === index && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-red-400 rounded-full"
                              initial={{
                                x: "50%",
                                y: "50%",
                              }}
                              animate={{
                                x: `${50 + Math.cos((i * Math.PI) / 4) * 80}%`,
                                y: `${50 + Math.sin((i * Math.PI) / 4) * 80}%`,
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          className="relative h-px mb-8 overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Copyright with animated text */}
        <motion.div
          className="text-center text-slate-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="flex items-center justify-center gap-2 flex-wrap"
            whileHover={{ scale: 1.02 }}
          >
            <span>© 2026</span>
            <motion.span
              className="text-gradient font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Baudoin Bolingo
            </motion.span>
            <span>• All rights reserved</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-600 to-pink-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />
    </motion.footer>
  );
};

export default Footer;