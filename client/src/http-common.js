import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3003/api",
  headers: {
    "Content-type": "application/json"
  }
});