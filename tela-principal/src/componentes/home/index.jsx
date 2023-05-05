import "./estilo.css";
import perfil from "../../imagens/usuario.ico";
import sair from "../../imagens/sair.ico";
import logo from "../../imagens/logo.png";
import { Link } from "react-router-dom";

function Principal() {
  return (
    <div className="cabecalho">
      <header className="app-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="titulos">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/publicacao">
            <li>Publicações</li>
          </Link>
          <Link to='/cadastro'>
            <li>Cadastro</li>
          </Link>
        </ul>

        <ul className="icones">
          <li>
            <img src={perfil} alt="" />
          </li>
          {/* <li><img src={sair} alt="" /></li> */}
        </ul>
      </header>
    </div>
  );
}

export default Principal;
