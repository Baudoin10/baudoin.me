import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.footer
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 border-t border-slate-700/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Navigation */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h4>
              <div className="space-y-2">
                {["Home", "About", "Work", "Portfolio"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-slate-400 hover:text-red-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Social Icons */}
            <div className="flex md:justify-end items-center md:items-start md:flex-col space-y-4 md:space-y-6">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Baudoin10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-400 transition duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
                <a
                  href="https://www.instagram.com/baudoin_10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-400 transition duration-300"
                >
                  <FaInstagram className="text-4xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/baudoin-bolingo-b19229221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-400 transition duration-300"
                >
                  <FaLinkedin className="text-4xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
            © 2025 Baudoin Bolingo, All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
