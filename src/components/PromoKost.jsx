import React from 'react';
import { Link } from 'react-router-dom';

const promos = [
    { 
        id: 'monthly-discount', 
        title: 'Diskon Bulanan', 
        description: 'Nikmati potongan harga khusus untuk sewa bulanan!', 
        image: '/images/kost1.jpg',  // Path gambar kost
        location: 'Jakarta Selatan', 
        path: '/MonthlyDiscount' 
    },
    { 
        id: 'new-tenant-special', 
        title: 'Spesial Penghuni Baru', 
        description: 'Promo istimewa bagi penyewa baru di kost pilihan.', 
        image: '/images/kost2.jpg',  // Path gambar kost
        location: 'Bandung', 
        path: '/NewResidentSpecial' 
    },
    { 
        id: 'student-offer', 
        title: 'Promo Mahasiswa', 
        description: 'Harga khusus untuk mahasiswa di kost strategis.', 
        image: '/images/kost3.jpg',  // Path gambar kost
        location: 'Bali', 
        path: '/PromoMahasiswa' 
    },
    { 
        id: 'long-stay-offer', 
        title: 'Paket Sewa Tahunan', 
        description: 'Hemat dengan paket sewa tahunan yang lebih murah.', 
        image: '/images/kost4.jpg',  // Path gambar kost
        location: 'Surabaya', 
        path: '/LongStayOffer' 
    },
    { 
        id: 'referral-bonus', 
        title: 'Bonus Referral', 
        description: 'Ajak teman dan dapatkan cashback untuk sewa berikutnya.', 
        image: '/images/kost5.jpg',  // Path gambar kost
        location: 'Malang', 
        path: '/ReferralBonus' 
    },
];

function PromoKost() {
    return (
        <section id="promo-kost" className="py-20 bg-gray-50">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Promo Kost</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
                {promos.map((promo) => (
                    <Link
                        key={promo.id}
                        to={promo.path}
                        className="p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-300"
                    >
                        <img 
                            src={promo.image} 
                            alt={promo.title} 
                            className="w-full h-40 object-cover rounded-t-lg mb-4" 
                        />
                        <div className="p-4">
                            <h4 className="text-2xl font-semibold text-blue-600 mb-2">{promo.title}</h4>
                            <p className="text-gray-500 mb-2">{promo.location}</p>
                            <p className="text-gray-700 mb-4">{promo.description}</p>
                            <span className="text-blue-500 font-semibold">Lihat Promo</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default PromoKost;
