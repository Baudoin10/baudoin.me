import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const Portfolio = () => {
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
        "This app  helps people—especially farmers, veterinarians, and livestock managers—monitor the health and activity of their animals, detect issues early, save time and labor, and make better decisions using real-time data and insights. It's especially useful in large or remote farms where constant manual monitoring is difficult.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React js , Tawlind css, React native", "Laravel", "MySQL"],
      category: "Mobile App. Web",
      githubUrl: "https://github.com/Pinto026/cowlytic-mobi.git",
    },
  ];

  return (
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
  );
};

export default Portfolio;
