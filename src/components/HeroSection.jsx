import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/Search'); // Pindah ke halaman /search saat tombol diklik
  };

  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Cari dan Sewa Kost Impianmu</h2>
      <p className="mb-6 text-gray-700">
        Temukan tempat tinggal sementara atau jangka panjang dengan mudah dan cepat.
      </p>
      <button
        onClick={handleSearchClick}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Mulai Pencarian
      </button>
    </section>
  );
};

export default HeroSection;