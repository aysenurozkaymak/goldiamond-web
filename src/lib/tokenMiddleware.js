import supabase from './supabase';

export const logla = async (kullanici_adi, olay, detay) => {
  await supabase.from('loglar').insert([
    {
      kullanici_adi,
      olay, // örn: "sepete_ekle"
      detay, // örn: "Altın Alyans A - 2500 TL"
      tarih: new Date(),
    },
  ]);
};
