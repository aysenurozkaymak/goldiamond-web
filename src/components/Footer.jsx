import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>GolDiamond</h4>
        <p>Zarafetin adresi<br />Kalite ve şıklık bir arada</p>
      </div>

      <div className="footer-col">
        <h4>Hızlı Erişim</h4>
        <ul>
          <li>Anasayfa</li>
          <li>Alyanslar</li>
          <li>Bileklikler</li>
          <li>Kolyeler</li>
          <li>Küpeler</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Kurumsal</h4>
        <ul>
          <li>Hakkımızda</li>
          <li>İletişim</li>
          <li>Gizlilik Politikası</li>
          <li>Kullanım Şartları</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Bizi Takip Et</h4>
        <ul className="social">
          <li>📷 Instagram</li>
          <li>📘 Facebook</li>
          <li>▶️ YouTube</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer; // Hata yok bu sayfada.
