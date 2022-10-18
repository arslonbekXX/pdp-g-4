import axios from "axios";

const http = axios.create({
  baseURL: "http://204.236.203.14:8090/api",
});

export default http;
