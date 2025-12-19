import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Star, Code, Zap, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 animated-bg"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-red-400 text-lg font-medium flex items-center gap-2">
              <Star className="w-5 h-5 animate-pulse" />
              Hi there,
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              I AM <span className="text-gradient">BAUDOIN</span>
              <br />
              <span className="text-white">
                <Typewriter
                  words={[
                    "BOLINGO",
                    "a Software Developer",
                    "a Mobile App developer",
                    "a Blockchain Enthusiast",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p className="text-slate-400 text-lg flex items-center gap-2">
              <Code className="w-5 h-5 text-red-400" />
              Software Developer
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Hire Me Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Hire Me
              </motion.button>

              {/* Download CV Button */}
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/bolingo-baudoin-cv.pdf"
                download
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a> */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/bolingo-baudoin-cv.pdf"
                download
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-r from-red-500 to-purple-600">
                  <img
                    src={avatar}
                    alt="Baudoin Bolingo - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Baudoin Bolingo
                  </h3>
                  <p className="text-slate-400">Software Developer</p>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 flex flex-col space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { icon: FaGithub, link: "https://github.com/Baudoin10" },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/baudoin-bolingo-b19229221/",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/baudoin_10/",
                },
              ].map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-slate-400 hover:text-red-400" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
