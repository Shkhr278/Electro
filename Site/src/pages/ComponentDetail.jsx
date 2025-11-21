// src/pages/ComponentDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import resistorImg from "../assets/resistor.png";
import capacitorImg from "../assets/capacitor.png";
import ledImg from "../assets/led.png";
import arduinoImg from "../assets/arduino.png";
import breadboardImg from "../assets/breadboard.png";
import jumperWiresImg from "../assets/jumperwires.png";
import inductorImg from "../assets/inductor.png";
import transistorImg from "../assets/transistor.png";
import raspberryPiImg from "../assets/raspberrypi.png";
import esp32Img from "../assets/esp32.png";
import ledstripImg from "../assets/ledstrip.png";
import servoMotorImg from "../assets/servomotor.png";

const ComponentDetail = () => {
  const { id } = useParams();
  const { addToCart } = useAppContext();

  // unified list including Catalog + Home products (IDs are strings)
  const components = [
    {
      id: "1",
      title: "Resistor 10kΩ",
      description: "High precision resistor",
      price: 0.5,
      image: resistorImg,
      category: "Passive Components",
    },
    {
      id: "2",
      title: "Capacitor 100μF",
      description: "Electrolytic capacitor",
      price: 1.2,
      image: capacitorImg,
      category: "Passive Components",
    },
    {
      id: "3",
      title: "LED Red",
      description: "5mm red LED",
      price: 0.3,
      image: ledImg,
      category: "Optoelectronics",
    },
    {
      id: "4",
      title: "Arduino Uno",
      description: "Microcontroller board",
      price: 25.0,
      image: arduinoImg,
      category: "Microcontrollers",
    },
    {
      id: "5",
      title: "Breadboard",
      description: "830 tie-points breadboard",
      price: 8.5,
      image: breadboardImg,
      category: "Prototyping",
    },
    {
      id: "6",
      title: "Jumper Wires",
      description: "Male to male jumper wires",
      price: 5.0,
      image: jumperWiresImg,
      category: "Prototyping",
    },
    {
      id: "7",
      title: "Inductor 10mH",
      description: "10mH inductor for filtering and energy storage",
      price: 2.5,
      image: inductorImg,
      category: "Passive Components",
    },
    {
      id: "8",
      title: "Transistor (NPN)",
      description: "General purpose NPN transistor",
      price: 0.8,
      image: transistorImg,
      category: "Semiconductors",
    },

    // Home-only products now added to component details
    {
      id: "9",
      title: "Arduino Uno R3",
      description:
        "Microcontroller board based on the ATmega328P with 14 digital I/O pins.",
      price: 22.99,
      image: arduinoImg,
      category: "Microcontrollers",
    },
    {
      id: "10",
      title: "Raspberry Pi 4",
      description:
        "Single-board computer with dual-band wireless LAN and Bluetooth 5.0.",
      price: 35.99,
      image: raspberryPiImg,
      category: "Development Boards",
    },
    {
      id: "11",
      title: "ESP32 Development Board",
      description:
        "Low-cost, low-power system on a chip microcontroller with Wi-Fi and Bluetooth.",
      price: 8.99,
      image: esp32Img,
      category: "Development Boards",
    },
    {
      id: "12",
      title: "LED Strip 5M",
      description:
        "Flexible RGB LED strip with 30 LEDs per meter, waterproof and cuttable.",
      price: 15.99,
      image: ledstripImg,
      category: "LEDs",
    },
    {
      id: "13",
      title: "Servo Motor MG996R",
      description:
        "High-torque servo motor with metal gears, ideal for robotics projects.",
      price: 12.99,
      image: servoMotorImg,
      category: "Motors",
    },
    {
      id: "14",
      title: "Breadboard 830 Points",
      description:
        "Solderless breadboard for prototyping electronic circuits without soldering.",
      price: 6.99,
      image: breadboardImg,
      category: "Prototyping Tools",
    },
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
    toast.success(`${component.title} added to cart!`, {
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
        className="max-w-4xl mx-auto"
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
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              {/* Left: image + title */}
              <div className="md:flex-1 md:pr-6">
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full max-w-sm h-auto rounded-xl object-cover shadow-md mb-4"
                />
                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {component.title}
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  ID:{" "}
                  <span className="font-mono text-xs text-white/70">{id}</span>
                </p>
              </div>

              {/* Right: price, category, specs */}
              <div className="md:w-64 flex-shrink-0 flex flex-col items-start gap-3">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {component.category}
                </span>

                <p className="text-3xl font-bold text-emerald-300">
                  ${component.price.toFixed(2)}
                </p>
                <p className="text-xs text-white/60">
                  Inclusive of basic components pricing
                </p>

                <div className="w-full mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold py-2 px-6 shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComponentDetail;
