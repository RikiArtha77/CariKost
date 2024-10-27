import React from 'react'
import { useParams } from 'react-router-dom';

const featureDetails = {
    search: {
      title: 'Pencarian Mudah',
      description: 'Temukan kost dengan mudah menggunakan filter yang lengkap dan pencarian cepat.',
    },
    affordable: {
      title: 'Harga Terjangkau',
      description: 'Pilih kost sesuai dengan budget Anda dengan berbagai pilihan harga.',
    },
    location: {
      title: 'Lokasi Strategis',
      description: 'Banyak pilihan kost dekat kampus dan perkantoran untuk kenyamanan Anda.',
    },
  };

const FeatureDetail = () => {
    const {featureId} = useParams();
    const feature = featureDetails[featureId];

    if(!feature) return <p>Fitur tidak ditemukan.</p>

  return (
    <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
        <p className="text-gray-700">{feature.description}</p>
    </div>
  )
}

export default FeatureDetail