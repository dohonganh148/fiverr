import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    tokenCybersoft: process.env.REACT_APP_CYBERSOFT_TOKEN,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NDkiLCJlbWFpbCI6InN0cmluZyIsInJvbGUiOiJBRE1JTiIsIm5iZiI6MTY3NTI2NjA5NywiZXhwIjoxNjc1ODcwODk3fQ.oNvb7Bt-AkF2-Dv9x3jiE16NHK2vkvAyOtr-0qQBhEE",
  },
});

export default requester;
