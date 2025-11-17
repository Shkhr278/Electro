import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-950 text-dark-50 transition-colors duration-300">
      <Header />

      <main className="flex-grow px-4 md:px-0 py-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
