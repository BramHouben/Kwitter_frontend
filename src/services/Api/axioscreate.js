import axios from "axios";

const axioscreate = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Origin": "http://20.76.230.89",
  },
});

export default axioscreate;
