import React, { useState } from 'react';

const UserSurvey = () => {
  const [formData, setFormData] = useState({
    rating: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    console.log('Data yang dikirim:', formData);
    // Reset form
    setFormData({
      rating: '',
      feedback: '',
    });
    alert('Terima kasih atas umpan balik Anda!');
  };

  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Survei Pengguna</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          >
            <option value="">Pilih rating</option>
            <option value="1">1 - Sangat Buruk</option>
            <option value="2">2 - Buruk</option>
            <option value="3">3 - Cukup</option>
            <option value="4">4 - Baik</option>
            <option value="5">5 - Sangat Baik</option>
          </select>
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Umpan Balik
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            placeholder="Tulis umpan balik Anda"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Kirim Umpan Balik
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserSurvey;
