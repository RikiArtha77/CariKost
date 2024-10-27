import React from 'react'
import { Link } from 'react-router-dom';

const features = [
    { id: 'easy-search', title: 'Pencarian Mudah', description: 'Temukan kost dengan filter yang lengkap.', path: '/features/easy-search' },
    { id: 'affordable-price', title: 'Harga Terjangkau', description: 'Pilih kost sesuai budget.', path: '/features/affordable-price' },
    { id: 'strategic-location', title: 'Lokasi Strategis', description: 'Kost dekat kampus dan perkantoran.', path: '/features/strategic-location' },
  ];
  
function Features() {
    return(
        <section id="features" className="py-20 bg-white">
            <h3 className="text-3xl font-bold text-center mb-10">Fitur Unggulan</h3>
            <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
                {features.map((feature, index)=> (
                    <Link
                    key={feature.id}
                    to={feature.path}
                    className="p-6 border rounded-lg shadow-lg hover:bg-gray-100"
                  >
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </Link>
                ))}
            </div>
        </section>
    );
}

export default Features