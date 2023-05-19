import { useState, useEffect } from "react";
import "./App.css";
import PublicacaoPage from "../componentes/publicacao";
import axios from "axios";

function Publicacao() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:3001");
      const produtosServidor = response.data;
      if (produtosServidor !== produtos) {
        setProdutos(produtosServidor);
      }
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    if (produtos.length !== 0) {
      getProdutos();
    }
  }, [produtos]);

  useEffect(() => {
    getProdutos();
  }, []);

  async function Deletar(e) {
    await axios.delete(`http://localhost:3001/${e.target.id}`);
    await getProdutos();
    console.log(e.target.id);
    console.log(produtos);
  }
  console.log(produtos.imagem);
  return (
    <div className="publicacaoContainer">
      {produtos.length > 0 &&
        produtos.map((produto) => (
          <PublicacaoPage
            titulo={produto.titulo}
            imagem={`http://localhost:3001/image/${produto.imagem}`}
            categoria={produto.categoria}
            valor={produto.valor}
            descricao={produto.descricao}
            id={produto._id}
            handleRemove={Deletar}
          />
        ))}
    </div>
  );
}
export default Publicacao;
