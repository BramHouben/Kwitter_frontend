import axios from "axios";
import Cookies from "js-cookie";
const instance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    Authorization: `Bearer ${Cookies.get("auth")}`,
  },
});

export default instance;
