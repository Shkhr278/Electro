import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const About = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.div
        className="text-center mb-12"
        variants={motionVariants.fadeInUp}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 bg-clip-text text-transparent"
          variants={motionVariants.title}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl text-dark-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Learn more about our mission to provide high-quality electronic components for makers, engineers, and hobbyists worldwide.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        variants={motionVariants.grid}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Our Story</h2>
          <p className="text-dark-300 leading-relaxed">
            Founded in 2020, our electronic components store was born out of a passion for innovation and a desire to make high-quality electronics accessible to everyone. We started as a small team of engineers and have grown into a trusted source for components used in projects ranging from simple DIY electronics to complex IoT solutions.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Our Mission</h2>
          <p className="text-dark-300 leading-relaxed">
            Our mission is to empower creators, educators, and professionals by providing a comprehensive selection of electronic components at competitive prices. We believe in fostering innovation and supporting the global maker community through reliable products and exceptional customer service.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center"
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-dark-100">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
            <p className="text-dark-300">Quick and reliable delivery worldwide.</p>
          </motion.div>
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2">Quality Components</h3>
            <p className="text-dark-300">Authentic parts from trusted manufacturers.</p>
          </motion.div>
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-dark-300">Get help from our knowledgeable team.</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
