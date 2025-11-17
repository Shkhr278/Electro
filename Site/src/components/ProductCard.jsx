import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const ProductCard = ({ title, description, price, imageUrl, onAddToCart }) => {
  return (
    <motion.div
      className="card group cursor-pointer"
      variants={motionVariants}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-t-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      <div className="p-6">
        <motion.h2
          className="text-xl font-bold mb-2 text-dark-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-dark-400 mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-2xl font-bold text-primary-400">
            ${price.toFixed(2)}
          </span>
        </motion.div>
        <motion.button
          onClick={onAddToCart}
          className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
