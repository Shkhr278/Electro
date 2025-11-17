import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", query);
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className="flex items-center max-w-md mx-auto mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="relative flex-1"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for electronic components..."
          className="input w-full rounded-l-lg pr-12 pl-4 py-3 text-lg"
        />
        <motion.div
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          animate={{ x: query ? 0 : 10, opacity: query ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-5 h-5 text-dark-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </motion.div>
      </motion.div>
      <motion.button
        type="submit"
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-r-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Search
        </motion.span>
      </motion.button>
    </motion.form>
  );
};

export default SearchBar;
