import React from 'react'
import { Link } from 'react-router-dom';
const NavbarPemilikKost = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">CariKost</h1>
      <div>
        <Link to="/" className="mr-6 hover:text-gray-200">Kos</Link>
        <Link to="/AddKos" className="mr-6 hover:text-gray-200">Tambah Kos</Link>
        <Link to="/Profile" className="mr-6 hover:text-gray-200">Profile</Link>
      </div>
    </nav>
  );
}

export default NavbarPemilikKost;