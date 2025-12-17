import { motion } from "framer-motion";
import { Zap, ChevronRight, Smartphone, Globe, Server } from "lucide-react";

const Services = () => {
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
  );
};

export default Services;
