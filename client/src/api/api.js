import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;
