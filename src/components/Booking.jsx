import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate(); // Pastikan ini ditambahkan

  if (!product) {
    return <div>Data kost tidak ditemukan</div>;
  }

  const [date, setDate] = useState("");
  const [cost, setCost] = useState(product.harga); // Harga default adalah per bulan
  const [duration, setDuration] = useState("Perbulan"); // Default ke per bulan

  const handleDurationChange = (e) => {
    const selectedOption = e.target.value;
    setDuration(selectedOption);
    const monthlyPrice = product.harga;
    setCost(selectedOption === "Pertahun" ? monthlyPrice * 12 : monthlyPrice);
  };

  const handleBooking = () => {
    if (!date) {
      alert("Silakan pilih tanggal booking.");
      return;
    }
    
    console.log("Navigasi ke Diproses dengan data:", { date, cost, product });
    navigate('/Diproses', { state: { product, date, cost } });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Bagian Kiri */}
      <div className="flex-1 mr-8">
        <div className="bg-gray-300 h-64 w-full mb-4 flex items-center justify-center text-gray-700 text-lg">
          foto kost
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center mb-2">
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2">
              {product.jenis_kost}
            </span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">{product.nama_kost}</h2>
          <p className="text-gray-600 font-semibold">Alamat:</p>
          <p className="mb-4">{product.alamat}</p>
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-600 font-semibold">Dikelola Oleh:</p>
          <p className="mb-4">{product.username}</p>
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-600 font-semibold">Fasilitas:</p>
          <p className="mb-4">{product.fasilitas}</p>
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-600 font-semibold">Komentar:</p>
          <p className="border-l-4 border-gray-300 pl-4 italic">
            {product.komentar}
          </p>
        </div>
      </div>

      {/* Bagian Order yang Tetap di Kanan */}
      <div className="w-78 p-4 sticky top-4 h-fit">
        <div className="bg-white p-2 rounded shadow-md">
          <div className="text-gray-800 text-xl font-semibold mb-2">
            Rp.{cost}/{duration === "Perbulan" ? "Perbulan" : "Pertahun"}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-1 w-7/12"
            />
            <select
              className="border border-gray-300 rounded-md p-2 ml-2"
              onChange={handleDurationChange}
              value={duration}
            >
              <option value="Perbulan">Perbulan</option>
              <option value="Pertahun">Pertahun</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-md">
            Tanya Pemilik
          </button>
          <button onClick={handleBooking} className="bg-green-500 text-white w-full py-2 mt-2 rounded-md">
            Order Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;