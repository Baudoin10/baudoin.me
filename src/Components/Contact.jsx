import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
                Have a question, comment or business concept? This contact form
                is the best way to get in touch with me.
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
  );
};

export default Contact;
