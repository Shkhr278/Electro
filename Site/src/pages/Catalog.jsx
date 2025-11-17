// Catalog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";

const Catalog = () => {
  const { addToCart } = useAppContext();
  const navigate = useNavigate();

  const components = [
    {
      id: "1",
      title: "Resistor 10kΩ",
      description: "High precision resistor",
      price: 0.5,
      imageUrl: "https://via.placeholder.com/300x200?text=Resistor",
    },
    {
      id: "2",
      title: "Capacitor 100μF",
      description: "Electrolytic capacitor",
      price: 1.2,
      imageUrl: "https://via.placeholder.com/300x200?text=Capacitor",
    },
    {
      id: "3",
      title: "LED Red",
      description: "5mm red LED",
      price: 0.3,
      imageUrl: "https://via.placeholder.com/300x200?text=LED",
    },
    {
      id: "4",
      title: "Arduino Uno",
      description: "Microcontroller board",
      price: 25.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Arduino",
    },
    {
      id: "5",
      title: "Breadboard",
      description: "830 tie-points breadboard",
      price: 8.5,
      imageUrl: "https://via.placeholder.com/300x200?text=Breadboard",
    },
    {
      id: "6",
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
    {
      id: "7",
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
    {
      id: "8",
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.div
        className="text-center mb-10"
        variants={motionVariants.fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
          Component Catalog
        </h1>
        <p className="text-lg text-dark-200 max-w-2xl mx-auto leading-relaxed">
          Explore our full range of electronic components. Mix and match parts
          to prototype, experiment, and build production-ready hardware.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={motionVariants.grid}
        initial="hidden"
        animate="visible"
      >
        {components.map((component) => (
          <motion.div
            key={component.id}
            variants={motionVariants.card}
            className="transition-transform transform hover:scale-105"
          >
            <ProductCard
              title={component.title}
              description={component.description}
              price={component.price}
              imageUrl={component.imageUrl}
              onAddToCart={() => addToCart(component)}
              onClick={() => navigate(`/component/${component.id}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Catalog;
