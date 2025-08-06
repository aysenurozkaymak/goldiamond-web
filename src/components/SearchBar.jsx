// src/components/SearchBar.jsx
import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Arayın..." />
      <button>🔍</button>
    </div>
  );
}

export default SearchBar;
