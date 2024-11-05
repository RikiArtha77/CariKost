import { useEffect, useState } from 'react';
import { getKosts } from '../services/API'; // Pastikan Anda memiliki fungsi ini di services/API
import { useNavigate } from 'react-router-dom';

const DaftarKost = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchKosts();
    }, []);

    const fetchKosts = () => {
        getKosts((response) => {
            console.log(response); 
            if (response.success && Array.isArray(response.data)) {
                setProducts(response.data); 
            } else {
                console.error("Data tidak valid", response);
            }
        });
    };

  return (
    <div className="bg-white p-6 w-11/12 mx-auto rounded-lg shadow-md">
      {products.length > 0 && products.map((product, index) => (
                <div
                    key={index}
                    className="flex justify-between items-start bg-white border-2 border-blue-600 p-4 mb-4 rounded-lg shadow"
                >
                    <div className="flex items-start">
                        <div>
                            <h2 className="text-lg font-semibold text-blue-600">{product.nama_kost}</h2>
                            <span className='text-sm text-blue-600 font-semibold inline-block px-2 py-1 rounded mb-1 border-2 border-blue-600'>{product.jenis_kost}</span>
                            <p className="text-gray-700">Harga: {product.harga}</p>
                            <p className="text-gray-700">Alamat: {product.alamat}</p>
                            <p className="text-gray-700">Fasilitas: {product.fasilitas}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  );
};

export default DaftarKost;