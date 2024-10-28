import React from 'react';

const NewResidentSpecial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-lg shadow-lg p-6 md:p-8 my-8">
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src="/images/kost2.jpg" // Ganti dengan URL gambar promo penghuni baru
          alt="Promo Penghuni Baru"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Promo Details Section */}
      <div className="w-full md:w-2/3 md:ml-8">
        <h2 className="text-3xl font-semibold text-green-800 mb-2">Promo Spesial Penghuni Baru!</h2>
        <p className="text-gray-700 mb-4">
          Selamat datang di komunitas kami! Nikmati <span className="font-bold text-green-700">diskon 30%</span> 
          untuk bulan pertama sewa kost. Jangan lewatkan kesempatan ini untuk memulai pengalaman kost yang nyaman dan terjangkau.
        </p>

        <div className="flex items-center space-x-4">
          <span className="text-lg text-green-700 font-bold">Rp 1.000.000</span>
          <span className="line-through text-gray-500">Rp 1.500.000</span>
        </div>

        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
        >
          Klaim Promo Sekarang
        </button>
      </div>
    </div>
  );
};

export default NewResidentSpecial;
