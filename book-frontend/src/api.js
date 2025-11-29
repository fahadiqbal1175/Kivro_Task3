// src/api.js
import axios from 'axios';

const api = axios.create({
  // Point directly to your Node backend port
  baseURL: 'http://localhost:3000', 
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
});

export default api;