import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Search from './pages/Search';
// import SearchBar from './components/SearchBar';
import NearbyRecommendations from './components/NearbyRecommendations';
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import EasySearch from './pages/EasySearch';
import AffordablePrice from './pages/AffordablePrice';
import StrategicLocation from './pages/StrategicLocation';



function App() {
  const handleSearch = (query) => {
    console.log("Pencarian untuk:", query);
    // Logika pencarian atau filter bisa ditambahkan di sini
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            {/* <SearchBar onSearch={handleSearch} /> */}
            <NearbyRecommendations />
            <Features />
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