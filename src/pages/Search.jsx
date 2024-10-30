import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SearchBar from '../components/SearchBar';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterData, setFilterData] = useState({
    price: '',
    facilities: [],
    type: '', 
  });
  
  const [allResults] = useState([
    { id: 1, name: 'Kost A', location: 'Jakarta', address: 'Jl. Sudirman No.1', price: 'low', facilities: ['wifi', 'ac'], type: 'putri' },
    { id: 2, name: 'Kost B', location: 'Bandung', address: 'Jl. Asia Afrika No.5', price: 'medium', facilities: ['wifi', 'kitchen'], type: 'putra' },
    { id: 3, name: 'Kost C', location: 'Surabaya', address: 'Jl. Pemuda No.3', price: 'high', facilities: ['ac', 'kitchen'], type: 'putri' },
  ]);
  
  const [filteredResults, setFilteredResults] = useState(allResults);
  const [selectedKost, setSelectedKost] = useState(null); 

  const navigate = useNavigate(); 

  const handleSearch = () => {
    const combinedFilters = { ...filterData, searchQuery };
    applyFilters(combinedFilters);
  };

  const handleFilterChange = (filterType, value) => {
    setFilterData((prevData) => ({
      ...prevData,
      [filterType]: value,
    }));
  };

  const applyFilters = (filters) => {
    const filtered = allResults.filter((kost) => {
      const matchesPrice = filters.price ? kost.price === filters.price : true;
      const matchesType = filters.type ? kost.type === filters.type : true;
      const matchesFacilities = filters.facilities.length > 0
        ? filters.facilities.every((facility) => kost.facilities.includes(facility))
        : true;
      const matchesSearchQuery = searchQuery ? kost.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesPrice && matchesType && matchesFacilities && matchesSearchQuery;
    });
    setFilteredResults(filtered);
  };

  const handleSelectKost = (kost) => {
    setSelectedKost(kost);
  };

  const handleBooking = () => {
    navigate('/Payment', { state: { kost: selectedKost } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8">Pencarian Kost</h1>
      <SearchBar onSearch={(query) => {
        setSearchQuery(query);
        handleSearch(); // Call handleSearch when the search query is updated
      }} />

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

        {/* Filter Jenis Kost */}
        <div className="max-w-md w-full">
          <label className="block text-gray-700 font-semibold mb-2">Filter Jenis Kost</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Semua Jenis</option>
            <option value="putra">Kost Putra</option>
            <option value="putri">Kost Putri</option>
          </select>
        </div>

        {/* Tombol Cari */}
        {/* <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded"
          onClick={handleSearch} // Call the search function here
        >
          Cari
        </button> */}
      </div>

      {/* Hasil Pencarian */}
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Hasil Pencarian</h2>
        <ul className="space-y-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <li
                key={result.id}
                className={`p-4 bg-white border rounded-lg shadow-sm ${selectedKost?.id === result.id ? 'border-blue-500' : ''}`}
                onClick={() => handleSelectKost(result)}
              >
                <h3 className="text-xl font-bold">{result.name}</h3>
                <p className="text-gray-600">Lokasi: {result.location}</p>
                <p className="text-gray-600">Alamat: {result.address}</p>
                <p className="text-blue-600 font-semibold">
                  Harga: {result.price === 'low' ? 'Di bawah Rp 1.000.000' : result.price === 'medium' ? 'Rp 1.000.000 - Rp 2.000.000' : 'Di atas Rp 2.000.000'}
                </p>
                <p className="text-gray-700">Fasilitas: {result.facilities.join(', ')}</p>
                <p className="text-purple-600">Jenis: {result.type === 'putra' ? 'Kost Putra' : 'Kost Putri'}</p>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada hasil yang cocok dengan filter Anda.</p>
          )}
        </ul>

        {/* Tombol Booking */}
        {selectedKost && (
          <div className="text-center mt-8">
            <button
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded"
              onClick={handleBooking}
            >
              Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
