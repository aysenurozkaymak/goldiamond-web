import React, { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import supabase from "../lib/supabase";
import "./Giris.css";
function Giris() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("kullanicilar")
      .select("kullanici_adi")
      .eq("email", email)
      .eq("sifre", sifre)
      .single();

    if (error || !data) {
      setHata("Email veya şifre hatalı.");
    } else {
      localStorage.setItem("kullaniciAdi", data.kullanici_adi);
      navigate("/");
    }
  };
return (
  <div className="giris-kapsayici">
    <div className="giris-kutusu">
      <h2>Giriş Yap</h2>
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
      <button onClick={handleLogin}>Giriş Yap</button>
      {hata && <p className="hata">{hata}</p>}

      <p className="kaydol-sorusu">
        Hesabın yok mu?{" "}
        <Link to="/register" className="kaydol-linki">Kayıt ol</Link>
      </p>
    </div>
  </div>
);

}

export default Giris; 