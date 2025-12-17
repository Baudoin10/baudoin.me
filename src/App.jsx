
import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Star,
  Zap,
  Code,
  Smartphone,
  Globe,
  Server,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import avatar from "./assets/avatar.PNG";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


const Portfolio = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };



  const services = [
    {
      title: "Mobile Development",
      description:
        "Building scalable mobile applications with React Native and native technologies for iOS and Android.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      features: ["Cross-platform", "React Native", "App Store Ready"],
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, user-friendly interfaces with modern frameworks and cutting-edge design.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-blue-500",
      features: [
        "React/Next.js",
        "Responsive Design",
        "Modern UI/UX",
        "Javascript",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Developing robust server-side applications, APIs, and database architectures.",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["RESTful APIs", "Node js", "Cloud Integration", "Python"],
    },
  ];

  const projects = [
    {
      title: "Murakoze Recommnadations Platform",
      description:
        " the Murakoze Device, is a game-changer in customer experience solutions, enabling businesses to capture valuable customer feedback effortlessly.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "React js", "Node.js", "MySQL", "Typescript"],
      category: "Full Stack",
      githubUrl: "https://github.com/Baudoin10/murakoze_recommandations.git",
    },
    {
      title: "Intern Connect App",
      description:
        "Intern Connect aims to modernize internship management, bridging the gap between students, institutions, and companies through a seamless digital experience.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Socket.io", "Express", "Node js"],
      category: "Web App",
      githubUrl: "https://github.com/Baudoin10/intern-connect.git",
    },
    {
      title: "Cowlytics App ",
      description:
        "This app  helps people—especially farmers, veterinarians, and livestock managers—monitor the health and activity of their animals, detect issues early, save time and labor, and make better decisions using real-time data and insights. It’s especially useful in large or remote farms where constant manual monitoring is difficult.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React js , Tawlind css, React native", "Laravel", "MySQL"],
      category: "Mobile App. Web",
      githubUrl: "https://github.com/Pinto026/cowlytic-mobi.git",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Message sent! Thank you for your message. I'll get back to you soon!"
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-slate-300 text-gradient italic animate-fadeInUp">
            Baudoin B
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Work", "Portfolio", "Contact"].map(
              (section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`text-slate-300 hover:text-red-400 transition-all duration-300 capitalize underline-animate fade-in-delay-${
                    index + 1
                  }`}
                >
                  {section}
                </button>
              )
            )}
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
            {["Home", "About", "Work", "Portfolio", "Contact"].map(
              (section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="block w-full text-left text-slate-300 hover:text-red-400 transition-all duration-200 capitalize"
                >
                  {section}
                </button>
              )
            )}
          </div>
        )}
      </nav>

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

      {/* What I Do Section */}

      <section id="work" className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-red-400 text-lg mb-4 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              What I do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Better <span className="text-gradient">Design</span>,<br />
              Better <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              I'm building scalable web applications, mobile apps and beautiful
              websites for companies around the world.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-white mb-4 p-4 rounded-xl bg-gradient-to-r ${service.color} inline-block group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <ChevronRight className="w-4 h-4 text-red-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-red-400 text-lg mb-4 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Some of my <span className="text-gradient">best works</span>
            </h2>
            <div className="flex space-x-4 justify-center">
              <button className="text-red-400 border-b-2 border-red-400 pb-2 font-medium hover:bg-red-400/10 px-4 transition-all duration-300">
                All Projects
              </button>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-red-500/20 text-red-400 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-sm bg-red-500/20 py-4 shadow-lg transition hover:bg-red-600/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-red-400 text-lg flex items-center gap-2">
                <Star className="w-5 h-5" />
                About me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Hi, Here I am
                <br />
                To help your <span className="text-gradient">next project</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                I am Baudoin Bolingo, a skilled Software Engineer with 4+ years
                of experience in designing and developing innovative web
                applications and mobile solutions. My passion lies in creating
                efficient, responsive, user-friendly interfaces that deliver
                exceptional user experiences.
              </p>
            </motion.div>

            {/* Right - Image & Years */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="Code Interface"
                  className="relative w-full h-[400px] rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-purple-600 p-4 rounded-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side: Info Cards */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-red-400 text-lg mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's do it <span className="text-gradient">together</span>
                </h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Have a question, comment or business concept? This contact
                  form is the best way to get in touch with me.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-white" />,
                    title: "Location",
                    value: "Kigali, Rwanda",
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-white" />,
                    title: "Email",
                    value: "baudoinvicbolingo@gmail.com",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-white" />,
                    title: "Phone",
                    value: "+250 (0) 79 622-6099",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-4 p-4 card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-300 font-medium">
                        {item.title}
                      </div>
                      <div className="text-slate-400">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project subject"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-400 hover:bg-red-600 text-white py-3 rounded-md transition-colors"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Portfolio;