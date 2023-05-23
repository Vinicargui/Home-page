import { useState } from "react";
import axios from "axios";
import "./estilo.css";
// import { useNavigate } from "react-router-dom";

function FormCadastro() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [image, setImagem] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("conectando");
    console.log(image);

    if (
      titulo === "" ||
      categoria === "" ||
      image === "" ||
      valor === "" ||
      descricao === ""
    ) {
      alert("Preencha todos os dados!");
    }

    const produto = {
      titulo,
      categoria,
      image,
      valor,
      descricao,
    };

    const formData = new FormData();
    formData.append("image", image);
    // formData.append("titulo", titulo);
    // formData.append("categoria", categoria);
    // formData.append("valor", valor);
    // formData.append("descricao", descricao);

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post("http://localhost:3001/produto", produto, formData);
      console.log("Produto enviado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="containerCadastro">
        <div className="formulario">
          <h1>Cadastrar novos produtos</h1>
          <div className="titulo">
            <label htmlFor="tituloPrincipal">Titulo</label>
            <input
              type="text"
              name="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="categoria">
            <label htmlFor="">Categoria</label>

            <div className="formRadio">
              <input
                type="radio"
                name="categoria"
                value="pratos"
                onClick={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="">Pratos</label>
            </div>

            <div className="formRadio">
              <input
                type="radio"
                name="categoria"
                value="bebidas"
                onClick={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="">Bebidas</label>
            </div>

            <div className="formRadio">
              <input
                type="radio"
                name="categoria"
                value="sobremesa"
                onClick={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="">Sobremesas</label>
            </div>
          </div>

          <div className="foto">
            <label htmlFor="" className="imagem">
              Imagem
            </label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>

          <div className="valor">
            <label htmlFor="">Valor</label>
            <input
              type="text"
              name="valor"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="descricao">
            <label htmlFor="">Descrição</label>
            <textarea
              name="descricao"
              id=""
              cols="30"
              rows="10"
              className="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCadastro;
