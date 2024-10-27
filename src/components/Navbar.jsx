import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">CariKost</h1>
        <div>
            <a href="/" className="mr-6 hover:text-gray-200">Home</a>
            <a href="#features" className="mr-6 hover:text-gray-200">Features</a>
            <a href="#testimonials" className="mr-6 hover:text-gray-200">Testimonial</a>
            <a href="#contact" className="mr-6 hover:text-gray-200">Contact</a>
        </div>
    </nav>
  );
}

export default Navbar