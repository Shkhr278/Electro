import axios from "axios";

const API_BASE_URL = "https://api.example.com/electronic-components";

export const fetchComponents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/components`);
    return response.data;
  } catch (error) {
    console.error("Error fetching components:", error);
    throw error;
  }
};

export const fetchComponentDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/components/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching component detail:", error);
    throw error;
  }
};
