import React, {  useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { getKost } from '../services/API';

const Booking = () => {
  const [date, setDate] = useState([]);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState("Rp.1.000.000"); 
  useEffect(()=>{
    fetchKosts();
  },[]);
  
  const fetchKosts = () => {
    getKost((response) => {
        console.log(response); 
        if (response.success && Array.isArray(response.data)) {
            setProducts(response.data); 
        } else {
            console.error("Data tidak valid", response);
        }
    });
};
// Contoh default biaya

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      
      {/* Bagian Kiri */}
      <div className="flex-1 mr-8">
        {/* Foto Kost */}
        <div className="bg-gray-300 h-64 w-full mb-4 flex items-center justify-center text-gray-700 text-lg">
          foto kost
        </div>

        {/* Detail Kost */}
        {products.length > 0 && (
                <div className="bg-white p-4 rounded shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2">{products[0].jenis_kost}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{products[0].nama_kost}</h2>
                <p className="text-gray-600 font-semibold">Alamat:</p>
                <p className="mb-4">{products[0].alamat}</p>
                <hr className="my-4 border-gray-300" />
      
                <p className="text-gray-600 font-semibold">Dikelola Oleh:</p>
                <p className="mb-4">{products[0].username}</p>
                <hr className="my-4 border-gray-300" />
      
                <p className="text-gray-600 font-semibold">Fasilitas:</p>
                <p className="mb-4">{products[0].fasilitas}</p>
                <hr className="my-4 border-gray-300" />
      
                <p className="text-gray-600 font-semibold">Komentar:</p>
                <p className="border-l-4 border-gray-300 pl-4 italic">
                {products[0].komentar}
                </p>
              </div>
            )}
        
      </div>

      {/* Bagian Order yang Tetap di Kanan */}
      <div className="w-78 p-4 sticky top-4 h-fit">
        <div className="bg-white p-2 rounded shadow-md">
          <div className="text-gray-800 text-xl font-semibold mb-2">{cost}/Perbulan</div>
          <div className="flex items-center mb-4">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-1 w-7/12"
            />
            <select
              className="border border-gray-300 rounded-md p-2 ml-2"
              onChange={(e) => setCost(e.target.value === "Pertahun" ? "Rp.12.000.000" : "Rp.1.000.000")}
            >
              <option value="Perbulan">Perbulan</option>
              <option value="Pertahun">Pertahun</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-md">
            Tanya Pemilik
          </button>
          <Link to={{ pathname: "/Diproses", state: { date, cost } }}>
            <button className="bg-green-500 text-white w-full py-2 mt-2 rounded-md">
              Order Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
