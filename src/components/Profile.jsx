import React, { useState, useEffect } from 'react';
import { getKosts } from '../services/API';

const Profile = () => {
    const [products, setProducts] = useState([]);

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
        <div className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
            {products.length > 0 && (
                <div className="p-4 border rounded-lg shadow-sm my-2">
                    <strong>Nama:</strong> {products[0].username}
                    <br />
                    <strong>No HP:</strong> {products[0].no_wa}
                </div>
            )}
        </div>
    );
}

export default Profile;