import React, { useState } from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import BlurText from "../components/BlurText";

const Contact = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed in Contact Page!");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Our team will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center mb-12 px-6"
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="mb-4" variants={motionVariants.title}>
          <BlurText
            text="Contact Us"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="block text-5xl md:text-5xl font-bold text-white leading-tight"
          />
        </motion.h1>
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Need help choosing components, tracking an order, or planning a build?
          Send us a message and we will respond as soon as possible.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-emerald-300">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/70 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/70 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white/70 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="What can we help you with?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/70 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="input w-full resize-none"
                placeholder="Share details about your question or project..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={motionVariants.fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="card backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-emerald-300">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white/70">support@electrostore.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-white/70">
                    123 Electronics Ave
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-emerald-300">
              Business Hours
            </h2>
            <div className="space-y-2 text-white/70">
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-xs text-white/60 mt-2">
                Response times may vary during holidays and peak seasons, but we
                do our best to reply within one business day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
