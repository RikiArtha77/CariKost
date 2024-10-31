import React, {useState,useEffect} from 'react';
import Navbar1 from './Navbar1';
import { useLocation } from 'react-router-dom';
import { getKost } from '../services/API';

const Riwayat = () => {
  const location = useLocation();
  const { date = "Tanggal belum dipilih", cost = "Harga belum tersedia", status = "Status tidak tersedia" } = location.state || {}; // Nilai default jika data tidak ada

  const handleReview = () => alert("Tinggalkan review");

  const [products, setProducts] = useState([]);

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


  return (
    <div className="w-11/12 p-4 bg-white shadow-md rounded-lg">
      <div className="bg-blue-600 text-white text-center py-2 rounded-t-md">
        <h2 className="text-lg font-bold">Pesanan</h2>
      </div>
      <Navbar1 />
      <div className="border p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          {products.length > 0 && (
            <div>
            <span className="text-sm font-semibold inline-block bg-gray-200 px-2 py-1 rounded mb-1">{products[0].jenis_kost}</span>
            <h3 className="font-bold">{products[0].nama_kost}</h3>
            <p>{products[0].alamat}</p>
            <p className="mt-1 text-sm text-gray-600">Tanggal Booking: {date}</p>
            <p className="mt-1 text-sm text-gray-600">Biaya: {cost}</p>
          </div>)}
          
        </div>
        <div className="flex flex-col space-y-2">
          <button className="bg-green-500 text-white px-4 py-1 rounded">
            Selesai
          </button>
          <button onClick={handleReview} className="bg-white text-gray-700 border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;