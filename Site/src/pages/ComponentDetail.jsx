// ComponentDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComponentDetail = () => {
  const { id } = useParams();
  const { addToCart } = useAppContext();

  const components = [
    { id: "1", name: "Resistor 10kΩ", description: "High precision resistor", price: 0.5, category: "Passive Components" },
    { id: "2", name: "Capacitor 100μF", description: "Electrolytic capacitor", price: 1.2, category: "Passive Components" },
    { id: "3", name: "LED Red", description: "5mm red LED", price: 0.3, category: "Optoelectronics" },
    { id: "4", name: "Arduino Uno", description: "Microcontroller board", price: 25.0, category: "Microcontrollers" },
    { id: "5", name: "Breadboard", description: "830 tie-points breadboard", price: 8.5, category: "Prototyping" },
    { id: "6", name: "Jumper Wires", description: "Male to male jumper wires", price: 5.0, category: "Prototyping" },
    { id: "7", name: "Jumper Wires", description: "Male to male jumper wires", price: 5.0, category: "Prototyping" },
    { id: "8", name: "Jumper Wires", description: "Male to male jumper wires", price: 5.0, category: "Prototyping" },
  ];

  const component = components.find((c) => c.id === id);

  if (!component) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="rounded-xl bg-red-900/30 border border-red-500/40 px-6 py-4 text-red-200 shadow-lg">
          Component not found
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(component);
    toast.success(`${component.name} added to cart!`, {
      position: "bottom-left",
      autoClose: 3000,
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <div className="mb-6 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Component details
          </span>
        </div>

        <div className="card overflow-hidden p-0">
          <div className="h-2 bg-gradient-to-r from-emerald-500/80 to-emerald-300/80" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {component.name}
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  ID:{" "}
                  <span className="font-mono text-xs text-white/70">{id}</span>
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {component.category}
                </span>
                <p className="text-2xl font-bold text-emerald-300">
                  ${component.price.toFixed(2)}
                </p>
                <p className="text-xs text-white/60">
                  Inclusive of basic components pricing
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid gap-6 md:grid-cols-[2fr,1.3fr]">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Description
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {component.description}. This component is ideal for use in
                  prototyping, hobby projects, and educational electronics
                  experiments.
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4 text-sm text-white/80 border border-white/20">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                  Quick specs
                </h3>
                <ul className="space-y-1.5">
                  <li className="flex items-center justify-between">
                    <span className="text-white/60">Category</span>
                    <span className="font-medium text-white/90">
                      {component.category}
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/60">Stock status</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      In stock
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/60">Ships in</span>
                    <span className="font-medium text-white/90">
                      1–2 business days
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60">
                Add this component to your cart and continue exploring more
                items from the catalog.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold py-2 px-6 shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13L5.4 5M7 13l-2 8h14M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <span>Add to cart</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComponentDetail;
