import React, { useState, useEffect } from 'react';
import { addKosts, updateKost } from '../services/API';
import { useNavigate, useLocation } from 'react-router-dom';

const Tambah = ({ initialData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);

  const [formData, setFormData] = useState({
    nama_kost: '',
    harga: '',
    fasilitas: '',
    alamat: '',
    jenis_kost: '',
    no_rekening: '',
    no_wa: '',
    username: '',
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
    console.log(isEditMode ? 'Editing Product:' : 'Adding Product:', formData);

    const data = new FormData();
    data.append('nama_kost', formData.nama_kost);
    data.append('harga', formData.harga);
    data.append('fasilitas', formData.fasilitas);
    data.append('alamat', formData.alamat);
    data.append('jenis_kost', formData.jenis_kost);
    data.append('no_rekening', formData.no_rekening);
    data.append('no_wa', formData.no_wa);
    data.append('username', formData.username);

    try {
      if (isEditMode) {
        // Jika mode edit, gunakan fungsi update
        await updateKost(formData.id, formData);
        console.log('Data berhasil diperbarui');
      } else {
        // Jika bukan mode edit, gunakan fungsi tambah
        await addKosts(data);
        console.log('Data berhasil ditambahkan');
      }
      navigate('/Kos'); // Kembali ke halaman daftar setelah submit
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleJenisKosClick = (jenis) => {
    setFormData((prevData) => ({
      ...prevData,
      jenis_kost: jenis,
    }));
  };

  return (
    <div className="bg-white-300 p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md">
      <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Kos' : 'Tambah Kos'}</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-2 font-semibold">Nama Kos</label>
        <input
          type="text"
          name="nama_kost"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan nama kos"
          value={formData.nama_kost}
          onChange={handleChange}
        />
        <label className="mb-2 font-semibold">Pengelola</label>
        <input
          type="text"
          name="username"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan fasilitas kos"
          value={formData.username}
          onChange={handleChange}
        />

        <label className="mb-2 font-semibold">Jenis Kos</label>
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            onClick={() => handleJenisKosClick('Campur')}
            className={`py-2 px-4 rounded-lg border-2 font-bold ${formData.jenis_kost === 'Campur'
                ? 'bg-blue-600 text-white'
                : 'text-blue-600'
              }`}
          >
            Campur
          </button>
          <button
            type="button"
            onClick={() => handleJenisKosClick('Putri')}
            className={`py-2 px-4 rounded-lg border-2 font-bold ${formData.jenis_kost === 'Putri'
                ? 'bg-blue-600 text-white'
                : 'text-blue-600'
              }`}
          >
            Putri
          </button>
        </div>

        <label className="mb-2 font-semibold">Alamat</label>
        <input
          type="text"
          name="alamat"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan alamat kos"
          value={formData.alamat}
          onChange={handleChange}
        />

        <label className="mb-2 font-semibold">Harga</label>
        <input
          type="text"
          name="harga"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan harga kos"
          value={formData.harga}
          onChange={handleChange}
        />

        <label className="mb-2 font-semibold">Fasilitas</label>
        <input
          type="text"
          name="fasilitas"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan fasilitas kos"
          value={formData.fasilitas}
          onChange={handleChange}
        />
        <label className="mb-2 font-semibold">No Rekening</label>
        <input
          type="text"
          name="no_rekening"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan nomor rekening"
          value={formData.no_rekening}
          onChange={handleChange}
        />
        <label className="mb-2 font-semibold">No WA</label>
        <input
          type="text"
          name="no_wa"
          className="p-2 mb-4 border-2 border-blue-600 rounded"
          placeholder="Masukkan nomor WhatsApp"
          value={formData.no_wa}
          onChange={handleChange}
        />

        <button type="submit" className="text-blue-600 font-bold bg-white-700 py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition">
          {isEditMode ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Tambah;