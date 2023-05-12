
import "./estilo.css"
import { Link } from "react-router-dom"
import{BsPencil, BsFillTrashFill} from 'react-icons/bs'


   

function PublicacaoPage({id,titulo,categoria,valor,descricao}){

    

    // button.addEventListener('click',()=>{
    //    var card = document.querySelector('.produto-card')
    // })
    return(
         <div className="produto-card">
            <h4>{titulo}</h4>
            <p>
                <span>Categoria:</span> {categoria}
            </p>
            <p>
                <span>Valor:</span> R${valor}
            </p>
            <p>
                <span>Descrição:</span> <div className="descr">{descricao}</div>
                <div className="leia"><button id="btn">Leia mais</button></div>
            </p>
            <div className="action">
                <Link to="/">
                    <BsPencil/>
                </Link>
                <button>
                    <BsFillTrashFill/>
                </button>
            </div>
            
         </div>
    )
}

export default PublicacaoPage