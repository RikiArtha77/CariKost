// src/components/ReferralBonus.js
import React from 'react';

const ReferralBonus = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center text-green-600">Referral Bonus</h2>
            <p className="text-gray-600 mt-2 text-center">
                Dapatkan bonus Rp 300.000 setiap kali teman yang Anda referensikan menyewa kost kami!
            </p>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Syarat dan Ketentuan:</h3>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Bonus diberikan setelah teman Anda menyewa minimal 1 bulan.</li>
                    <li>Referral tidak berlaku untuk anggota keluarga.</li>
                    <li>Bonus akan dibayarkan dalam waktu 7 hari setelah pembayaran teman Anda.</li>
                </ul>
            </div>
            <div className="mt-4 text-center">
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
                    Ajak Teman Sekarang
                </button>
            </div>
        </div>
    );
};

export default ReferralBonus;
