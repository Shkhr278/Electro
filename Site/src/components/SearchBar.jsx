import React from "react";
import { motion } from "framer-motion";

const SearchBar = ({ query, onQueryChange }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Filtering is live via query, so nothing else needed here.
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row items-stretch max-w-2xl w-full mx-auto mb-10 gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="relative flex-1"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260 }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search for electronic components..."
          className="input w-full pr-12 pl-5 py-4 text-base sm:text-lg rounded-xl sm:rounded-r-none"
        />
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          animate={{ x: query ? 0 : 6, opacity: query ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-5 h-5 text-dark-300"
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
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-dark-950 font-semibold py-4 px-8 rounded-xl sm:rounded-l-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-base"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
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
