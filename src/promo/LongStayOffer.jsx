// src/components/LongStayOffer.js
import React from 'react';

const LongStayOffer = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-600">Long Stay Offer</h2>
            <p className="text-gray-600 mt-2 text-center">
                Dapatkan diskon 30% untuk sewa lebih dari 6 bulan! Nikmati kenyamanan dan keamanan tinggal di kost kami.
            </p>
            <div className="mt-4">
                <p className="text-xl font-semibold text-center">Hanya Rp 1.200.000/bulan</p>
                <p className="text-gray-500 text-center">*Termasuk semua fasilitas</p>
            </div>
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
                    Laundry Gratis Sekali Seminggu
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
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                    Hubungi Kami
                </button>
            </div>
        </div>
    );
};

export default LongStayOffer;
