import React, { useEffect, useState } from 'react';
import { getKosts } from '../services/API';
import { useNavigate } from 'react-router-dom';
import FeatureFilter from '../components/FeatureFilter';

function Search() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    facilities: {
      wifi: false,
      ac: false,
      kitchen: false,
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchKosts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchKosts = () => {
    getKosts((response) => {
      if (response.success && Array.isArray(response.data)) {
        setProducts(response.data);
        setFilteredProducts(response.data);
      } else {
        console.error("Data tidak valid", response);
      }
    });
  };

  const applyFilters = () => {
    const { location, priceRange, facilities } = filters;

    const filtered = products.filter((product) => {
      const matchesLocation = location
        ? product.alamat.toLowerCase().includes(location.toLowerCase())
        : true;

      const matchesPriceRange =
        (priceRange === 'low' && product.harga < 1000000) ||
        (priceRange === 'medium' && product.harga >= 1000000 && product.harga <= 2000000) ||
        (priceRange === 'high' && product.harga > 2000000) ||
        priceRange === '';

      const matchesFacilities =
        (!facilities.wifi || product.fasilitas.toLowerCase().includes('wifi')) &&
        (!facilities.ac || product.fasilitas.toLowerCase().includes('ac')) &&
        (!facilities.kitchen || product.fasilitas.toLowerCase().includes('dapur'));

      return matchesLocation && matchesPriceRange && matchesFacilities;
    });

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleBooking = (product) => {
    navigate('/Booking', { state: { product } });
  };

  return (
    <div className="bg-white p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md">
      <FeatureFilter onFilterChange={handleFilterChange} />
      {filteredProducts.length > 0 && filteredProducts.map((product, index) => (
        <div
          key={index}
          onClick={() => handleBooking(product)}
          className="flex justify-between items-start bg-white border-2 border-blue-600 p-4 mb-4 rounded-lg shadow cursor-pointer"
        >
          <div className="flex items-start">
            <div>
              <h2 className="text-lg font-semibold text-blue-600">{product.nama_kost}</h2>
              <span className="text-sm text-blue-600 font-semibold inline-block px-2 py-1 rounded mb-1 border-2 border-blue-600">
                {product.jenis_kost}
              </span>
              <p className="text-gray-700">Harga: {product.harga}</p>
              <p className="text-gray-700">Alamat: {product.alamat}</p>
              <p className="text-gray-700">Fasilitas: {product.fasilitas}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
