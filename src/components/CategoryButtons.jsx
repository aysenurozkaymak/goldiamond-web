import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryButtons.css";

function CategoryButtons() {
  const navigate = useNavigate();
  const categories = ["Alyanslar", "Bileklikler", "Kolyeler", "Küpeler"];

  return (
    <div className="category-buttons">
      {categories.map((cat, i) => (
        <button key={i} onClick={() => navigate(`/${cat.toLowerCase()}`)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
//hata yok bu sayfada.