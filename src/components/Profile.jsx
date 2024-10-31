import React, { useState, useEffect } from 'react';

const Profile = () => {
    // State untuk menyimpan data profil yang diambil dari API
    const [profileData, setProfileData] = useState({
        nama: '',
        noHp: '',
        email: ''
    });

    // Fetch data profil dari API saat komponen pertama kali dimuat
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/profile'); // Ganti dengan endpoint yang benar
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);
                } else {
                    console.error('Gagal mengambil data profil');
                }
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div className="my-8 max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="p-4 border rounded-lg shadow-sm my-2">
                <strong>Nama:</strong> {profileData.nama}
            </div>
            <div className="p-4 border rounded-lg shadow-sm my-2">
                <strong>No HP:</strong> {profileData.noHp}
            </div>
            <div className="p-4 border rounded-lg shadow-sm my-2">
                <strong>Email:</strong> {profileData.email}
            </div>
        </div>
    );
}

export default Profile;
