import React from "react";
import "./ProductShowcase.css";
import alyans from "../assets/yuzuk.webp";
import bileklik from "../assets/bileklik.jpg";
import kolye from "../assets/kolye.jpg";
import kupe from "../assets/kupe.webp";

function ProductShowcase() {
  return (
    <section className="product-showcase">
      <div className="product-block">
        <div className="product-text">
          <h2>Alyanslarımız</h2>
          <h3>Sonsuz Bağlılığın Simgesi</h3>
          <p>Hayatınızın en özel anına eşlik edecek</p>
          <p>zarif alyans modellerimizi keşfedin.</p>
          <h3>El işçiliği ve Kalite</h3>
          <p>Her alyans modelimiz ustalıkla işlenmiş olup,</p>
          <p>uzun 
ömürlü kullanım için özel alaşımlarla hazırlanmıştır.</p>
        </div>
        <div className="product-image">
          <img src={alyans} alt="Alyanslarımız" />
        </div>
      </div>

      <div className="product-block reverse">
        <div className="product-image">
          <img src={bileklik} alt="Bilekliklerimiz" />
        </div>
        <div className="product-text">
          <h2>Bilekliklerimiz</h2>
          <h3>Zarif Işıltının Temsilcisi</h3>
          <p>Günlük stilinizi ya da özel anlarınızı tamamlayacak,</p>
          <p>zarif ve göz alıcı bileklik modellerimizi keşfedin.</p>
          <h3>El işçiliği ve Parlaklık</h3>
          <p>Her bileklik, ince işçilikle hazırlanmış taş detayları</p>
          <p>ve parıltısıyla stilinizi bir adım öne taşır.</p>
        </div>
      </div>

      <div className="product-block">
        <div className="product-text">
          <h2>Kolyelerimiz</h2>
          <h3>Zarif Işıltının Simgesi</h3>
          <p>Her adımınızda şıklığınızı tamamlayacak</p>
          <p>göz alıcı kolye tasarımlarımızla tanışın.</p>
          <h3>El işçiliği ve Detay</h3>
          <p>Kolyelerimiz, usta zanaatkârların ellerinde şekillenir.</p>
          <p>Her bir detay, özenle işlenerek eşsiz bir zarafet sunar.</p>
        </div>
        <div className="product-image">
          <img src={kolye} alt="Kolyelerimiz" />
        </div>
      </div>

      <div className="product-block reverse">
        <div className="product-image">
          <img src={kupe} alt="Küpelerimiz" />
        </div>
        <div className="product-text">
          <h2>Küpelerimiz</h2>
          <h3>Işıltının En Zarif Hali</h3>
          <p>Her stile uyum sağlayan modern ve klasik</p>
          <p>küpe modellerimizle farkınızı yansıtın.</p>
          <h3>Hafiflik ve Konfor</h3>
          <p>Tasarımda sadece estetik değil,</p>
          <p>gün boyu rahat kullanım da ön planda tutulmuştur.</p>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;  