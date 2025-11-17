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
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 bg-clip-text text-transparent"
          variants={motionVariants.title}
          initial="hidden"
          animate="visible"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-xl text-dark-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Information We Collect</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, shipping address, payment information, and any other information you choose to provide.
          </p>
          <p className="text-dark-300 leading-relaxed">
            We also automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, and browsing behavior.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">How We Use Your Information</h2>
          <ul className="text-dark-300 leading-relaxed space-y-2">
            <li>• To process and fulfill your orders</li>
            <li>• To communicate with you about your orders and our services</li>
            <li>• To provide customer support</li>
            <li>• To send you marketing communications (with your consent)</li>
            <li>• To improve our website and services</li>
            <li>• To comply with legal obligations</li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Information Sharing</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>
          <p className="text-dark-300 leading-relaxed">
            We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Data Security</h2>
          <p className="text-dark-300 leading-relaxed">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Your Rights</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.
          </p>
          <p className="text-dark-300 leading-relaxed">
            To exercise these rights or if you have any questions about our privacy practices, please contact us using the information provided on our contact page.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Changes to This Policy</h2>
          <p className="text-dark-300 leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
          <p className="text-dark-300 leading-relaxed text-sm mt-4">
            Last updated: October 2023
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Privacy;
