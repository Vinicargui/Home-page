import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Edicao from "./rotas/Editar";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Cadastro from "./rotas/Cadastro";
import Publicacao from "./rotas/publicacao";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header className="nav-bar" />
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/publicacao" element={<Publicacao />} />
        <Route path="/:id" element={<Edicao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
