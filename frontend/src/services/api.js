// API service for making requests to the backend
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// BMI calculation API
export const calculateBMI = async (data) => {
  try {
    const response = await apiClient.post('/bmi/calculate', data);
    return response.data;
  } catch (error) {
    console.error('Error calculating BMI:', error);
    throw error;
  }
};

// Meal suggestions API
export const getMealSuggestions = async (data) => {
  try {
    const response = await apiClient.post('/meal/suggestions', data);
    return response.data;
  } catch (error) {
    console.error('Error getting meal suggestions:', error);
    throw error;
  }
};

export default {
  calculateBMI,
  getMealSuggestions
};
