// Catalog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";
import BlurText from "../components/BlurText";
import resistorImg from "../assets/resistor.png";
import capacitorImg from "../assets/capacitor.png";
import ledImg from "../assets/led.png";
import arduinoImg from "../assets/arduino.png";
import breadboardImg from "../assets/breadboard.png";
import jumperWiresImg from "../assets/jumperwires.png";
import inductorImg from "../assets/inductor.png";
import transistorImg from "../assets/transistor.png"; 

const Catalog = () => {
  const { addToCart } = useAppContext();
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log("Animation completed in Catalogue Page!");
  };

  const components = [
    {
      id: "1",
      title: "Resistor 10kΩ",
      description: "High precision resistor",
      price: 0.5,
      image: resistorImg,
    },
    {
      id: "2",
      title: "Capacitor 100μF",
      description: "Electrolytic capacitor",
      price: 1.2,
      image: capacitorImg,
    },
    {
      id: "3",
      title: "LED Red",
      description: "5mm red LED",
      price: 0.3,
      image: ledImg,
    },
    {
      id: "4",
      title: "Arduino Uno",
      description: "Microcontroller board",
      price: 25.0,
      image: arduinoImg,
    },
    {
      id: "5",
      title: "Breadboard",
      description: "830 tie-points breadboard",
      price: 8.5,
      image: breadboardImg,
    },
    {
      id: "6",
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      image: jumperWiresImg,
    },
    {
      id: "7",
      title: "Inductor 10mH",
      description: "Male to male jumper wires",
      price: 5.0,
      image: inductorImg,
    },
    {
      id: "8",
      title: "Transistor",
      description: "Male to male jumper wires",
      price: 5.0,
      image: transistorImg,
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
        className="flex flex-col items-center justify-center text-center mb-10 px-6"
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <BlurText
          text="Component Catalog"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="block text-6xl md:text-5xl font-bold text-white leading-tight mb-8"
        />

        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
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
              imageUrl={component.image}
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
