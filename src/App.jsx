
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

const Portfolio = () => {
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
      features: ["Cross-platform", "Native Performance", "App Store Ready"],
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, user-friendly interfaces with modern frameworks and cutting-edge design.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-blue-500",
      features: ["React/Next.js", "Responsive Design", "Modern UI/UX"],
    },
    {
      title: "Backend Development",
      description:
        "Developing robust server-side applications, APIs, and database architectures.",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["RESTful APIs", "Database Design", "Cloud Integration"],
    },
  ];

   const projects = [
     {
       title: "E-Commerce Platform",
       description:
         "Full-stack e-commerce solution with React and Node.js, featuring payment integration and admin dashboard.",
       image:
         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
       tags: ["React", "Node.js", "MongoDB", "Stripe"],
       category: "Full Stack",
       githubUrl: "https://github.com/your-username/ecommerce-platform",
     },
     {
       title: "Task Management App",
       description:
         "Collaborative task management with real-time updates, team collaboration, and advanced filtering.",
       image:
         "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
       tags: ["React", "Socket.io", "Express", "PostgreSQL"],
       category: "Web App",
       githubUrl: "https://github.com/your-username/task-manager",
     },
     {
       title: "Portfolio Website",
       description:
         "Modern portfolio with animations, 3D elements, and interactive components showcasing creative work.",
       image:
         "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
       tags: ["React", "Tailwind", "Three.js", "Framer Motion"],
       category: "Frontend",
       githubUrl: "https://github.com/your-username/portfolio",
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

     // Reset form
     setFormData({
       name: "",
       email: "",
       subject: "",
       message: "",
     });
   };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-slate-300  text-gradient italic animate-fadeInUp">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 animated-bg"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <div className="text-red-400 text-lg font-medium flex items-center gap-2">
                <Star className="w-5 h-5 animate-pulse" />
                Hi there,
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I AM <span className="text-gradient">BAUDOIN</span>
                <br />
                <span className="text-white">BOLINGO</span>
              </h1>
              <p className="text-slate-400 text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-red-400" />
                Full-stack Web Developer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Hire Me
                </button>

                <a
                  href="/bolingo-baudoin-cv.pdf"
                  download
                  className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
            <div className="relative fade-in-delay-2">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gradient-to-r from-red-500 to-purple-600">
                    <img
                      src={avatar}
                      alt="Baudoin Bolingo - Full-stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Baudoin Bolingo
                    </h3>
                    <p className="text-slate-400">Full-stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 flex flex-col space-y-3">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110 animate-float">
                  <FaGithub className="w-6 h-6 text-slate-400 hover:text-red-400" />
                </div>
                <div
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaLinkedin className="w-6 h-6 text-slate-400 hover:text-red-400" />
                </div>
                <div
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaInstagram className="w-6 h-6 text-slate-400 hover:text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="work" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <div className="text-red-400 text-lg mb-4 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              What I do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Better <span className="text-gradient">Design</span>,
              <br />
              Better <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              I'm building scalable web applications, mobile apps and beautiful
              websites for companies around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card p-8 group fade-in-delay-${index + 1}`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 fade-in">
            <div className="text-red-400 text-lg mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Some of my <span className="text-gradient">best works</span>
            </h2>
            <div className="flex space-x-4">
              <button className="text-red-400 border-b-2 border-red-400 pb-2 font-medium hover:bg-red-400/10 px-4 transition-all duration-300">
                All Projects
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card overflow-hidden group fade-in-delay-${
                  index + 1
                }`}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
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
            </div>

            <div className="relative fade-in-delay-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 fade-in">
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
                <div className="flex items-center space-x-4 p-4 card">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Location</div>
                    <div className="text-slate-400">Kigali, Rwanda</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 card">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Email</div>
                    <div className="text-slate-400">
                      baudoinvicbolingo@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 card">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300 font-medium">Phone</div>
                    <div className="text-slate-400">+250 (0) 79 622-6099</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8 fade-in-delay-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50 glass">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Baudoin B</h3>
              <p className="text-slate-400">
                Building the future, one line of code at a time.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h4>
              <div className="space-y-2">
                {["Home", "About", "Work", "Portfolio"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-slate-400 hover:text-red-400 transition-colors duration-300 underline-animate"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <div className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Consulting",
                ].map((service) => (
                  <div
                    key={service}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <FaGithub className="w-5 h-5 text-slate-400 hover:text-red-400" />
                </div>
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="w-5 h-5 text-slate-400 hover:text-red-400" />
                </div>
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:scale-110">
                  <FaInstagram className="w-5 h-5 text-slate-400 hover:text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;