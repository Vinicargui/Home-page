import "./estilo.css";
import perfil from '../../imagens/usuario.ico'
import sair from '../../imagens/sair.ico'

function Principal() {
  return (
    <div className="cabecalho">
      <header className="app-header">
        <div className="logo">
          <p>Imagem ilustrativa</p>
        </div>

        <ul className="titulos">
          <li>Home</li>
          <li>Publicações</li>
          <li>Cadastro</li>
        </ul>
        
        <ul className="icones">
          <li><img src={perfil} alt="" /></li>
          <li><img src={sair} alt="" /></li>

        </ul>
      </header>
    </div>
  );
}

export default Principal;
