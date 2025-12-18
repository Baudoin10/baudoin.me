
import { motion } from "framer-motion";
import { Zap, ChevronRight, Smartphone, Globe, Server } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        "Typescript",
        "Redux",
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
      features: ["RESTful APIs", "Node js", "Express js", "Cloud Integration",],
    },
  ];

  return (
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

        {/* Cards with 3D effect */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="card p-8 group relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? -5 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {/* Glowing background effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 blur-xl`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400 rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "-10%",
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                )}

                <motion.div
                  className={`text-white mb-4 p-4 rounded-xl bg-gradient-to-r ${service.color} inline-block relative`}
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    rotateY: hoveredIndex === index ? 15 : 0,
                    z: hoveredIndex === index ? 50 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.icon}
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    z: hoveredIndex === index ? 30 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-slate-400 mb-4"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    z: hoveredIndex === index ? 20 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.description}
                </motion.p>

                <motion.ul
                  className="space-y-2"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    z: hoveredIndex === index ? 15 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="w-4 h-4 text-red-400" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;