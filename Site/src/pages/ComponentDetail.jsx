import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";

const ComponentDetail = () => {
  const { id } = useParams();

  // Mock data for demonstration
  const components = [
    {
      id: "1",
      name: "Resistor 10kΩ",
      description: "High precision resistor",
      price: 0.5,
      category: "Passive Components",
    },
    {
      id: "2",
      name: "Capacitor 100μF",
      description: "Electrolytic capacitor",
      price: 1.2,
      category: "Passive Components",
    },
    {
      id: "3",
      name: "LED Red",
      description: "5mm red LED",
      price: 0.3,
      category: "Optoelectronics",
    },
    {
      id: "4",
      name: "Arduino Uno",
      description: "Microcontroller board",
      price: 25.0,
      category: "Microcontrollers",
    },
    {
      id: "5",
      name: "Breadboard",
      description: "830 tie-points breadboard",
      price: 8.5,
      category: "Prototyping",
    },
    {
      id: "6",
      name: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      category: "Prototyping",
    },
  ];

  const component = components.find((c) => c.id === id);

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <motion.div
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">{component.name}</h1>
      <p className="text-gray-700 mb-2">Description: {component.description}</p>
      <p className="text-gray-700 mb-2">Price: ${component.price.toFixed(2)}</p>
      <p className="text-gray-700 mb-2">Category: {component.category}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ComponentDetail;
