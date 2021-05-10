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


export const getBooks = ({perPage, page, keyword}) => {
  const params = {
    q: keyword,
    maxResults: perPage,
    startIndex: ( page - 1 )
  } 
  return apiClient.get("/volumes", { params })
}
