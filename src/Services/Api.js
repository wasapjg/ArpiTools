import axios from "axios";
import config from '../config'

// const BASE_URL = "https://3254-119-157-76-84.in.ngrok.io/api";
// const BASE_URL = "http://82.180.130.53:1337/api";
// const BASE_URL = "http://localhost:1337/api";
// console.log(BASE_URL);
const api = axios.create({
  baseURL: `${config.api.endpoint}`,
  timeout: 60 * 2 * 1000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': "BEARER " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0NTgxNTgzLCJleHAiOjE2NjcxNzM1ODN9.8NjLIdsFVHXn17eB64DPfaZWw5pD4g62ooGAzYYBnhk",
  },
});

export default api;
