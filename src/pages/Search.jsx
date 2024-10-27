import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FeatureFilter from '../components/FeatureFilter';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterData, setFilterData] = useState({
    price: '',
    quality: '',
    facilities: [],
  });
  const [results, setResults] = useState([
    { id: 1, name: 'Kost A', location: 'Jakarta', price: 'low', quality: 'high', facilities: ['wifi', 'ac'] },
    { id: 2, name: 'Kost B', location: 'Bandung', price: 'medium', quality: 'medium', facilities: ['wifi', 'kitchen'] },
    { id: 3, name: 'Kost C', location: 'Surabaya', price: 'high', quality: 'high', facilities: ['ac', 'kitchen'] },
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Logika pencarian dapat ditambahkan di sini
  };

  const handleFilterChange = (filterType, value) => {
    setFilterData((prevData) => ({
      ...prevData,
      [filterType]: value,
    }));
    applyFilters({ ...filterData, [filterType]: value });
  };

  const applyFilters = (filters) => {
    // Filter data berdasarkan kondisi harga, kualitas, dan fasilitas
    const filteredResults = results.filter((kost) => {
      const matchesPrice = filters.price ? kost.price === filters.price : true;
      const matchesQuality = filters.quality ? kost.quality === filters.quality : true;
      const matchesFacilities = filters.facilities.length > 0
        ? filters.facilities.every((facility) => kost.facilities.includes(facility))
        : true;
      return matchesPrice && matchesQuality && matchesFacilities;
    });
    setResults(filteredResults);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8">Pencarian Kost</h1>
      <SearchBar onSearch={handleSearch} />

      {/* Filter Pilihan */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="max-w-md w-full">
          <label className="block text-gray-700 font-semibold mb-2">Filter Harga</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleFilterChange('price', e.target.value)}
          >
            <option value="">Semua Harga</option>
            <option value="low">Di bawah Rp 1.000.000</option>
            <option value="medium">Rp 1.000.000 - Rp 2.000.000</option>
            <option value="high">Di atas Rp 2.000.000</option>
          </select>
        </div>

        <div className="max-w-md w-full">
          <label className="block text-gray-700 font-semibold mb-2">Filter Kualitas</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleFilterChange('quality', e.target.value)}
          >
            <option value="">Semua Kualitas</option>
            <option value="low">Kualitas Rendah</option>
            <option value="medium">Kualitas Menengah</option>
            <option value="high">Kualitas Tinggi</option>
          </select>
        </div>

        <div className="max-w-md w-full">
          <label className="block text-gray-700 font-semibold mb-2">Filter Fasilitas</label>
          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                value="wifi"
                onChange={(e) =>
                  handleFilterChange('facilities', e.target.checked ? [...filterData.facilities, 'wifi'] : filterData.facilities.filter((f) => f !== 'wifi'))
                }
              />
              <span className="ml-2">WiFi</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="ac"
                onChange={(e) =>
                  handleFilterChange('facilities', e.target.checked ? [...filterData.facilities, 'ac'] : filterData.facilities.filter((f) => f !== 'ac'))
                }
              />
              <span className="ml-2">AC</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="kitchen"
                onChange={(e) =>
                  handleFilterChange('facilities', e.target.checked ? [...filterData.facilities, 'kitchen'] : filterData.facilities.filter((f) => f !== 'kitchen'))
                }
              />
              <span className="ml-2">Dapur</span>
            </label>
          </div>
        </div>
      </div>

      {/* Hasil Pencarian */}
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Hasil Pencarian</h2>
        <ul className="space-y-4">
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id} className="p-4 bg-white border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">{result.name}</h3>
                <p className="text-gray-600">{result.location}</p>
                <p className="text-blue-600 font-semibold">
                  Harga: {result.price === 'low' ? 'Di bawah Rp 1.000.000' : result.price === 'medium' ? 'Rp 1.000.000 - Rp 2.000.000' : 'Di atas Rp 2.000.000'}
                </p>
                <p className="text-green-600 font-semibold">Kualitas: {result.quality === 'low' ? 'Rendah' : result.quality === 'medium' ? 'Menengah' : 'Tinggi'}</p>
                <p className="text-gray-700">Fasilitas: {result.facilities.join(', ')}</p>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada hasil yang cocok dengan filter Anda.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Search;