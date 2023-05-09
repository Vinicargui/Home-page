import "./estilo.css";

function FormCadastro() {
  return (
    <div className="containerCadastro">
      <div className="formulario">
        <h1>Cadastrar novos produtos</h1>
        <div className="titulo">
          <label htmlFor="">Titulo</label>
          <input type="text" name="titulo" id="" />
        </div>

        <div className="categoria">
          <label htmlFor="">Categoria</label>

          <div className="formRadio">
            <input type="radio" name="categoria" value="pratos" />
            <label htmlFor="">Pratos</label>
          </div>

          <div className="formRadio">
            <input type="radio" name="categoria" value="bebidas" />
            <label htmlFor="">Bebidas</label>
          </div>

          <div className="formRadio">
            <input type="radio" name="categoria" value="sobremesa" />
            <label htmlFor="">Sobremesas</label>
          </div>
        </div>

        <div className="foto">
          <label htmlFor="" className="imagem">Imagem</label>
          <input type="file" name="imagem" />
        </div>

        <div className="valor">
          <label htmlFor="">Valor</label>
          <input type="text" name="valor" />
        </div>

        <div className="descricao">
          <label htmlFor="">Descrição</label>
          <textarea name="descricao" id="" cols="30" rows="10" className="campo"></textarea>
        </div>
        
        <button type="submit" className="btn">Cadastrar</button>
        
        
      </div>
    </div>
  );
}

export default FormCadastro;
