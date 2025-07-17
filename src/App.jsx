import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import poto from "./assets/poto.PNG";


const App = () => {
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
        "Building scalable web applications, Mobile apps and beautiful websites for companies.",
      icon: "📱",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, user-friendly interfaces with modern technologies.",
      icon: "💻",
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs.",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      category: "All",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Socket.io", "Express"],
      category: "All",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and 3D elements",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "Three.js"],
      category: "All",
    },
  ];

  const languages = [
    { name: "ReactJS", checked: true },
    { name: "React Native", checked: true },
    { name: "Redux", checked: true },
    { name: "JavaScript", checked: true },
    { name: "Web three", checked: true },
    { name: "NodeJS", checked: true },
    { name: "Blockchain", checked: true },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Message sent! Thank you for your message. I'll get back to you soon!"
    );
  };

  return (
    <div className="min-h-screen bg-[#0e1734] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Work", "Portfolio", "Contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 capitalize"
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 pt-4">
                {["Home", "About", "Work", "Portfolio", "Contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section.toLowerCase())}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 capitalize text-left"
                    >
                      {section}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-red-400 text-lg">— Hi there,</div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I AM BAUDOIN
                <br />
                <span className="text-white">BOLINGO</span>
              </h1>
              <p className="text-gray-400 text-lg">Full-stack Web Developer</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition-colors">
                  Hire Me
                </button>
                <button className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={poto}
                alt="Developer Character"
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-3">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <FaGithub className="w-6 h-6 text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <FaLinkedin className="w-6 h-6 text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <FaInstagram className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="work" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-red-400 text-lg mb-4">— What I do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Better Design,
              <br />
              Better experiences
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm Building scalable web applications, Mobile apps and beautiful
              websites for companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div
                  className={`text-4xl mb-4 p-4 rounded-lg bg-gradient-to-r ${service.color} inline-block`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="text-red-400 text-lg mb-4">— Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Some of my best works
            </h2>
            <div className="flex space-x-4">
              <button className="text-red-400 border-b-2 border-red-400 pb-2 font-medium">
                All
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden group hover:bg-slate-800 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-red-500/20 text-red-400 px-2 py-1 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-red-400 text-lg">— About me</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Hi, Here I am
                <br />
                To help your next project
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I am Baraka Mukelenga, a skilled Software Engineer with 4 years
                of experience in designing and developing innovative web
                applications and mobile solutions. My passion lies in creating
                efficient, responsive, user-friendly interfaces. I am dedicated
                to creating high-quality, performant applications that deliver
                an exceptional user experience. My expertise includes developing
                scalable front-end architectures, integrating RESTful APIs, and
                optimizing application performance for both web and mobile
                platforms.
              </p>

              <div className="space-y-4">
                <div className="text-red-400 font-medium">
                  LANGUAGES AND FRAMEWORKS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition-colors">
                  My portfolio
                </button>
                <button className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Code Interface"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="text-red-400 text-lg mb-4">— Contact me</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's do it together
                </h2>
                <p className="text-gray-400 mb-8">
                  Question, comment or business concept? this contact form is
                  the best way to get in touch with me.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Kigali - Rwanda</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">
                    baudoinvicbolingo@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">+250 (0) 79 622-6099</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-slate-900/50 border border-slate-600 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-slate-900/50 border border-slate-600 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-md px-4 py-3 text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
              <div className="space-y-2">
                {["Home", "About", "Work", "Portfolio"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-center md:justify-end space-x-6">
                <FaGithub className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
                <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
                <FaInstagram className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              </div>
              <div className="text-center md:text-right mt-8 text-gray-400 text-sm">
                © 2024 Baudoin Bolingo. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
