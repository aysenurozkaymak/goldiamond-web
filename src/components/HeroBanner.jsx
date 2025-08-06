import React from "react";
import "./HeroBanner.css";
import ringBanner from "../assets/rings.png"; 
function HeroBanner() {
  return (
    <section className="hero-banner" style={{ position: "relative" }}>
      <img
        src={ringBanner}
        alt="Love Story"
        style={{ width: "50%", borderRadius: "10px" }}
      />
      <button
        className="discover-btn"
        style={{
          position: "absolute",
          bottom: "90px",
          right: "650px",
          backgroundColor: "white",
          color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        KEŞFET
      </button>
    </section>
  );
}

export default HeroBanner; // Hata yok bu sayfada.
