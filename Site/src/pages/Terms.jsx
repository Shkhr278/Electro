import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import BlurText from "../components/BlurText";

const Terms = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed in terms Page!");
  };
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
        className="flex flex-col items-center justify-center text-center mb-8"
        variants={motionVariants.title}
      >
        <BlurText
          text="Terms of Services"
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
          These terms explain how you may use our website, place orders, and
          interact with our services. Please review them carefully.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        variants={motionVariants.grid}
      >
        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Acceptance of Terms
          </h2>
          <p className="text-white/70 leading-relaxed">
            By accessing or using the Electronic Components Store website, you
            agree to be bound by these Terms of Service and any additional
            policies referenced here. If you do not agree to these terms, you
            should not use our site or services.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Use License
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            You are granted a limited, non-exclusive, non-transferable license
            to access and use the materials on our website for personal,
            non-commercial, and temporary viewing only.
          </p>
          <p className="text-white/70 leading-relaxed">
            Under this license you may not:
          </p>
          <ul className="text-white/70 leading-relaxed space-y-1 mt-2 ml-4">
            <li>• Modify or copy the materials</li>
            <li>• Use the materials for any commercial or public display</li>
            <li>• Attempt to decompile or reverse engineer any software</li>
            <li>• Remove any copyright or proprietary notices</li>
          </ul>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Products and Services
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            All products, descriptions, and prices are subject to change without
            notice. Availability may vary, and we reserve the right to limit
            quantities, discontinue items, or correct errors in pricing or
            product information at any time.
          </p>
          <p className="text-white/70 leading-relaxed">
            If we discover an error affecting your order, we may contact you to
            confirm, adjust, or cancel the order before processing.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Billing and Account Information
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            You agree to provide current, complete, and accurate purchase and
            account information for all orders made on our site.
          </p>
          <p className="text-white/70 leading-relaxed">
            You are responsible for promptly updating your account details,
            including email address, billing address, and payment information,
            so that we can complete your transactions and contact you as needed.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Returns and Refunds
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Most items are eligible for return within 30 days of delivery,
            provided they are unused, in original condition, and include all
            packaging and accessories.
          </p>
          <p className="text-white/70 leading-relaxed">
            After we receive and inspect your return, approved refunds are
            issued within 5–7 business days. Shipping charges are generally
            non-refundable unless the return is due to an error on our part.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Prohibited Uses
          </h2>
          <p className="text-white/70 leading-relaxed">
            You agree not to use our site or services:
          </p>
          <ul className="text-white/70 leading-relaxed space-y-1 mt-2 ml-4">
            <li>
              • For any unlawful purpose or to encourage others to engage in
              unlawful acts
            </li>
            <li>
              • To violate any applicable laws, regulations, or local ordinances
            </li>
            <li>
              • To infringe upon our intellectual property or that of others
            </li>
            <li>
              • To harass, abuse, insult, harm, defame, or discriminate
            </li>
            <li>• To submit false, misleading, or fraudulent information</li>
          </ul>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Disclaimer
          </h2>
          <p className="text-white/70 leading-relaxed">
            The materials on our website are provided on an “as is” and “as
            available” basis. We make no warranties, express or implied,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Limitations
          </h2>
          <p className="text-white/70 leading-relaxed">
            In no event shall Electronic Components Store or its suppliers be
            liable for any indirect, incidental, special, or consequential
            damages arising from the use or inability to use the materials on
            our website, even if we have been advised of the possibility of such
            damages.
          </p>
        </motion.div>

        <motion.div
          className="card backdrop-blur-sm"
          variants={motionVariants.card}
          whileHover="hover"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Changes to Terms
          </h2>
          <p className="text-white/70 leading-relaxed mb-2">
            We may update these Terms of Service from time to time. Changes take
            effect when posted on this page. Continued use of the site after
            changes are published constitutes acceptance of the revised terms.
          </p>
          <p className="text-white/60 leading-relaxed text-sm mt-2">
            Last updated: November 2025
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Terms;
