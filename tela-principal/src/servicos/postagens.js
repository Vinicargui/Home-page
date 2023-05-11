import axios from "axios";

const produtoApi = axios.create({
  baseURL: "http://localhost:3000/produto",
});

function postProduto() {
  const response = produtoApi.post("/");
  return response.data;
}

export { postProduto};
