// src/components/PromoMahasiswa.js
import React from 'react';

const PromoMahasiswa = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
            <img 
                src="images/kost3.jpg" 
                alt="Kost Mahasiswa" 
                className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Promo Sewa Kost untuk Mahasiswa</h2>
            <p className="text-gray-600 mt-2 text-center">
                Dapatkan diskon 20% untuk penyewa baru! Nikmati kenyamanan tinggal di kost yang dekat dengan kampus.
            </p>
            <ul className="mt-4">
                <li className="flex items-center mt-2">
                    <svg 
                        className="w-5 h-5 text-green-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Akses WiFi Gratis
                </li>
                <li className="flex items-center mt-2">
                    <svg 
                        className="w-5 h-5 text-green-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Lingkungan Aman dan Nyaman
                </li>
                <li className="flex items-center mt-2">
                    <svg 
                        className="w-5 h-5 text-green-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dekat dengan Transportasi Umum
                </li>
            </ul>
            <div className="mt-6 text-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                    Hubungi Kami
                </button>
            </div>
        </div>
    );
};

export default PromoMahasiswa;
