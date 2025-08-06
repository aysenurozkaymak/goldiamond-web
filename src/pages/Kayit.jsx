import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../lib/supabase";

function Kayit() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [hata, setHata] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const { error } = await supabase
      .from("kullanicilar")
      .insert([{ email, sifre, kullanici_adi: kullaniciAdi }]);

    if (error) {
      setHata("Kayıt başarısız: " + error.message);
    } else {
      navigate("/login"); // Kayıttan sonra giriş sayfasına yönlendir
    }
  };

  return (
    <div className="giris-kapsayici">
      <div className="giris-kutusu">
        <h2>Kayıt Ol</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
        />
        <button onClick={handleRegister}>Kayıt Ol</button>
        {hata && <p className="hata">{hata}</p>}

        <p className="giris-sorusu">
          Zaten bir hesabınız var mı?{" "}
          <Link to="/login" className="giris-linki">Giriş yapın</Link>
        </p>
      </div>
    </div>
  );
}

export default Kayit;
