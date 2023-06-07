import { useState } from "react";
import axios from "axios";
import "./estilo.css";
import { useNavigate, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function FormAtualizar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [image, setImagem] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const { id } = useParams();
  const navegate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

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
    console.log(`teste${id}`);
    try {
      await axios.patch(`http://localhost:3001/${id}`, produto);
      navegate("/publicacao");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div className="containerCadastro">
        <div className="formulario">
          <h1>Atualizar produto</h1>
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
              type="number"
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
              rows="5"
              className="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Atualizar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAtualizar;

// return (
//     <form onSubmit={handleSubmit} enctype="multipart/form-data">
//       <div className="containerCadastro">
//         <div className="formulario">
//           <h1>Atualizar produto</h1>
//           <div className="titulo">
//             <label htmlFor="tituloPrincipal">Titulo</label>
//             <input
//               type="text"
//               name="titulo"
//               value={valores.titulo}
//               onChange={(e) =>
//                 setValores({ ...valores, titulo: e.target.value })
//               }
//             />
//           </div>

//           <div className="categoria">
//             <label htmlFor="">Categoria</label>

//             <div className="formRadio">
//               <input
//                 type="radio"
//                 name="categoria"
//                 value="pratos"
//                 // value={valores.categoria}
//                 onChange={(e) =>
//                   setValores({ ...valores, categoria: e.target.value })
//                 }
//               />
//               <label htmlFor="">Pratos</label>
//             </div>

//             <div className="formRadio">
//               <input
//                 type="radio"
//                 name="categoria"
//                 value="bebidas"
//                 onChange={(e) =>
//                   setValores({ ...valores, categoria: e.target.value })
//                 }
//               />
//               <label htmlFor="">Bebidas</label>
//             </div>

//             <div className="formRadio">
//               <input
//                 type="radio"
//                 name="categoria"
//                 value="sobremesa"
//                 onChange={(e) =>
//                   setValores({ ...valores, categoria: e.target.value })
//                 }
//               />
//               <label htmlFor="">Sobremesas</label>
//             </div>
//           </div>

//           <div className="foto">
//             <label htmlFor="" className="imagem">
//               Imagem
//             </label>
//             <input
//               type="file"
//               name="image"
//               onChange={(e) => setImagem(e.target.files[0])}
//             />
//           </div>

//           <div className="valor">
//             <label htmlFor="">Valor</label>
//             <input
//               type="number"
//               name="valor"
//               value={valores.valor}
//               onChange={(e) =>
//                 setValores({ ...valores, valor: e.target.value })
//               }
//             />
//           </div>

//           <div className="descricao">
//             <label htmlFor="">Descrição</label>
//             <textarea
//               name="descricao"
//               id=""
//               cols="30"
//               rows="5"
//               className="descricao"
//               value={valores.descricao}
//               onChange={(e) =>
//                 setValores({ ...valores, descricao: e.target.value })
//               }
//             ></textarea>
//           </div>

//           <button type="submit" className="btn">
//             Atualizar
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

//   const [valores, setValores] = useState({
//     categoria: "",
//     descricao: "",
//     imagem: "",
//     titulo: "",
//     valor: "",
//     _id: id,
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:3001/${id}`).then((res) => {
//       setValores({
//         ...valores,
//         categoria: res.data.categoria,
//         descricao: res.data.descricao,
//         titulo: res.data.titulo,
//         imagem: res.data.imagem,
//         valor: res.data.valor,
//       }).catch((err) => console.log(err));
//     }, []);
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios
//       .put(`http://localhost:3001/${id}`, valores)
//       .then((res) => {})
//       .catch((err) => console.log(err));
//   };
