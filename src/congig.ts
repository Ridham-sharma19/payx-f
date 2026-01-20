import axios from "axios";
const BACKEND_URL = "https://payx-1-fbge.onrender.com";

export const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, 
});


