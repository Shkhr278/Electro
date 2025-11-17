import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const Catalog = () => {
  // Mock data for demonstration
  const components = [
    {
      id: 1,
      title: "Resistor 10kΩ",
      description: "High precision resistor",
      price: 0.5,
      imageUrl: "https://via.placeholder.com/300x200?text=Resistor",
    },
    {
      id: 2,
      title: "Capacitor 100μF",
      description: "Electrolytic capacitor",
      price: 1.2,
      imageUrl: "https://via.placeholder.com/300x200?text=Capacitor",
    },
    {
      id: 3,
      title: "LED Red",
      description: "5mm red LED",
      price: 0.3,
      imageUrl: "https://via.placeholder.com/300x200?text=LED",
    },
    {
      id: 4,
      title: "Arduino Uno",
      description: "Microcontroller board",
      price: 25.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Arduino",
    },
    {
      id: 5,
      title: "Breadboard",
      description: "830 tie-points breadboard",
      price: 8.5,
      imageUrl: "https://via.placeholder.com/300x200?text=Breadboard",
    },
    {
      id: 6,
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
    {
      id: 7,
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
    {
      id: 8,
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      imageUrl: "https://via.placeholder.com/300x200?text=Jumper+Wires",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Catalog of Electronic Components
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {components.map((component) => (
          <motion.div
            key={component.id}
            variants={motionVariants}
            initial="hidden"
            animate="visible"
            className="transition-transform transform hover:scale-105"
          >
            <ProductCard
              title={component.title}
              description={component.description}
              price={component.price}
              imageUrl={component.imageUrl}
              onAddToCart={() =>
                console.log(`Added ${component.title} to cart`)
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
