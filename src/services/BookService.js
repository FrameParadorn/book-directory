import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://www.googleapis.com/books/v1`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


export const getBooks = () => {
  return apiClient.get("/volumes?q=antiques")
}
