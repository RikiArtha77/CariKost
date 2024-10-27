import React, { useState } from 'react';

function FeatureFilter({ onFilterChange }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [facilities, setFacilities] = useState({
    wifi: false,
    ac: false,
    kitchen: false,
  });

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ location: e.target.value, priceRange, facilities });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    onFilterChange({ location, priceRange: e.target.value, facilities });
  };

  const handleFacilityChange = (e) => {
    const { name, checked } = e.target;
    setFacilities((prevFacilities) => ({
      ...prevFacilities,
      [name]: checked,
    }));
    onFilterChange({ location, priceRange, facilities: { ...facilities, [name]: checked } });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto mb-8">
      <h3 className="text-xl font-bold mb-4">Filter Pencarian</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Lokasi</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          placeholder="Masukkan lokasi..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rentang Harga</label>
        <select
          value={priceRange}
          onChange={handlePriceChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Pilih rentang harga</option>
          <option value="low">Di bawah Rp 1.000.000</option>
          <option value="medium">Rp 1.000.000 - Rp 2.000.000</option>
          <option value="high">Di atas Rp 2.000.000</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fasilitas</label>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="wifi"
            checked={facilities.wifi}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          <label>WiFi</label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="ac"
            checked={facilities.ac}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          <label>AC</label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="kitchen"
            checked={facilities.kitchen}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          <label>Dapur</label>
        </div>
      </div>
    </div>
  );
}

export default FeatureFilter;