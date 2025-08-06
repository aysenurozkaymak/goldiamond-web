import React from 'react';

function FilterSidebar({ filtre, setFiltre }) {
  return (
    <div className="p-4 border-r w-60">
      <h3 className="font-bold text-lg mb-2">Filtreleme</h3>

      <label className="block mb-1">Metal Türü:</label>
      <select
        value={filtre.metal_turu}
        onChange={(e) => setFiltre({ ...filtre, metal_turu: e.target.value })}
        className="mb-4 w-full border rounded p-1"
      >
        <option value="">Tümü</option>
        <option value="altın">Altın</option>
        <option value="gümüş">Gümüş</option>
      </select>

      <label className="block mb-1">Max Fiyat:</label>
      <input
        type="number"
        value={filtre.max_fiyat}
        onChange={(e) => setFiltre({ ...filtre, max_fiyat: e.target.value })}
        className="w-full border rounded p-1"
      />
    </div>
  );
}

export default FilterSidebar;
