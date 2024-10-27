import React from 'react';

const recommendations = [
  { id: 1, name: 'Kost A', location: 'Jakarta', price: 'Rp 1.500.000' },
  { id: 2, name: 'Kost B', location: 'Bandung', price: 'Rp 1.200.000' },
  { id: 3, name: 'Kost C', location: 'Surabaya', price: 'Rp 1.300.000' },
];

function NearbyRecommendations() {
  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Rekomendasi Kost Terdekat</h3>
      <ul className="space-y-4">
        {recommendations.map((kost) => (
          <li key={kost.id} className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold">{kost.name}</h4>
            <p className="text-gray-600">{kost.location}</p>
            <p className="text-blue-600 font-bold">{kost.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NearbyRecommendations;