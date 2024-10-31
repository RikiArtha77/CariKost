import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarPemilikKost from './components/NavbarPemilikKost';
import PromoKost from './components/PromoKost';
import HeroSection from './components/HeroSection';
import Search from './pages/Search';
import NearbyRecommendations from './components/NearbyRecommendations';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import MonthlyDiscount from './promo/MonthlyDiscount';
import NewResidentSpecial from './promo/NewResidentSpecial';
import PromoMahasiswa from './promo/PromoMahasiswa';
import LongStayOffer from './promo/LongStayOffer';
import ReferralBonus from './promo/ReferralBonus';
import FAQ from './menu/Faq';
import Contact from './menu/Contact';
import UserGuide from './menu/UserGuide';
import UserSurvey from './menu/UserSurvey';
import ServiceSatisfaction from './menu/ServiceSatisfaction';
import Payment from './components/Payment';
import LoginChoice from './components/LoginChoice';
import Booking from './components/Booking';
import Diproses from './components/Diproses';
import Listkos from './components/Listkos';
import AddKos from './pages/AddKos';
import EditKos from './pages/EditKos';
import Kos from './pages/kos';
import Profile from './components/Profile';
import Riwayat from './components/Riwayat';
import Bayar from './components/Bayar';

const App = () => {
  const [showLoginChoice, setShowLoginChoice] = useState(true);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    document.title = "CariKost";
  }, []);

  const handleLoginChoiceClose = (role) => {
    setShowLoginChoice(false);
    setUserRole(role === 'Pemilik Kost' ? 'pemilikKost' : 'pengguna'); // Set peran pengguna berdasarkan pilihan
  };

  return (
    <Router>
      {showLoginChoice ? (
        <LoginChoice onClose={handleLoginChoiceClose} /> // Kirim peran ke fungsi penutupan
      ) : (
        <>
          {userRole === 'pemilikKost' ? (
            <NavbarPemilikKost />
          ) : (
            <Navbar />
          )}
          <Routes>
            <Route path="/" element={
              userRole === 'pemilikKost' ? (
                <Kos /> // Tampilkan Kos jika peran adalah pemilik kost
              ) : (
                <>
                  <HeroSection />
                  <NearbyRecommendations />
                  <PromoKost />
                  <Testimonial />
                </>
              )
            } />
            <Route path="/Search" element={<Search />} />
            <Route path="/MonthlyDiscount" element={<MonthlyDiscount />} />
            <Route path="/NewResidentSpecial" element={<NewResidentSpecial />} />
            <Route path="/PromoMahasiswa" element={<PromoMahasiswa />} />
            <Route path="/LongStayOffer" element={<LongStayOffer />} />
            <Route path="/ReferralBonus" element={<ReferralBonus />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UserGuide" element={<UserGuide />} />
            <Route path="/UserSurvey" element={<UserSurvey />} />
            <Route path="/ServiceSatisfaction" element={<ServiceSatisfaction />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Diproses" element={<Diproses />} />
            <Route path="/ListKos" element={<Listkos />} />
            <Route path="/AddKos" element={<AddKos />} />
            <Route path="/EditKos" element={<EditKos />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Riwayat" element={<Riwayat />} />
            <Route path="/Bayar" element={<Bayar />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;