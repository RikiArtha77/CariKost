import React, { useState } from 'react';

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
          <a href="/" className="mr-6 hover:text-gray-200">Beranda</a>
          <button
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Menu' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
            <button
              className="text-gray-500 hover:text-gray-800 mb-4"
              onClick={closeSidebar}
            >
              &times; Tutup
            </button>
            <h2 className="text-xl font-bold mb-4">Pusat Bantuan</h2>
            <ul className="mb-6">
              <li>
                <a href="/help/faq" className="block py-2 text-blue-600 hover:bg-blue-100">FAQ</a>
              </li>
              <li>
                <a href="/help/contact" className="block py-2 text-blue-600 hover:bg-blue-100">Hubungi Kami</a>
              </li>
              <li>
                <a href="/help/guide" className="block py-2 text-blue-600 hover:bg-blue-100">Panduan Pengguna</a>
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-4">Survey</h2>
            <ul>
              <li>
                <a href="/survey/feedback" className="block py-2 text-blue-600 hover:bg-blue-100">Survey Pengguna</a>
              </li>
              <li>
                <a href="/survey/satisfaction" className="block py-2 text-blue-600 hover:bg-blue-100">Kepuasan Layanan</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
