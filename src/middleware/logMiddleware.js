import supabase from "../lib/supabase";

export const logVisitor = async (sayfaYolu) => {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();

    const userAgent = navigator.userAgent;
    const ip = ipData.ip;

    const kullaniciAdi = localStorage.getItem("kullaniciAdi") || "anonim";

    await supabase.from("loglar").insert([
      {
        ip: ip,
        sayfa: sayfaYolu,
        kullanici_ajani: userAgent,
        kullanici_adi: kullaniciAdi, // <- burayı da logluyoruz
      },
    ]);
  } catch (error) {
    console.error("Loglama hatası:", error);
  }
};
