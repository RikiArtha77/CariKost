import React, {useState,useEffect}from 'react';
import {Link, useLocation,useNavigate} from 'react-router-dom';
import Duit from './Duit';

const Bayar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi navigate
  const { product, date = "Tanggal belum dipilih", cost = "Harga belum tersedia" } = location.state || {};

  if (!product) {
    return <div>Data kost tidak ditemukan</div>;
  }

  console.log("Navigasi ke Bayar dengan data:", { date, cost, product });

  const handleCancel = () => alert("Pesanan Dibatalkan");

  // Mendefinisikan handlePay untuk melakukan navigasi
  const handlePay = () => {
    navigate('/Duit', { state: { product, date, cost } });
  };
  const handleRiwayat = () => {
    navigate('/Riwayat', { state: { product, date, cost } });
  };
  return (
    <div className="w-11/12 p-4 bg-white shadow-md rounded-lg">
      <div className="bg-blue-600 text-white text-center py-2 rounded-t-md">
        <h2 className="text-lg font-bold">Pesanan</h2>
      </div>
      <div className="flex justify-around py-4 text-gray-700 bg-gray-100">
        <span className='font-semibold border-b-2 text-green-500 border-green-500'>Diproses</span>
        <span className='font-semibold border-b-2 text-black border-black'>Bayar</span> 
        <button onClick={handleRiwayat}>
          <span className='font-semibold border-b-2 text-gray-300 border-gray-300'>Riwayat</span>
        </button>
      </div>
      <div className="border p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-semibold inline-block bg-gray-200 px-2 py-1 rounded mb-1">{product.jenis_kost}</span>
            <h3 className="font-bold">{product.nama_kost}</h3>
            <p>{product.alamat}</p>
            <p className="mt-1 text-sm text-gray-600">Tanggal Booking: {date}</p>
            <p className="mt-1 text-sm text-gray-600">Biaya: {cost}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="bg-green-500 text-white px-4 py-1 rounded">
            Diterima
          </button>
          <Link to="/"><button  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
            Batal
          </button></Link>
          <button onClick={handlePay} className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bayar;