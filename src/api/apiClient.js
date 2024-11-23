import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api/v1", //  base URL
    headers: {
      "Content-Type": "application/json",
    },
  });
  

// Add authorization token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Retrieve token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
