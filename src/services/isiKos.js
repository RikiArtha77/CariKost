import axios from 'axios';

const API_URL = "https://api.trplweb.wefgis-sync.com/api/kosts";

// Fetch all Kost data
export const getKosts = (callback) => {
    axios
        .get(API_URL)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

// Add new Kost data
export const addKosts = (data) => {
    axios
      .post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log("Data berhasil ditambahkan", response);
      })
      .catch((error) => {
        console.log("Gagal menambahkan data", error);
      });
  };
  
  

// Delete a specific Kost by ID
export const deleteKost = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log("Data successfully deleted:", response);
        return response.data;
    } catch (error) {
        console.error("Failed to delete Kost data:", error);
        throw error;
    }
};
