import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    tokenCybersoft: process.env.REACT_APP_CYBERSOFT_TOKEN
  },
});
requester.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers,
    token: localStorage.getItem("token"),
  };
  return req;
});
export default requester;
