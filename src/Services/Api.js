import axios from "axios";

// const BASE_URL = "https://3254-119-157-76-84.in.ngrok.io/api";
const BASE_URL = "http://7b2b-182-190-197-196.in.ngrok.io/api";
console.log(BASE_URL);
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60 * 2 * 1000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': "BEARER " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0NTgxNTgzLCJleHAiOjE2NjcxNzM1ODN9.8NjLIdsFVHXn17eB64DPfaZWw5pD4g62ooGAzYYBnhk",
  },
});

export default api;
