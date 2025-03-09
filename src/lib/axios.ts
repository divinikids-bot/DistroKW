import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://moralapparel-us.backendless.app/api/data", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
