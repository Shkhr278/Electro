import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto text-center px-4 py-4">
        <motion.p
          className="text-sm md:text-base font-medium text-dark-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Electronic Components. All rights
          reserved.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
        >
          {footerLinks.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <Link
                to={item.to}
                className="text-sm md:text-base font-medium text-dark-200 hover:text-primary-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
