// ListKos.js
import { useEffect, useState } from 'react';
import { FaHome, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getKosts, deleteKost } from '../services/API';

const ListKos = () => {
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

    // Fungsi untuk menghapus data
    const handleDelete = (id) => {
        deleteKost(id)
            .then(() => {
                setProducts(products.filter((product) => product.id !== id));
                console.log("Data berhasil dihapus");
            })
            .catch((error) => {
                console.error("Gagal menghapus data", error);
            });
    };
    const handleEdit = (product) => {
        navigate('/Tambah', { state: { data: product } }); // Mengarahkan ke halaman Tambah dengan data produk
    };

    return (
        <div className="bg-white p-6 w-11/12 mx-auto h-full rounded-lg m-5 shadow-md">
            {products.length > 0 && products.map((product, index) => (
                <div
                    key={index}
                    className="flex justify-between items-start bg-white border-2 border-blue-600 p-4 mb-4 rounded-lg shadow"
                >
                    <div className="flex items-start">
                        <FaHome className="text-xl mr-2 text-blue-600" />
                        <div>
                            <h2 className="text-lg font-semibold text-blue-600">{product.nama_kost}</h2>
                            <span className='text-sm text-blue-600 font-semibold inline-block px-2 py-1 rounded mb-1 border-2 border-blue-600'>{product.jenis_kost}</span>
                            <p className="text-gray-700">Harga: {product.harga}</p>
                            <p className="text-gray-700">Alamat: {product.alamat}</p>
                            <p className="text-gray-700">Fasilitas: {product.fasilitas}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700">
                            <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(product.id)} className="text-red-500">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListKos;