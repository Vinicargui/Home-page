import axios from "axios";

const postagensApi = axios.create({
  baseURL: "http://localhost:5000/telaprincipal",
});

function getPostagens() {
  const response = postagensApi.get("/");
  return response.data;
}

export { getPostagens };
