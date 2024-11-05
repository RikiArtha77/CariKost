import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PilihRole = () => {
  return (
    <>
        <div className="h-screen grid place-items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold text-center text-gray-800">Pilih Role</h1>
                <Link to="/Kos">Pemilik Kost</Link>
                <Link to="/">Pengguna</Link>
            </div>
        </div>
    </>
  )
}

export default PilihRole;