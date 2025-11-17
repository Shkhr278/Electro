// About.jsx
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
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent"
          variants={motionVariants.title}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl text-dark-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are on a mission to make high–quality electronic components
          accessible to makers, engineers, and hobbyists around the globe.
          Explore who we are and what drives us.
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
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Our Story
          </h2>
          <p className="text-dark-300 leading-relaxed">
            Founded in 2020, we started as a small group of electronics
            enthusiasts who struggled to find reliable parts for our own
            projects. What began as a tiny inventory in a single room has grown
            into a curated store that serves students, professionals, and
            product teams working on everything from first prototypes to
            full-scale deployments.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Our Mission
          </h2>
          <p className="text-dark-300 leading-relaxed">
            Our mission is to remove friction from building hardware. We focus
            on stocking dependable components, clear documentation, and
            responsive support so you can spend less time hunting for parts and
            more time shipping your ideas. From classroom labs to robotics
            startups, we aim to be your trusted electronics partner.
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
        <h2 className="text-3xl font-bold mb-8 text-dark-50">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 text-dark-50">
              Fast Shipping
            </h3>
            <p className="text-dark-300">
              Optimized logistics and trusted partners mean your components
              reach you quickly and safely.
            </p>
          </motion.div>
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2 text-dark-50">
              Quality Components
            </h3>
            <p className="text-dark-300">
              Carefully sourced, tested parts from reliable manufacturers
              designed for real-world projects.
            </p>
          </motion.div>
          <motion.div
            className="card text-center"
            variants={motionVariants.card}
            whileHover="hover"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2 text-dark-50">
              Expert Support
            </h3>
            <p className="text-dark-300">
              A friendly, technical support team ready to help you debug,
              decide, and ship faster.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
