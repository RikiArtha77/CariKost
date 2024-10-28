import React, { useState } from 'react';

const faqs = [
  {
    question: 'Apa itu Carikost?',
    answer: 'Carikost adalah platform yang membantu Anda menemukan kost yang sesuai dengan kebutuhan Anda di berbagai lokasi.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer: 'Anda dapat mendaftar dengan mengisi formulir pendaftaran di halaman utama dan mengikuti petunjuk yang diberikan.',
  },
  {
    question: 'Apakah biaya pendaftaran gratis?',
    answer: 'Ya, pendaftaran di Carikost sepenuhnya gratis dan tanpa biaya tersembunyi.',
  },
  {
    question: 'Bagaimana cara membatalkan pemesanan?',
    answer: 'Anda dapat membatalkan pemesanan melalui akun Anda di platform kami atau menghubungi layanan pelanggan kami.',
  },
  {
    question: 'Apa yang harus saya lakukan jika menemukan masalah dengan kost?',
    answer: 'Jika Anda menemukan masalah, silakan hubungi layanan pelanggan kami untuk mendapatkan bantuan lebih lanjut.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions (FAQ)</h3>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="border-b">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="text-lg font-semibold">{faq.question}</h4>
              <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-3-3h6l-3 3zm0-6l3 3H9l3-3z" />
                </svg>
              </span>
            </div>
            {openIndex === index && (
              <div className="p-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
