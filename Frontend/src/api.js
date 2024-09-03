// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/recommend';

export const getRecommendations = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};
