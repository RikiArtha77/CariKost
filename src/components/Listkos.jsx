import React, { useState, useEffect } from 'react';
import { FaHome, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Listkos = () => {
    // State untuk menyimpan data kos dari API
    const [listKos, setListKos] = useState([]);

    // Mengambil data kos dari API saat komponen pertama kali dimuat
    useEffect(() => {
        const fetchDataKos = async () => {
            try {
                const response = await fetch('/api/kos'); // Ganti dengan endpoint API yang sesuai
                if (response.ok) {
                    const data = await response.json();
                    setListKos(data); // Simpan data dari API ke state listKos
                } else {
                    console.error('Gagal mengambil data kos');
                }
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };

        fetchDataKos();
    }, []);

    // Fungsi untuk menghapus kos berdasarkan ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/kos/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Data kos berhasil dihapus');
                setListKos(listKos.filter((kos) => kos.id !== id)); // Update state setelah penghapusan
            } else {
                console.error('Gagal menghapus data kos');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    return (
        <div className="bg-white-300 p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md">
            {listKos.map((kos) => (
                <div
                    key={kos.id}
                    className="flex justify-between items-start bg-white border-2 border-gray-300 p-4 mb-4 rounded-lg shadow"
                >
                    <div className="flex items-start">
                        <FaHome className="text-xl mr-2" />
                        <div>
                            <h2 className="text-lg font-semibold">{kos.nama}</h2>
                            <p className="text-gray-700">Harga: {kos.harga}</p>
                            <p className="text-gray-700">Alamat: {kos.alamat}</p>
                            <p className="text-gray-700">Fasilitas: {kos.fasilitas.join(', ')}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to={`/EditKos/${kos.id}`}>
                            <button className="text-blue-500 hover:text-blue-700">
                                <FaEdit />
                            </button>
                        </Link>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(kos.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listkos;