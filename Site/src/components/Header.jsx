import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/catalog", label: "Catalog" },
    { to: "/cart", label: "Cart" },
    { to: "/about", label: "About" },
  ];

  return (
    <motion.header
      className="header p-4 md:p-6 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" aria-label="Go to homepage" className="inline-block">
            <DecryptedText
              text="Electronic Components"
              animateOn="view"        // <-- runs automatically when element is in viewport (page load)
              revealDirection="center"
              speed={100}              // <-- change this value to make the animation faster/slower (ms)
              maxIterations={20}
              className="text-2xl md:text-3xl font-bold text-white"
              parentClassName=""
              encryptedClassName=""
            />
            {/* To change animation speed: edit `speed={50}` above. Lower = faster, higher = slower. */}
          </Link>
        </motion.h1>

        {/* Desktop nav */}
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
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <Link to={item.to} className="nav-link text-sm md:text-lg font-medium">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-white focus:outline-none rounded-lg p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 border-t border-transparent pt-4 bg-transparent rounded-b-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-3 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="nav-link block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
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
