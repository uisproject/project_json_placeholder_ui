import axios from "axios";

export const BASE_URL = "/";

// v1 api fetching
export const publicInstance = axios.create({ baseURL: BASE_URL });

// v2 secured api fetching with token
export const privateInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization,X-Requested-With",
  },
  withCredentials: true,
});
