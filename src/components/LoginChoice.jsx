import React from "react";
import { useNavigate } from "react-router-dom";

const LoginChoice = ({ onClose }) => {
  const navigate = useNavigate();

  const handleChoice = (role) => {
    if (role === "Pemilik Kost") {
      navigate("/KostOwnerDashboard");
    } else if (role === "Pengguna") {
      navigate("/");
    }
    onClose(); // Tutup dialog setelah memilih peran
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Pilih Peran Login
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Silakan pilih peran Anda:
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleChoice("Pemilik Kost")}
            className="py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Pemilik Kost
          </button>
          <button
            onClick={() => handleChoice("Pengguna")}
            className="py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300"
          >
            Pengguna
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;