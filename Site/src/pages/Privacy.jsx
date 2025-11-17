// Privacy.jsx
import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const Privacy = () => {
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
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-xl text-dark-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your privacy matters. This page explains what data we collect, why we
          collect it, and how we keep it safe when you use our store and
          services.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto space-y-8"
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
            Information We Collect
          </h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            We collect information you provide directly, such as when you create
            an account, place an order, sign up for our newsletter, or contact
            support. This may include your name, email address, shipping
            details, payment information, and any other information you choose
            to share with us.
          </p>
          <p className="text-dark-300 leading-relaxed">
            We also automatically gather basic technical details about how you
            use our site, such as your IP address, browser type, device
            information, and pages visited. This helps us keep the platform
            secure and improve your experience.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            How We Use Your Information
          </h2>
          <ul className="text-dark-300 leading-relaxed space-y-2">
            <li>• To process, ship, and track your orders</li>
            <li>• To communicate with you about purchases and updates</li>
            <li>• To provide technical and customer support</li>
            <li>• To personalize offers and send optional marketing emails</li>
            <li>• To analyze usage and improve our website and services</li>
            <li>• To prevent fraud and comply with legal obligations</li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Information Sharing
          </h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            We do not sell or rent your personal information. We only share it
            with trusted third-party providers when it is necessary to operate
            our business — for example, payment processors, shipping partners,
            and analytics tools — and only under confidentiality obligations.
          </p>
          <p className="text-dark-300 leading-relaxed">
            We may also share information if required by law, to protect our
            rights, or to respond to lawful requests from public authorities.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Data Security
          </h2>
          <p className="text-dark-300 leading-relaxed">
            We use appropriate technical and organizational measures to protect
            your information from unauthorized access, alteration, disclosure,
            or destruction. While no online system can be guaranteed 100%
            secure, we continuously review and improve our safeguards to keep
            your data protected.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Your Rights
          </h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            You can request access to, correction of, or deletion of your
            personal information. You can also opt out of marketing emails at
            any time using the unsubscribe link or by contacting us directly.
          </p>
          <p className="text-dark-300 leading-relaxed">
            If you have questions about how we handle your data, please reach
            out through the contact options on our website.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">
            Changes to This Policy
          </h2>
          <p className="text-dark-300 leading-relaxed">
            We may update this policy periodically to reflect changes in our
            practices or legal requirements. When we do, we will revise the date
            below and, where appropriate, provide additional notice.
          </p>
          <p className="text-dark-300 leading-relaxed text-sm mt-4">
            Last updated: November 2025
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Privacy;
