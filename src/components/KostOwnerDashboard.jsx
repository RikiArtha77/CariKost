import React, { useState } from 'react';

const KostOwnerDashboard = ({ mode = 'add' }) => {
    const isEditMode = mode === 'edit';
    const [namaKos, setNamaKos] = useState('');
    const [jenisKos, setJenisKos] = useState('');
    const [alamat, setAlamat] = useState('');
    const [harga, setHarga] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Data yang akan dikirim ke API
        const kosData = {
            namaKos,
            jenisKos,
            alamat,
            harga
        };

        try {
            const response = await fetch(isEditMode ? 'api/kosts' : 'api/kosts', {
                method: isEditMode ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(kosData)
            });

            if (response.ok) {
                alert(isEditMode ? 'Kos berhasil diperbarui' : 'Kos berhasil ditambahkan');
                // Reset form atau lakukan tindakan lain sesuai kebutuhan
            } else {
                alert('Terjadi kesalahan saat menyimpan data kos');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan jaringan');
        }
    };

    return (
        <div className="bg-white-300 p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Kos' : 'Tambah Kos'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="mb-2 font-semibold">Nama Kos</label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-blue-600 rounded"
                    placeholder="Masukkan nama kos"
                    value={namaKos}
                    onChange={(e) => setNamaKos(e.target.value)}
                />

                <label className="mb-2 font-semibold">Jenis Kos</label>
                <div className="flex gap-4 mb-4">
                    <button
                        type="button"
                        className={`text-blue-600 font-bold py-2 px-4 rounded-lg border-2 ${jenisKos === 'Campur' ? 'bg-blue-600 text-white' : 'bg-white border-blue-600'}`}
                        onClick={() => setJenisKos('Campur')}
                    >
                        Campur
                    </button>
                    <button
                        type="button"
                        className={`text-blue-600 font-bold py-2 px-4 rounded-lg border-2 ${jenisKos === 'Putri' ? 'bg-blue-600 text-white' : 'bg-white border-blue-600'}`}
                        onClick={() => setJenisKos('Putri')}
                    >
                        Putri
                    </button>
                </div>

                <label className="mb-2 font-semibold">Alamat</label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-blue-600 rounded"
                    placeholder="Masukkan alamat kos"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                />

                <label className="mb-2 font-semibold">Harga</label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-blue-600 rounded"
                    placeholder="Masukkan harga kos"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                />

                <button type="submit" className="text-blue-600 font-bold bg-white-700 py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default KostOwnerDashboard;
