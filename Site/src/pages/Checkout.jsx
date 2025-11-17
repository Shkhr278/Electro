// Checkout.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";

const Checkout = () => {
  const { cart, getTotalPrice, getTotalItems } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { formData, cart, totalPrice });
    alert("Order placed successfully! A confirmation email has been sent.");
  };

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
        Checkout
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <motion.div
          className="card"
          variants={motionVariants.fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-2 text-dark-50">
            Order Summary
          </h2>
          <p className="text-sm text-dark-400 mb-6">
            {totalItems === 0
              ? "No items in your cart yet."
              : `Review your items before placing the order.`}
          </p>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <div>
                  <h3 className="font-semibold text-dark-50">
                    {item.title}
                  </h3>
                  <p className="text-dark-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <span className="font-bold text-dark-50">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <hr className="border-dark-700" />
            <div className="flex justify-between text-base font-semibold">
              <span className="text-dark-300">Subtotal</span>
              <span className="text-dark-50">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span className="text-dark-300">Estimated Tax</span>
              <span className="text-dark-50">
                ${(totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span className="text-dark-50">Total</span>
              <span className="text-primary-400">
                ${(totalPrice + totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Checkout Form */}
        <motion.div
          className="card"
          variants={motionVariants.fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-dark-50">
            Shipping & Payment Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark-50">
                Shipping Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="input w-full"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark-50">
                Payment Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="input w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      className="input w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-dark-950 font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Place Order
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;
