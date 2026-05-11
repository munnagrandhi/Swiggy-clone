import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Food from "./pages/main_pages/Food";
import Instamart from "./pages/main_pages/Instamart";
import Dineout from "./pages/main_pages/Dineout";

import FoodOptions from "./components/FoodOptions";
import InstamartSection from "./components/InstamartSection";
import DineoutSection from "./components/DineoutSection";

/* MAIN APP */
function App() {
  return (
    <div>
      <Navbar />

      <Routes>

        {/* MAIN PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FoodOptions />
              <InstamartSection />
              <DineoutSection />
              <Footer />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/food" element={<Food />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/dineout" element={<Dineout />} />

      </Routes>

    </div>
  );
}


export default App;