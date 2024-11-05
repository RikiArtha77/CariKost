import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex">
      <nav className="flex justify-between items-center p-6 bg-blue-600 text-white w-full">
        <h1 className="text-2xl font-bold">CariKost</h1>
        <div className="flex items-center">
          <Link to="/" className="mr-6 hover:text-gray-200">Beranda</Link>
          <Link to="/Diproses" className="mr-6 hover:text-gray-200">Pesanan</Link>
          <button
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Tutup Menu' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col">
            <button
              className="text-gray-500 hover:text-gray-800 mb-4 self-end"
              onClick={closeSidebar}
            >
              &times; Tutup
            </button>
            <h2 className="text-xl font-bold mb-4 self-end">Pusat Bantuan</h2>
            <ul className="mb-6 flex flex-col items-end">
              <li>
                <Link to="/FAQ" className="block py-2 text-blue-600 hover:bg-blue-100">FAQ</Link>
              </li>
              <li>
                <Link to="/Contact" className="block py-2 text-blue-600 hover:bg-blue-100">Hubungi Kami</Link>
              </li>
              <li>
                <Link to="/UserGuide" className="block py-2 text-blue-600 hover:bg-blue-100">Panduan Pengguna</Link>
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-4 self-end">Survey</h2>
            <ul className="flex flex-col items-end">
              <li>
                <Link to="/UserSurvey" className="block py-2 text-blue-600 hover:bg-blue-100">Survey Pengguna</Link>
              </li>
              <li>
                <Link to="/ServiceSatisfaction" className="block py-2 text-blue-600 hover:bg-blue-100">Kepuasan Layanan</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
