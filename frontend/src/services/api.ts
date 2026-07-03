import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

console.log("API URL:", baseURL);

export const apiClient = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});