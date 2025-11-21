import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import ComponentDetail from "./pages/ComponentDetail";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/component/:id" element={<ComponentDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
