import'./estilo.css'

function FormCadastro() {
  return (
    <div className="form-cadastro">
        <h1>Cadastro de novos produtos</h1>
        <div className="titulo">
          <label htmlFor="">Titulo</label>
          <input type="text" name="titulo" id="" />
        </div>

        <div className="categoria">
        <input type="checkbox" name="categoria" value="pratos"  />
          <label htmlFor="">Pratos</label>
          <input type="checkbox" name="categoria" value="bebidas" />
          <label htmlFor="">Bebidas</label>
          <input type="checkbox" name="categoria" value="sobremesa" />
          <label htmlFor="">Sobremesas</label>
        </div>

        <div className="foto">
            <label htmlFor="">Imagem</label>
            <input type="file" name="imagem" />
        </div>

        <div className="valor">
            <label htmlFor="">Valor</label>
            <input type="text" name="valor" />
        </div>

        <div className="descricao">
            <label htmlFor="">Descrição</label>
            <textarea name="descricao" id="" cols="30" rows="10"></textarea>
        </div>

      </div>
  );
}

export default FormCadastro;
