import React, { useEffect, useState } from "react";
import supabase from "../lib/supabase";
import "./Alyanslar.css";
import { logVisitor } from "../middleware/logMiddleware"; // log fonksiyonu

function Küpeler() {
  const [urunler, setUrunler] = useState([]);
  const [metalFilter, setMetalFilter] = useState("");
  const [minFiyat, setMinFiyat] = useState("");
  const [maxFiyat, setMaxFiyat] = useState("");

  useEffect(() => {      const kullaniciAdi = localStorage.getItem("kullaniciAdi") || "anonim";
        logVisitor("/kupeler", kullaniciAdi);
    const fetchUrunler = async () => {
      let query = supabase
        .from("urun")
        .select("*")
        .ilike("kategori", "%küpe%");

      const { data, error } = await query;

      if (!error) {
        const filtreliData = data.filter((u) => {
          const fiyat = u.fiyat;
          const min = minFiyat ? Number(minFiyat) : 0;
          const max = maxFiyat ? Number(maxFiyat) : Infinity;
          const metalMatch = metalFilter ? u.metal_turu === metalFilter : true;
          return fiyat >= min && fiyat <= max && metalMatch;
        });
        setUrunler(filtreliData);
      }
    };

    fetchUrunler();
  }, [metalFilter, minFiyat, maxFiyat]);

  const resetFilters = () => {
    setMetalFilter("");
    setMinFiyat("");
    setMaxFiyat("");
  };

  return (
    <div className="alyanslar-container">
      <aside className="filters">
        <h3>Filtreleme</h3>
        <div className="filter-group">
          <h4>Metal Türü</h4>
          <button
            className={metalFilter === "altın pırlanta" ? "active" : ""}
            onClick={() => setMetalFilter("altın pırlanta")}
          >
            Altın Pırlanta
          </button>
          <button
            className={metalFilter === "gümüş pırlanta" ? "active" : ""}
            onClick={() => setMetalFilter("gümüş pırlanta")}
          >
            Gümüş Pırlanta
          </button>
          <button
            className={metalFilter === "" ? "active" : ""}
            onClick={resetFilters}
          >
            Tümü
          </button>
        </div>

        <hr />

        <div className="filter-group">
          <h4>Fiyat Aralığı</h4>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Minimum TL"
              value={minFiyat}
              onChange={(e) => setMinFiyat(e.target.value)}
            />
            <input
              type="number"
              placeholder="Maksimum TL"
              value={maxFiyat}
              onChange={(e) => setMaxFiyat(e.target.value)}
            />
          </div>
          <p className="current-range">
            {minFiyat || maxFiyat
              ? `${minFiyat || "0"} TL - ${maxFiyat || "∞"} TL`
              : "Tüm fiyatlar"}
          </p>
        </div>
      </aside>

      <section className="urunler-grid">
        {urunler.length > 0 ? (
          urunler.map((urun) => (
            <div key={urun.id} className="urun-card">
              <img src={urun.resim_url} alt={urun.isim} />
              <h3>{urun.isim}</h3>
              <p>{urun.metal_turu}</p>
              <strong>{urun.fiyat} TL</strong>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Filtreleme kriterlerinize uygun ürün bulunamadı.</p>
            <button onClick={resetFilters}>Filtreleri Sıfırla</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Küpeler;
