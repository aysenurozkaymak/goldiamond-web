import React from "react";
import "./ElegantStyle.css";
import g1 from "../assets/model1.webp";
import g2 from "../assets/model2.webp";
import g3 from "../assets/model3.webp";

const styles = [
  {
    img: g1,
    title: "Zarafetin Yeni Adı: GolDiamond",
    text: "Modern tasarım, geleneksel ustalıkla buluşuyor.",
  },
  {
    img: g2,
    title: "Işıltıyla Gelen Şıklık",
    text: "GolDiamond farkını yakından hissedin.",
  },
  {
    img: g3,
    title: "Senin Işıltın, Senin Tarzın",
    text: "Koleksiyonlarımızla her günü özel kıl.",
  },
];

function ElegantStyle() {
  return (
    <section className="elegant-style">
      <h2>Zarafetin Yeni Tanımı</h2>
      <div className="style-grid">
        {styles.map((item, i) => (
          <div className="style-card" key={i}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ElegantStyle;
// Hata yok bu sayfada.