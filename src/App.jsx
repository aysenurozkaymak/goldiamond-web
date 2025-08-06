import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HeroBanner from "./components/HeroBanner";
import CategoryButtons from "./components/CategoryButtons";
import ProductShowcase from "./components/ProductShowcase";
import ElegantStyle from "./components/ElegantStyle";
import Footer from "./components/Footer";
import Alyanslar from "./pages/Alyanslar";
import Bileklikler from "./pages/Bileklikler";
import Kolyeler from "./pages/Kolyeler";
import Küpeler from "./pages/Küpeler";
import Giris from "./pages/Giris";
import Kayit from "./pages/Kayit";
import Logout from "./pages/Logout";
import "./App.css";

function App() {
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <HeroBanner />
                <CategoryButtons />
                <ProductShowcase />
                <ElegantStyle />
              </>
            }
          />
          <Route path="/alyanslar" element={<Alyanslar />} />
          <Route path="/bileklikler" element={<Bileklikler />} />
          <Route path="/kolyeler" element={<Kolyeler />} />
          <Route path="/kupeler" element={<Küpeler />} />
          <Route path="/login" element={<Giris />} />
          <Route path="/register" element={<Kayit />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
