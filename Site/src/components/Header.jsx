import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="header p-4 md:p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/">Electronic Components</Link>
        </motion.h1>
        <nav className="hidden md:block">
          <motion.ul
            className="flex space-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/catalog", label: "Catalog" },
              { to: "/cart", label: "Cart" },
              { to: "/about", label: "About" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <Link to={item.to} className="nav-link text-lg font-medium">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <button
          className="md:hidden text-dark-300 hover:text-primary-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/catalog", label: "Catalog" },
              { to: "/cart", label: "Cart" },
              { to: "/about", label: "About" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="nav-link text-lg font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
