import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateKost } from '../services/API';

const Review = ({ initialData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);

  const [formData, setFormData] = useState({
    komentar: '',
  });

  useEffect(() => {
    // Cek apakah data untuk edit ada di location state atau initialData
    const dataToEdit = location.state?.data || initialData;
    if (dataToEdit) {
      setFormData(dataToEdit);
      setIsEditMode(true);
    }
  }, [location.state, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isEditMode) {
        if (!formData.id) {
            console.error('ID produk tidak ditemukan');
            return; // Mencegah pengiriman jika ID tidak ada
        }
  
        try {
            const response = await updateKost(formData.id, { komentar: formData.komentar });
            console.log('Data berhasil diperbarui', response);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    } else {
        // Tambahkan logika untuk menambahkan review jika bukan mode edit
    }
  
    navigate('/'); // Kembali ke halaman daftar setelah submit
};

  return (
    <div className="w-11/12 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Tulis Review untuk {isEditMode ? formData.nama_kost : "Kost"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Komentar:</label>
          <textarea
            name="komentar"
            value={formData.komentar}
            onChange={handleChange}
            rows={4}
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Tulis komentar Anda di sini..."
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Kirim Review
        </button>
      </form>
    </div>
  );
};

export default Review;