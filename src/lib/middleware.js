import supabase from "./supabase";

export const logIslem = async (kullanici, islem_turu, aciklama, ip_adresi = "-") => {
  const { error } = await supabase.from("loglar").insert([
    {
      kullanici,
      islem_turu,
      aciklama,
      ip_adresi
    }
  ]);

  if (error) {
    console.error("Loglama hatası:", error.message);
  } else {
    console.log("Log başarıyla kaydedildi.");
  }
};