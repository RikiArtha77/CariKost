import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarPemilikKost from './components/NavbarPemilikKost';
import HeroSection from './components/HeroSection';
import Search from './pages/Search';
import DataKost from './components/DataKost';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import FAQ from './menu/Faq';
import Contact from './menu/Contact';
import UserGuide from './menu/UserGuide';
import UserSurvey from './menu/UserSurvey';
import ServiceSatisfaction from './menu/ServiceSatisfaction';
import Payment from './components/Payment';
import ListKos from './components/ListKos';
import Kos from './pages/Kos';
import Profile from './components/Profile';
import PilihRole from './components/PilihRole';
import Tambah from './components/Tambah';
import AddKos from './pages/AddKos';
import Bayar from './components/Bayar';
import Booking from './components/Booking';
import Diproses from './components/Diproses';
import Review from './components/Review';
import Riwayat from './components/Riwayat';

const WelcomeScreen = ({ onEnterAsUser, onEnterAsOwner }) => (
  <>
    <div className="flex">
      <nav className="flex justify-between items-center p-6 bg-blue-600 text-white w-full navbar-container">
        <div className="flex-grow">
          <div className="marquee">
            <span className="text-2xl">Selamat datang di CariKost | Temukan kost terbaik untuk Anda | Nikmati promo menarik setiap hari!</span>
          </div>
        </div>
      </nav>
    </div>
    <div className="h-screen grid place-items-center bg-gray-100">
      <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-white mb-2">Selamat Datang di CariKost</h1>
        <p className="text-lg text-white mb-6">Temukan kost terbaik untuk Anda!</p>
        
        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={onEnterAsUser}
            className="border-2 border-blue-500 bg-blue-100 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-200 transition"
          >
            Masuk sebagai Pengguna
          </button>
          <button
            onClick={onEnterAsOwner}
            className="border-2 border-green-500 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition"
          >
            Masuk sebagai Pemilik Kost
          </button>
        </div>
      </div>
    </div>
  </>
);

const App = () => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    document.title = "CariKost";
  }, []);

  const handleEnterAsUser = () => {
    setUserRole('pengguna');
  };

  const handleEnterAsOwner = () => {
    setUserRole('pemilikKost');
  };

  return (
    <Router>
      {/* Tampilkan Navbar sesuai peran yang dipilih, hanya jika sudah memilih peran */}
      {userRole && (userRole === 'pemilikKost' ? <NavbarPemilikKost /> : <Navbar />)}

      {/* Tampilkan WelcomeScreen jika belum memilih peran */}
      {!userRole ? (
        <WelcomeScreen onEnterAsUser={handleEnterAsUser} onEnterAsOwner={handleEnterAsOwner} />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                userRole === 'pemilikKost' ? (
                  <Kos /> // Tampilkan halaman khusus pemilik kost
                ) : (
                  <>
                    <HeroSection />
                    <DataKost />
                    <Testimonial />
                  </>
                )
              }
            />
            <Route path="/Search" element={<Search />} />
            <Route path="/Bayar" element={<Bayar />} />
            <Route path="/Booking" element={<Booking/>} />
            <Route path="/Diproses" element={<Diproses/>} />
            <Route path="/Review" element={<Review />} />
            <Route path="/Riwayat" element={<Riwayat />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UserGuide" element={<UserGuide />} />
            <Route path="/UserSurvey" element={<UserSurvey />} />
            <Route path="/ServiceSatisfaction" element={<ServiceSatisfaction />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/ListKos" element={<ListKos />} />
            <Route path="/Tambah" element={<Tambah />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PilihRole" element={<PilihRole />} />
            <Route path="/AddKos" element={<AddKos/>} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;