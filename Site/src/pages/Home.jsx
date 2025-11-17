import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { motionVariants } from "../animations/motionVariants";
import { useAppContext } from "../contexts/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useAppContext();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // NEW

  const products = [
    {
      id: 1,
      title: "Arduino Uno R3",
      description:
        "Microcontroller board based on the ATmega328P with 14 digital input/output pins.",
      price: 22.99,
      imageUrl:
        "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Arduino+Uno",
      category: "Microcontrollers",
      subcategory: "Arduino",
    },
    {
      id: 2,
      title: "Raspberry Pi 4",
      description:
        "Single-board computer with dual-band wireless LAN and Bluetooth 5.0.",
      price: 35.99,
      imageUrl:
        "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Raspberry+Pi+4",
      category: "Development Boards",
      subcategory: "Raspberry Pi",
    },
    {
      id: 3,
      title: "ESP32 Development Board",
      description:
        "Low-cost, low-power system on a chip microcontroller with Wi-Fi and Bluetooth.",
      price: 8.99,
      imageUrl: "https://via.placeholder.com/400x300/059669/FFFFFF?text=ESP32",
      category: "Development Boards",
      subcategory: "ESP32",
    },
    {
      id: 4,
      title: "LED Strip 5M",
      description:
        "Flexible RGB LED strip with 30 LEDs per meter, waterproof and cuttable.",
      price: 15.99,
      imageUrl:
        "https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=LED+Strip",
      category: "LEDs",
      subcategory: "RGB Strips",
    },
    {
      id: 5,
      title: "Servo Motor MG996R",
      description:
        "High-torque servo motor with metal gears, ideal for robotics projects.",
      price: 12.99,
      imageUrl:
        "https://via.placeholder.com/400x300/EA580C/FFFFFF?text=Servo+Motor",
      category: "Motors",
      subcategory: "Servo Motors",
    },
    {
      id: 6,
      title: "Breadboard 830 Points",
      description:
        "Solderless breadboard for prototyping electronic circuits without soldering.",
      price: 6.99,
      imageUrl:
        "https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Breadboard",
      category: "Prototyping Tools",
      subcategory: "Breadboards",
    },
  ];

  const categories = [...new Set(products.map((p) => p.category))];

  const subcategories = useMemo(() => {
    if (!selectedCategory) return [];
    return [
      ...new Set(
        products
          .filter((p) => p.category === selectedCategory)
          .map((p) => p.subcategory)
      ),
    ];
  }, [selectedCategory, products]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase(); // NEW

    return products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedSubcategory && p.subcategory !== selectedSubcategory)
        return false;

      if (!q) return true;

      const haystack = (
        p.title +
        " " +
        p.description +
        " " +
        p.category +
        " " +
        p.subcategory
      ).toLowerCase();

      return haystack.includes(q);
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, products]); // searchQuery added

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.div
        className="text-center mb-12"
        variants={motionVariants.fadeInUp}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
          variants={motionVariants.title}
          initial="hidden"
          animate="visible"
        >
          Welcome to the Electronic Components Store
        </motion.h1>
        <motion.p
          className="text-xl text-dark-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover premium electronic components for your next project. From
          resistors to microcontrollers, find everything you need in one place.
        </motion.p>
      </motion.div>

      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <SearchBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
        />
      </motion.div>

      <motion.div
        className="mb-12"
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-dark-50">
          Featured Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory("");
            }}
            className="input px-4 py-2 min-w-[200px]"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="input px-4 py-2 min-w-[200px]"
            disabled={!selectedCategory}
          >
            <option value="">All Subcategories</option>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={motionVariants.grid}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={motionVariants.card}
            whileHover="hover"
            whileTap="tap"
          >
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => addToCart(product)}
              onClick={() => navigate(`/component/${product.id}`)}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        variants={motionVariants.fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-dark-950 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/catalog")}
        >
          View All Products
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;