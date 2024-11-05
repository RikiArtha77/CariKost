import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Duit = () => {
  const location = useLocation();
  const { product, date = "Tanggal belum dipilih", cost = "Harga belum tersedia" } = location.state || {};

  if (!product) {
    return <div>Data tidak ditemukan</div>;
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (method) => {
    setActiveButton(method);
    // Logika tambahan jika diperlukan ketika metode pembayaran dipilih
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Teks berhasil disalin ke clipboard!');
      })
      .catch((err) => {
        console.error('Gagal menyalin teks: ', err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Bayar</h1>
        
        <div className="mb-4">
          <p className="text-lg">Harga sewa yang harus dibayar:</p>
          <div className="text-xl font-bold border p-2 rounded">Rp :{cost}</div> {/* Menampilkan harga sewa */}
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-semibold">Metode Pembayaran:</p>
          <div className="flex space-x-4 mt-2">
            <button  
              onClick={() => handleButtonClick("cash")} 
              className={`px-4 py-2 rounded ${activeButton === "cash" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              Cash
            </button>
            <button  
              onClick={() => handleButtonClick("transfer")} 
              className={`px-4 py-2 rounded ${activeButton === "transfer" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              Transfer
            </button>
          </div>
          
          <div className="mt-4 p-3 border rounded bg-gray-50">
            <p>No Rek: {product.no_rekening}</p>
            <button
              onClick={() => handleCopy(product.no_rekening)} // Menyalin nomor rekening
              className="text-blue-500 underline mt-2"
            >
              Copy
            </button>
          </div>
           
          <div>
            <p>Kirim bukti Pembayaran sebelum 24 jam</p>
          </div>
           
          <div className="mt-1 p-1.5 border rounded bg-gray-50">
            <p>No Wa: {product.no_wa}</p>
            <button
              onClick={() => handleCopy(product.no_wa)} // Menyalin nomor WhatsApp
              className="text-blue-500 underline mt-2"
            >
              Copy
            </button>
          </div>
        </div>

        <Link to="/">
          <button className="w-full py-2 mt-6 bg-blue-500 text-white rounded">Selesai</button>
        </Link>
      </div>
    </div>
  );
};

export default Duit;