import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">The page you are looking for doesn't exist.</p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;