
function PublicacaoPage({id,titulo,categoria,valor,descricao}){
    return(
         <div className="form-publicacao">
            <h1>{titulo}</h1>
            <h1>{categoria}</h1>
            <h1>{valor}</h1>
            
         </div>
    )
}

export default PublicacaoPage