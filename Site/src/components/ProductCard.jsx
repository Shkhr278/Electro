import React from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import GlareHover from "./GlareHover";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({
  title,
  price,
  imageUrl,
  onAddToCart,
  onClick,
  product,
}) => {
  const notify = () =>
    toast.success(`${title} added to cart!`, {
      position: "bottom-left",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (typeof onAddToCart === "function") {
      onAddToCart();
      notify();
    }
  };

  const imgSrc = product?.image || imageUrl ;
  const displayPrice =
    typeof price === "number" ? `$${price.toFixed(2)}` : price ?? "N/A";

  return (
    <motion.div
      className="card group backdrop-blur-sm cursor-pointer"
      variants={motionVariants}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.25}
        glareAngle={-25}
        glareSize={250}
        transitionDuration={800}
        playOnce={false}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden rounded-t-xl">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </GlareHover>

      <div className="p-4 md:p-6">
        <motion.h2
          className="text-lg md:text-xl font-bold mb-2 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>

        
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xl md:text-2xl font-bold text-white">
            {displayPrice}
          </span>
        </motion.div>

        <motion.button
          onClick={handleAddToCart}
          className="w-full bg-transparent text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
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
