import React from 'react'

const testimonials = [
    { name: 'Dewi', feedback: 'Sangat mudah dan cepat dalam mencari kost yang sesuai.' },
    { name: 'Andi', feedback: 'Platform ini memudahkan saya menemukan kost di dekat kampus.' },
    { name: 'Siti', feedback: 'Banyak pilihan dengan harga yang terjangkau!' },
  ];

function Testimonial(){
    return(
        <section id="testimonials" className="py-20 bg-gray-100">
            <h3 className="text-3xl font-bold text-center mb-10">Apa Kata Mereka?</h3>
            <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-lg">
                        <h4 className="text-gray-800 mb-4">"{testimonial.feedback}"</h4>
                        <p className="font-semibold text-blue-600">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial