import "./estilo.css";
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function PublicacaoPage({
  id,
  titulo,
  imagem,
  categoria,
  valor,
  descricao,
  handleRemove,
}) {
  return (
    <div className="produto-card">
      <h4>{titulo}</h4>
      <div className="imagem">
        <img src={imagem} />
      </div>
      <span>Categoria:</span> {categoria}
      <p>
        <span>Valor:</span> R${valor}
      </p>
      <p>
        <span>Descrição:</span> <div className="descr">{descricao}</div>
        <div className="leia">
          <button id="btn">Leia mais</button>
        </div>
      </p>
      <div className="action">
        <Link to={`/${id}`}>
          <BsPencil />
        </Link>
        <button onClick={handleRemove} id={id}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

export default PublicacaoPage;
