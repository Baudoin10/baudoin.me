
import { motion } from "framer-motion";
import { Star, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const projects = [
    {
      title: "Murakoze Recommendations Platform",
      description:
        "The Murakoze Device, is a game-changer in customer experience solutions, enabling businesses to capture valuable customer feedback effortlessly.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React native", "React js", "Node.js", "MySQL", "Typescript", "Yii2"],
      category: "Mobile app, Web",
      githubUrl: "https://github.com/Baudoin10/murakoze_recommandations.git",
      features: [
        "Real-time feedback collection",
        "Advanced analytics dashboard",
        "Multi-device support",
      ],
    },
    {
      title: "Intern Connect App",
      description:
        "Intern Connect aims to modernize internship management, bridging the gap between students, institutions, and companies through a seamless digital experience.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React js", "Socket.io", "Express", "Node js"],
      category: "Web App",
      githubUrl: "https://github.com/Baudoin10/intern-connect.git",
      features: [
        "Real-time messaging",
        "Application tracking",
        "Company matching",
      ],
    },
    {
      title: "Cowlytics App",
      description:
        "This app helps people—especially farmers, veterinarians, and livestock managers—monitor the health and activity of their animals, detect issues early, save time and labor.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["Next js", "React router", "Tailwind css", "React native", "Express js", "Supabase", "IoT"],
      category: "Mobile App. Web",
      githubUrl: "https://github.com/Pinto026/cowlytic-mobi.git",
      features: [
        "Health monitoring",
        "Activity tracking",
        "Early disease detection",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-red-400 text-lg mb-4 flex items-center justify-center gap-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-5 h-5 animate-pulse" />
            Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Some of my <span className="text-gradient">best works</span>
          </h2>
          <div className="flex space-x-4 justify-center">
            <motion.button
              className="text-red-400 border-b-2 border-red-400 pb-2 font-medium hover:bg-red-400/10 px-4 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </motion.button>
          </div>
        </motion.div>

        {/* 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setFlippedCard(index)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <motion.div
                className="relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: flippedCard === index ? 8 : 0,
                  scale: flippedCard === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {/* Card */}
                <div className="card overflow-hidden relative">
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 opacity-0 blur-xl -z-10"
                    animate={{
                      opacity: flippedCard === index ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Image section with parallax effect */}
                  <motion.div
                    className="relative overflow-hidden h-48"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      z: flippedCard === index ? 30 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: flippedCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: flippedCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-center">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{
                            scale: flippedCard === index ? 1 : 0,
                            rotate: flippedCard === index ? 0 : -180,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <ExternalLink className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm font-medium">View Project</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="p-6"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      z: flippedCard === index ? 20 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <motion.h3
                        className="text-xl font-semibold text-white"
                        animate={{
                          color:
                            flippedCard === index
                              ? "rgb(248, 113, 113)"
                              : "rgb(255, 255, 255)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list (shows on hover) */}
                    <motion.div
                      className="mb-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: flippedCard === index ? "auto" : 0,
                        opacity: flippedCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="text-xs text-slate-300 flex items-center gap-2"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                              x: flippedCard === index ? 0 : -20,
                              opacity: flippedCard === index ? 1 : 0,
                            }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="w-1 h-1 bg-red-400 rounded-full" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          className="bg-red-500/20 text-red-400 px-2 py-1 rounded-md text-xs font-medium"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Button with icon animation */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-red-500 to-purple-600 text-white py-3 rounded-lg shadow-lg relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x:
                            flippedCard === index ? ["-100%", "200%"] : "-100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: flippedCard === index ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                      />
                      <motion.div
                        animate={{ rotate: flippedCard === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.div>
                      View on GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;