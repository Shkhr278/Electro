import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const Terms = () => {
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
          Terms of Service
        </motion.h1>
        <motion.p
          className="text-xl text-dark-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Please read these terms carefully before using our website and services.
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
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Acceptance of Terms</h2>
          <p className="text-dark-300 leading-relaxed">
            By accessing and using the Electronic Components Store website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Use License</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials on Electronic Components Store's website for personal, non-commercial transitory viewing only.
          </p>
          <p className="text-dark-300 leading-relaxed">
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="text-dark-300 leading-relaxed space-y-1 mt-2 ml-4">
            <li>• Modify or copy the materials</li>
            <li>• Use the materials for any commercial purpose or for any public display</li>
            <li>• Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>• Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Products and Services</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            All products and services are subject to availability. We reserve the right to discontinue any product or service at any time.
          </p>
          <p className="text-dark-300 leading-relaxed">
            Prices for our products are subject to change without notice. We reserve the right to modify or cancel orders if we discover an error in product information or pricing.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Billing and Account Information</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.
          </p>
          <p className="text-dark-300 leading-relaxed">
            You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Returns and Refunds</h2>
          <p className="text-dark-300 leading-relaxed mb-4">
            We offer a 30-day return policy for most items. Items must be returned in their original condition and packaging.
          </p>
          <p className="text-dark-300 leading-relaxed">
            Refunds will be processed within 5-7 business days after receipt and inspection of the returned item. Shipping costs are non-refundable unless the return is due to our error.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Prohibited Uses</h2>
          <p className="text-dark-300 leading-relaxed">
            You may not use our products or services:
          </p>
          <ul className="text-dark-300 leading-relaxed space-y-1 mt-2 ml-4">
            <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>• To submit false or misleading information</li>
          </ul>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Disclaimer</h2>
          <p className="text-dark-300 leading-relaxed">
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Limitations</h2>
          <p className="text-dark-300 leading-relaxed">
            In no event shall Electronic Components Store or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </motion.div>

        <motion.div
          className="card"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Changes to Terms</h2>
          <p className="text-dark-300 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p className="text-dark-300 leading-relaxed text-sm mt-4">
            Last updated: October 2023
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Terms;
