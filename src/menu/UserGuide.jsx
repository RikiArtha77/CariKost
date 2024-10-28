// src/components/UserGuide.js
import React from 'react';

const UserGuide = () => {
  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Panduan Pengguna</h3>
      <ol className="space-y-4">
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">1. Daftar Akun</h4>
          <p className="text-gray-600">
            Kunjungi halaman pendaftaran dan isi formulir dengan informasi yang diperlukan. Pastikan untuk memverifikasi email Anda setelah pendaftaran.
          </p>
        </li>
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">2. Cari Kost</h4>
          <p className="text-gray-600">
            Gunakan fitur pencarian untuk menemukan kost yang sesuai dengan lokasi, harga, dan fasilitas yang Anda inginkan.
          </p>
        </li>
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">3. Lihat Detail Kost</h4>
          <p className="text-gray-600">
            Klik pada salah satu hasil pencarian untuk melihat detail kost, termasuk gambar, harga, fasilitas, dan ulasan pengguna.
          </p>
        </li>
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">4. Melakukan Pemesanan</h4>
          <p className="text-gray-600">
            Jika Anda telah menemukan kost yang diinginkan, klik tombol 'Pesan' dan ikuti langkah-langkah yang diberikan untuk menyelesaikan pemesanan.
          </p>
        </li>
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">5. Hubungi Pemilik Kost</h4>
          <p className="text-gray-600">
            Jika ada pertanyaan lebih lanjut tentang kost, Anda dapat menghubungi pemilik kost melalui informasi kontak yang tersedia di halaman detail kost.
          </p>
        </li>
        <li className="border p-4 rounded-md shadow-sm">
          <h4 className="text-lg font-semibold">6. Berikan Ulasan</h4>
          <p className="text-gray-600">
            Setelah tinggal di kost, jangan lupa untuk memberikan ulasan untuk membantu pengguna lain dalam memilih kost yang tepat.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default UserGuide;
