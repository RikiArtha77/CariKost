import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const kost = location.state?.kost; // Retrieve the kost data from the location state

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Left Section */}
      <div className="flex-1 mr-8">
        {/* Kost Image */}
        <div className="bg-gray-300 h-64 w-full mb-4 flex items-center justify-center text-gray-700 text-lg">
          {kost ? <img src={kost.image} alt={kost.name} className="h-full w-full object-cover rounded" /> : 'Foto Kost'}
        </div>

        {/* Kost Details */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{kost ? kost.name : 'Kos daerah banyuning gang pisang no 12'}</h2>
          <p className="text-gray-600 font-semibold">Alamat:</p>
          <p className="mb-4">{kost ? kost.location : 'Jl. Merpati No. 15, Jakarta Selatan'}</p>
          <hr className="my-4 border-gray-300" />

          <p className="text-gray-600 font-semibold">Dikelola Oleh:</p>
          <p className="mb-4">Rendii</p>
          <hr className="my-4 border-gray-300" />

          <p className="text-gray-600 font-semibold">Fasilitas:</p>
          <p className="mb-4">AC, Wi-Fi, Kamar Mandi Dalam, Lemari, Meja Belajar</p>
          <hr className="my-4 border-gray-300" />

          <p className="text-gray-600 font-semibold">Komentar:</p>
          <p className="border-l-4 border-gray-300 pl-4 italic">
            {kost ? kost.description : "Kost ini sangat nyaman dan bersih, dekat dengan pusat perbelanjaan."}
          </p>
        </div>
      </div>

      {/* Order Section */}
      <div className="w-72 p-4 sticky top-4 h-fit">
        <div className="bg-white p-4 rounded shadow-md">
          <div className="text-gray-800 text-xl font-semibold mb-2">
            {kost ? kost.price : 'Rp.1.000.000/Perbulan'}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 w-6/12"
            />
            <select className="border border-gray-300 rounded-md p-2 ml-2">
              <option>Perbulan</option>
              <option>Pertahun</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-md">
            Tanya Pemilik
          </button>
          <button className="bg-green-500 text-white w-full py-2 mt-2 rounded-md">
            <Link to="/Diproses">Order Sekarang </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
