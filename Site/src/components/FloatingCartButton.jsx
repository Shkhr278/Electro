// src/components/FloatingCartButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();
   const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "smooth" if you want animation
    });
  };

  const totalItems =
    cart?.reduce((sum, item) => sum + (item.quantity ?? 1), 0) ?? 0;

  if (totalItems === 0) return null;

  return (
    <button
      aria-label="Open cart"
      onClick={() => {handleScrollTop(); navigate("/cart")}}
      className="
        fixed right-5 bottom-5 sm:right-8 sm:bottom-8
        z-[99999] flex items-center gap-3
        bg-emerald-500/95 hover:bg-emerald-500/100
        text-white font-semibold px-4 py-3 rounded-full shadow-2xl
        transform transition-transform duration-150
        hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-300
      "
    >
      <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/20">

        {/* SVG cart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13L5.4 5M7 13l-2 8h14
               M10 21a1 1 0 100-2 1 1 0 000 2
               m8 0a1 1 0 100-2 1 1 0 000 2"
          />
        </svg>

        {/* counter badge */}
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold rounded-full bg-black/85 text-white">
          {totalItems}
        </span>
      </span>

      <span className="hidden sm:inline-block">View Cart</span>
    </button>
  );
};

export default FloatingCartButton;
