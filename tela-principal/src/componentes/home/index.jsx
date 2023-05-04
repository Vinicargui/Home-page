import "./estilo.css";
import perfil from "../../imagens/usuario.ico";
import sair from "../../imagens/sair.ico";
import logo from "../../imagens/logo.png";

function Principal() {
  return (
    <div className="cabecalho">
      <header className="app-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="titulos">
          <li>Home</li>
          <li>Publicações</li>
          <li>Cadastro</li>
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
