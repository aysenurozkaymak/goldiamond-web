
import supabase from "./supabase";

// IP alma (3rd party servis - gizlilik sorunu yoksa)
export async function getClientIp() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch (err) {
    return "IP alınamadı";
  }
}

export async function insertLog(sayfa) {
  const ip = await getClientIp();
  const kullanici_ajani = navigator.userAgent;

  const { error } = await supabase.from("loglar").insert([
    { ip, sayfa, kullanici_ajani },
  ]);

  if (error) console.error("Log ekleme hatası:", error.message);
}
