import './ProductCard.css';

function ProductCard({ urun, sepeteEkle }) {
  return (
    <div className="product-card">
      <img src={urun.resim_url} alt={urun.isim} className="w-full h-40 object-contain" />
      <h3 className="text-lg font-bold">{urun.isim}</h3>
      <p className="text-sm text-gray-600">{urun.kategori} - {urun.metal_turu}</p>
      <p className="text-md font-semibold">{urun.fiyat} TL</p>
      <button
        onClick={() => sepeteEkle(urun)}
        className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductCard;
