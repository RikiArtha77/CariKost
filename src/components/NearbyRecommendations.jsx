import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const recommendations = [
  {
    id: 1,
    name: 'Kost A',
    location: 'Jakarta',
    price: 'Rp 1.500.000',
    image: '/images/kost4.jpg',
    description: 'Kost A terletak di pusat kota Jakarta, dengan akses mudah ke transportasi umum.',
    address: 'Jl. Sudirman No. 45, Jakarta'
  },
  {
    id: 2,
    name: 'Kost B',
    location: 'Bandung',
    price: 'Rp 1.200.000',
    image: '/images/kost5.jpg',
    description: 'Kost B menawarkan lingkungan yang tenang dan nyaman di Bandung.',
    address: 'Jl. Asia Afrika No. 123, Bandung'
  },
  {
    id: 3,
    name: 'Kost C',
    location: 'Surabaya',
    price: 'Rp 1.300.000',
    image: '/images/kost1.jpg',
    description: 'Kost C dekat dengan pusat perbelanjaan di Surabaya, cocok untuk mahasiswa.',
    address: 'Jl. Pemuda No. 88, Surabaya'
  },
];

function NearbyRecommendations() {
  const [selectedKost, setSelectedKost] = useState(null);
  const navigate = useNavigate();

  const handleSelectKost = (kost) => {
    setSelectedKost(kost);
  };

  const handlePayment = () => {
    navigate('/Booking', { state: { kost: selectedKost } }); // Mengirimkan data kost terpilih
  };

  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Rekomendasi Kost Terdekat</h3>
      {!selectedKost ? (
        <ul className="space-y-4">
          {recommendations.map((kost) => (
            <li key={kost.id} className="p-4 border rounded-lg shadow-sm flex items-center cursor-pointer" onClick={() => handleSelectKost(kost)}>
              <img src={kost.image} alt={kost.name} className="w-24 h-24 rounded-lg mr-4 object-cover" />
              <div>
                <h4 className="text-xl font-semibold">{kost.name}</h4>
                <p className="text-gray-600">{kost.location}</p>
                <p className="text-blue-600 font-bold">{kost.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 border rounded-lg shadow-sm flex flex-col items-center">
          <img src={selectedKost.image} alt={selectedKost.name} className="w-48 h-48 rounded-lg mb-4 object-cover" />
          <h4 className="text-xl font-semibold">{selectedKost.name}</h4>
          <p className="text-gray-600">{selectedKost.location}</p>
          <p className="text-blue-600 font-bold">{selectedKost.price}</p>
          <p className="text-gray-700 mt-2">{selectedKost.description}</p>
          <p className="text-gray-700 mt-2">{selectedKost.address}</p>
          <button
            onClick={handlePayment}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Bayar Sekarang
          </button>
          <button
            onClick={() => setSelectedKost(null)}
            className="mt-2 text-gray-600 hover:underline"
          >
            Kembali ke daftar kost
          </button>
        </div>
      )}
    </section>
  );
}

export default NearbyRecommendations;