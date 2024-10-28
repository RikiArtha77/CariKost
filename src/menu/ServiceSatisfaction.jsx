// src/components/ServiceSatisfaction.js
import React, { useState } from 'react';

const ServiceSatisfaction = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    console.log('Rating:', rating);
    console.log('Umpan Balik:', feedback);
    alert('Terima kasih atas umpan balik Anda!');
    // Reset form
    setRating(0);
    setFeedback('');
  };

  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Kepuasan Layanan</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h4 className="block text-sm font-medium text-gray-700 mb-2">Rating Layanan</h4>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((rate) => (
              <button
                key={rate}
                type="button"
                className={`w-10 h-10 rounded-full focus:outline-none transition duration-150 ${
                  rating >= rate ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => handleRatingChange(rate)}
              >
                {rate}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Umpan Balik
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
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

export default ServiceSatisfaction;
