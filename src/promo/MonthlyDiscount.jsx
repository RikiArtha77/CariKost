import React from 'react';

const MonthlyDiscount = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg shadow-lg p-6 md:p-8 my-8">
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src="/images/kost1.jpg" // Ganti URL ini dengan URL gambar kost
          alt="Promo Sewa Kost"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Discount Details Section */}
      <div className="w-full md:w-2/3 md:ml-8">
        <h2 className="text-3xl font-semibold text-blue-800 mb-2">Diskon Bulanan Kost!</h2>
        <p className="text-gray-700 mb-4">
          Dapatkan penawaran spesial hingga <span className="font-bold text-blue-700">50%</span> 
          untuk sewa kost selama bulan ini! Manfaatkan kesempatan untuk tinggal di kost pilihan 
          dengan harga terbaik.
        </p>

        <div className="flex items-center space-x-4">
          <span className="text-lg text-blue-700 font-bold">Rp 1.500.000</span>
          <span className="line-through text-gray-500">Rp 3.000.000</span>
        </div>

        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Dapatkan Diskon
        </button>
      </div>
    </div>
  );
};

export default MonthlyDiscount;
