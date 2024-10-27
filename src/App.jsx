import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
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
            <Features />
            <Testimonial />
            <Footer />
          </>
        } />
        <Route path="/features/easy-search" element={<EasySearch />} />
        <Route path="/features/affordable-price" element={<AffordablePrice />} />
        <Route path="/features/strategic-location" element={<StrategicLocation />} />
      </Routes>
    </Router>
  )
}

export default App