# 💎 GolDiamond - Kuyumculuk Web Sitesi

**GolDiamond**, modern kuyumculuk ürünlerini sergileyen ve kullanıcı girişi/çıkışı destekleyen bir React tabanlı e-ticaret web sitesidir.  
Kullanıcılar ürünleri görüntüleyebilir, kategori bazlı filtreleme yapabilir ve güvenli bir şekilde giriş/kayıt işlemlerini gerçekleştirebilir.

## 🚀 Özellikler

- 🔐 **Kullanıcı Giriş & Kayıt Sistemi**
  - Supabase destekli kullanıcı veritabanı
  - `localStorage` tabanlı oturum yönetimi

- 🛍️ **Ürün Kategorileri**
  - Alyanslar, bileklikler, kolyeler, küpeler gibi gruplandırılmış sayfalar
  - Her kategori ayrı bir sayfa olarak yapılandırılmıştır

- 🌐 **Ziyaretçi Loglama**
  - Harici IP API (`https://api.ipify.org`) ile ziyaretçi IP'si alınır
  - Tarayıcı bilgisi (`navigator.userAgent`) ile birlikte `loglar` tablosuna kayıt edilir

- 🧠 **Token Middleware Benzeri Yapı**
  - Kullanıcının sayfa hareketleri ve giriş bilgileri Supabase veritabanına loglanır
  - Her işlemde `kullanici_adi`, IP, ajan ve sayfa bilgisi tutulur

- 📱 **Responsive Tasarım**
  - Mobil ve masaüstü uyumlu arayüz
  - FontAwesome ikon desteği

- 💬 **Dinamik Navbar**
  - Kullanıcı giriş durumuna göre `Giriş`, `Kayıt`, `Çıkış` seçenekleri

## 🗃️ Kullanılan Teknolojiler

- **Frontend:** React
- **Routing:** React Router v6+
- **Veritabanı:** Supabase (PostgreSQL)
- **Stil:** CSS (özelleştirilmiş sade stil), FontAwesome
- **API:** 
  - IP alma için: `https://api.ipify.org`
  - Kendi log sistemi için Supabase API

## ⚙️ Kurulum

```bash
git clone https://github.com/aysenurozkaymak/goldiamond-web.git
cd goldiamond-web
npm install
npm start
