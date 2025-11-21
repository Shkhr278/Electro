import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../contexts/AppContext";
import { motionVariants } from "../animations/motionVariants";
import BlurText from "../components/BlurText";
import arduinoImg from "../assets/arduino.png";


const Cart = () => {
  const navigate = useNavigate();
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed in Cart Page!");
  };
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
      {/* Page Title */}
      <motion.h1
        className="flex flex-col items-center justify-center text-center mb-8"
        variants={motionVariants.title}
      >
        <BlurText
          text="Your Shopping Cart"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="block text-5xl md:text-5xl font-bold text-white leading-tight"
        />
      </motion.h1>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <motion.div
          className="text-center backdrop-blur-sm py-16"
          variants={motionVariants.fadeInUp}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🛒
          </motion.div>

          <h2 className="text-2xl font-semibold text-white mb-4">
            Your cart is empty
          </h2>

          <p className="text-white mb-8">
            Browse our components and add items to start building your next
            project.
          </p>

          <motion.button
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              handleScrollTop();
              navigate("/");
            }}
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      ) : (
        <>
          {/* Items Count */}
          <motion.div
            className="mb-8 text-center"
            variants={motionVariants.fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-white">
              You have{" "}
              <span className="font-semibold text-white">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>{" "}
              in your cart.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={motionVariants.staggerContainer}
          >
            {/* Cart Items */}
            <motion.div
              className="space-y-6 "
              variants={motionVariants.fadeInUp}
            >
              {cart.map((item, index) => {
                const imgSrc = item.image || item.imageUrl || arduinoImg;
                return (
                  <motion.div
                    key={item.id}
                    className="card flex backdrop-blur-sm items-center space-x-3"
                    variants={motionVariants.card}
                    transition={{ delay: index * 0.1 }}
                    whileHover="hover"
                  >
                    <motion.img
                      src={imgSrc}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-white font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <motion.button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="bg-white/10 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        -
                      </motion.button>

                      <span className="w-8 text-center font-semibold text-white">
                        {item.quantity}
                      </span>

                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-white/10 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
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
                );
              })}
            </motion.div>

            {/* Order Summary */}
            <motion.div
              className="card backdrop-blur-sm"
              variants={motionVariants.fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white">
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}
                    )
                  </span>

                  <span className="font-semibold text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white">Shipping</span>
                  <span className="font-semibold text-white">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white">Estimated Tax</span>

                  <span className="font-semibold text-white">
                    ${(totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>

                <hr className="border-white/20" />

                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>

                  <span className="text-white">
                    ${(totalPrice + totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout button */}
              <motion.button
                className="w-full mt-8 bg-white text-black font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleScrollTop();
                  navigate("/checkout");
                }}
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                className="w-full mt-4 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleScrollTop();
                  navigate("/catalog");
                }}
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
