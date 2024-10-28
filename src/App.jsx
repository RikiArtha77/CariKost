import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import PromoKost from './components/PromoKost'
import HeroSection from './components/HeroSection'
import Search from './pages/Search';
// import SearchBar from './components/SearchBar';
import NearbyRecommendations from './components/NearbyRecommendations';
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
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



const App = () => {
  useEffect(() => {
    document.title = "CariKost";

    const favicon = document.getElementById('favicon');
    const iconUrl = 'https://icons8.com/icon/4025/room';
    if (favicon) {
      favicon.href = iconUrl;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = iconUrl;
      newFavicon.id = 'favicon';
      document.head.appendChild(newFavicon);
    }
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            {/* <SearchBar onSearch={handleSearch} /> */}
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
        <Route path="/ServiceSatisfaction" element={<ServiceSatisfaction/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
    </Router>
  );
}
export default App;