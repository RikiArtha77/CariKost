import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import PromoKost from './components/PromoKost'
import HeroSection from './components/HeroSection'
import Search from './pages/Search';
// import SearchBar from './components/SearchBar';
import NearbyRecommendations from './components/NearbyRecommendations';
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import EasySearch from './pages/EasySearch';
import AffordablePrice from './pages/AffordablePrice';
import StrategicLocation from './pages/StrategicLocation';



const App = () => {
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
        <Route path="/features/easy-search" element={<EasySearch />} />
        <Route path="/features/affordable-price" element={<AffordablePrice />} />
        <Route path="/features/strategic-location" element={<StrategicLocation />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}
export default App;