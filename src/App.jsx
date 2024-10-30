import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
import KostOwnerDashboard from './components/KostOwnerDashboard';

// Komponen untuk halaman pemilik kost dan pengguna
const PemilikKostPage = () => <div>Pemilik Kost Page</div>;
const PenggunaPage = () => <div>Pengguna Page</div>;

const App = () => {
  const [showLoginChoice, setShowLoginChoice] = useState(true);

  useEffect(() => {
    document.title = "CariKost";
    const favicon = document.getElementById('favicon');
  }, []);

  const handleLoginChoiceClose = () => {
    setShowLoginChoice(false);
  };

  return (
    <Router>
      {showLoginChoice ? (
        <LoginChoice onClose={handleLoginChoiceClose} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <NearbyRecommendations />
                <PromoKost />
                <Testimonial />
                <Footer />
              </>
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
            <Route path="/KostOwnerDashboard" element={<KostOwnerDashboard />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
