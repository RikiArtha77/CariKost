import React, { useState } from 'react';

const Tambah = ({ mode = 'add' }) => {
    const isEditMode = mode === 'edit'
    
    return (
        <div className="bg-white-300 p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md ">
            <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Kos':'Tambah'}</h2>
            <form className="flex flex-col">
                <label className="mb-2 font-semibold">Nama Kos</label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-gray-300 rounded"
                    placeholder="Masukkan nama kos"
                />

                <label className="mb-2 font-semibold">Jenis Kos</label>
                <div className="flex gap-4 mb-4">
                    <button type="submit" className="text-blue-600 font-bold bg-white-700 py-2 px-4 rounded-lg border-2 border-blue-600 focus:bg-blue-600 focus:text-white transition ">
                        Campur
                    </button>
                    <button type="submit" className="text-blue-600 font-bold bg-white-700 py-2 px-4 rounded-lg border-2 border-blue-600 focus:bg-blue-600 focus:text-white transition ">
                        Putri
                    </button>
                </div>

                <label className="mb-2 font-semibold">Alamat</label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-gray-300 rounded"
                    placeholder="Masukkan alamat kos"
                />
                <label className="mb-2 font-semibold">Harga </label>
                <input
                    type="text"
                    className="p-2 mb-4 border-2 border-gray-300 rounded"
                    placeholder="Masukkan alamat kos"
                />

                <button type="submit" className="text-blue-600 font-bold bg-white-700 py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition ">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Tambah