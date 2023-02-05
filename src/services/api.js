import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    tokenCybersoft: process.env.REACT_APP_CYBERSOFT_TOKEN,
    token: localStorage.getItem("token"),
  },
});

export default requester;
