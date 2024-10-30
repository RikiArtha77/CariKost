import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.example.com/kosts'; // Replace with your actual API endpoint

function KostOwnerDashboard() {
  const [kosts, setKosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    location: '',
    price: '',
    facilities: '',
  });

  // Fetch kost listings from the API
  useEffect(() => {
    const fetchKosts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setKosts(response.data);
      } catch (error) {
        console.error('Error fetching kosts:', error);
      }
    };
    
    fetchKosts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update kost listing
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const facilitiesArray = formData.facilities.split(',').map((item) => item.trim());
      const kostData = { ...formData, facilities: facilitiesArray };

      if (formData.id) {
        // Update existing kost
        await axios.put(`${apiUrl}/${formData.id}`, kostData);
        setKosts((prev) => prev.map((kost) => (kost.id === formData.id ? { ...kost, ...kostData } : kost)));
      } else {
        // Add new kost
        const response = await axios.post(apiUrl, kostData);
        setKosts((prev) => [...prev, response.data]); // Assuming response.data includes the new kost with its ID
      }
      resetForm();
    } catch (error) {
      console.error('Error saving kost:', error);
    }
  };

  // Delete a kost listing
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setKosts((prev) => prev.filter((kost) => kost.id !== id));
    } catch (error) {
      console.error('Error deleting kost:', error);
    }
  };

  // Edit a kost listing
  const handleEdit = (kost) => {
    setFormData({
      ...kost,
      facilities: kost.facilities.join(', '), // Join facilities for easy editing
    });
    setShowForm(true);
  };

  // Reset form data
  const resetForm = () => {
    setFormData({ id: null, name: '', location: '', price: '', facilities: '' });
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Kost Owner Dashboard</h1>

      {/* Add New Listing Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Kost'}
      </button>

      {/* Kost Form */}
      {showForm && (
        <form
          onSubmit={handleFormSubmit}
          className="p-4 mb-4 bg-white rounded shadow-md space-y-4"
        >
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Facilities (comma-separated)</label>
            <input
              type="text"
              name="facilities"
              value={formData.facilities}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {formData.id ? 'Update Kost' : 'Add Kost'}
          </button>
        </form>
      )}

      {/* Kost Listings */}
      <div className="space-y-4">
        {kosts.map((kost) => (
          <div
            key={kost.id}
            className="p-4 bg-white rounded shadow flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{kost.name}</h2>
              <p className="text-gray-600">Location: {kost.location}</p>
              <p className="text-gray-800 font-semibold">Price: {kost.price}</p>
              <p className="text-gray-600">Facilities: {kost.facilities.join(', ')}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(kost)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(kost.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KostOwnerDashboard;