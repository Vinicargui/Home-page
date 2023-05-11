import { useState } from "react";
import axios from "axios";
import "./estilo.css";
import { useNavigate } from 'react-router-dom'


function FormCadastro() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const produto = {
        titulo: titulo,
        categoria: categoria,
        imagem: imagem,
        valor: valor,
        descricao: descricao,
      };
     const response = await axios.post("http://localhost:3001/produto", produto);
     console.log(await response);
  
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

          {/* <div className="foto">
          <label htmlFor="" className="imagem">Imagem</label>
          <input type="file" name="imagem" onChange={(e) => setImagem(e.target.value)} />
        </div> */}

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
