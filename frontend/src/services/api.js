import axios from "axios";

export const API = axios.create({ baseURL: "" });

export const instance = axios.create({
  baseURL: "", // Backend server URL
});

export const api = axios.create({
  baseURL: "", // Connect to Order Service backend running on port 5051
  headers: {
    "Content-Type": "application/json",
  },
});
