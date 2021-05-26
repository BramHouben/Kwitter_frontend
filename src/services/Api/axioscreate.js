import axios from "axios";

const axioscreate = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://20.76.155.144",
  },
});

export default axioscreate;
