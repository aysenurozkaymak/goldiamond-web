import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [kullaniciAdi, setKullaniciAdi] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const ad = localStorage.getItem("kullaniciAdi");
    setKullaniciAdi(ad);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <span style={{ color: "#000" }}>Gol</span>
          <span style={{ color: "gold" }}>D</span>
          <span style={{ color: "#000" }}>iamond</span>
        </div>

        <div className="icon-group">
          <div className="icon-item">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="icon-item">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div className="icon-item user-menu" onClick={toggleDropdown}>
            <i className="fa-solid fa-user"></i>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {kullaniciAdi ? (
                  <>
                    <span className="dropdown-greeting">Merhaba, <strong>{kullaniciAdi}</strong></span>
                    <Link to="/logout" className="dropdown-link">Çıkış Yap</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-link">Giriş Yap</Link>
                    <Link to="/register" className="dropdown-link">Kayıt Ol</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
