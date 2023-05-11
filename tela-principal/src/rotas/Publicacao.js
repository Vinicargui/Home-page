import { useState, useEffect } from 'react';
import './App.css'
import PublicacaoPage from '../componentes/publicacao';
import axios from 'axios';



function Publicacao() {
  const [produtos, setProdutos] = useState([]) 

  const getProdutos = async()=>{

try {
    const response = await axios.get('http://localhost:3001');

    const data =response.data;
    setProdutos(data)
} 
catch (error) {
  console.log(error);
}
    
  }

   useEffect(() => {
   
    getProdutos();
  },[])
  return (
    <div className='publicacaoContainer'>
      {produtos.length > 0 && 
      produtos.map((produto)=> <PublicacaoPage
       titulo={produto.titulo}
       categoria={produto.categoria}
       valor={produto.valor}
      
      />)}     
</div>
  )
      }
export default Publicacao;
