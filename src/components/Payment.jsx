import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation(); // Mendapatkan location dari react-router
  const { kost } = location.state || {}; // Mengambil data kost yang diteruskan

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    console.log('Metode Pembayaran:', paymentMethod);
    if (paymentMethod === 'eWallet') {
      console.log('Pembayaran menggunakan e-wallet.');
    } else {
      console.log('Nomor Kartu:', cardNumber);
      console.log('Tanggal Kadaluarsa:', expiryDate);
      console.log('CVV:', cvv);
    }
    console.log('Alamat Penagihan:', billingAddress);
    alert('Pembayaran Anda telah berhasil!');
    // Reset form
    setPaymentMethod('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setBillingAddress('');
  };

  return (
    <section className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Pembayaran</h3>
      
      {/* Tampilkan informasi kost yang terpilih */}
      {kost && (
        <div className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50 flex flex-col items-center">
          <img src={kost.image} alt={kost.name} className="w-48 h-48 rounded-lg mb-4 object-cover" />
          <h4 className="text-xl font-semibold">{kost.name}</h4>
          <p className="text-gray-600">{kost.location}</p>
          <p className="text-blue-600 font-bold">{kost.price}</p>
          <p className="text-gray-700">{kost.description}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
            Metode Pembayaran
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="creditCard">Kartu Kredit</option>
            <option value="debitCard">Kartu Debit</option>
            <option value="bankTransfer">Transfer Bank</option>
            <option value="eWallet">E-Wallet (DANA/OVO)</option>
          </select>
        </div>
        {paymentMethod === 'creditCard' || paymentMethod === 'debitCard' ? (
          <>
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Nomor Kartu
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Masukkan nomor kartu"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Tanggal Kadaluarsa
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                  placeholder="CVV"
                />
              </div>
            </div>
          </>
        ) : null}
        {paymentMethod === 'eWallet' && (
          <div>
            <p className="text-sm text-gray-700">Silakan ikuti petunjuk di aplikasi DANA/OVO untuk menyelesaikan pembayaran.</p>
          </div>
        )}
        <div>
          <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">
            Alamat Penagihan
          </label>
          <input
            type="text"
            id="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            placeholder="Masukkan alamat penagihan"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Bayar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Payment;