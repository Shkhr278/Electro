// Cart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../contexts/AppContext";
import { motionVariants } from "../animations/motionVariants";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } =
    useAppContext();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent"
        variants={motionVariants.title}
        initial="hidden"
        animate="visible"
      >
        Your Shopping Cart
      </motion.h1>

      {cart.length === 0 ? (
        <motion.div
          className="text-center py-16"
          variants={motionVariants.fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🛒
          </motion.div>
          <h2 className="text-2xl font-semibold text-dark-200 mb-4">
            Your cart is empty
          </h2>
          <p className="text-dark-400 mb-8">
            Browse our components and add items to start building your next
            project.
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-dark-950 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="mb-8 text-center"
            variants={motionVariants.fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-dark-300">
              You have{" "}
              <span className="font-semibold text-dark-50">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>{" "}
              in your cart.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={motionVariants.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Cart Items */}
            <motion.div
              className="space-y-6"
              variants={motionVariants.fadeInUp}
            >
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="card flex items-center space-x-4"
                  variants={motionVariants.card}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover="hover"
                >
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-50">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-primary-400 font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-dark-800 text-dark-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      -
                    </motion.button>
                    <span className="w-8 text-center font-semibold text-dark-50">
                      {item.quantity}
                    </span>
                    <motion.button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-dark-800 text-dark-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-500 p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary */}
            <motion.div
              className="card"
              variants={motionVariants.fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-dark-50">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-dark-400">
                    Subtotal ({totalItems}{" "}
                    {totalItems === 1 ? "item" : "items"})
                  </span>
                  <span className="font-semibold text-dark-50">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Shipping</span>
                  <span className="font-semibold text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Estimated Tax</span>
                  <span className="font-semibold text-dark-50">
                    ${(totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
                <hr className="border-dark-700" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-dark-50">Total</span>
                  <span className="text-primary-400">
                    ${(totalPrice + totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              <motion.button
                className="w-full mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-dark-950 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </motion.button>
              <motion.button
                className="w-full mt-4 bg-transparent border-2 border-dark-700 text-dark-200 font-semibold py-3 px-6 rounded-lg hover:bg-dark-900 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/catalog")}
              >
                Continue Browsing
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
