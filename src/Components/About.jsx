import { motion } from "framer-motion";
import { Star } from "lucide-react";

const About = () => {
  return (
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
              I am Baudoin Bolingo, a skilled Software Engineer with 4+ years of
              experience in designing and developing innovative web applications
              and mobile solutions. My passion lies in creating efficient,
              responsive, user-friendly interfaces that deliver exceptional user
              experiences.
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
  );
};

export default About;
