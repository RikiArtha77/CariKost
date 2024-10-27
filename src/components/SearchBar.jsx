import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-lg mx-auto mt-8">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="flex-grow p-2 rounded-l-full focus:outline-none"
        placeholder="Cari kost terdekat..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-full"
      >
        Cari
      </button>
    </div>
  );
}

export default SearchBar;