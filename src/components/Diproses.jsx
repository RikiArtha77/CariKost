import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Diproses = () => {
  const [status, setStatus] = useState("");

  const handleAccept = () => setStatus("Diterima");
  const handleReject = () => setStatus("Ditolak");
  const handleCancel = () => setStatus("Dibatalkan");
  const handleEdit = () => alert("Edit Pesanan");

  return (
    <div className="p-5 flex items-center justify-center bg-gray-100">
      <div className="w-11/12 p-4 bg-white shadow-md rounded-lg">
        <div className="bg-blue-600 text-white text-center py-2 rounded-t-md">
          <h2 className="text-lg font-bold">Pesanan</h2>
        </div>
        <div className="flex justify-around py-4 text-gray-700 bg-gray-100">
          <span className="font-semibold border-b-2 border-black">Diproses</span>
          <span><Link to="/Bayar">Bayar </Link></span>
          <span>Riwayat</span>
        </div>
        <div className="border p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold inline-block bg-gray-200 px-2 py-1 rounded mb-1">Putra</span>
              <h3 className="font-bold">Kos daerah banyuning gang pisang no 12</h3>
              <p>Jl. Merpati No. 15, Jakarta Selatan</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <span 
                onClick={() => handleAccept()}
                className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-green-600"
              >
                Diterima
              </span>
              <span 
                onClick={() => handleReject()}
                className="bg-gray-300 text-gray-700 px-4 py-1 rounded cursor-pointer hover:bg-gray-400"
              >
                Ditolak
              </span>
            </div>
            <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
              Batal
            </button>
            <button onClick={handleEdit} className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300">
              Edit
            </button>
          </div>
        </div>
        {status && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-700">
            Status: {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default Diproses;