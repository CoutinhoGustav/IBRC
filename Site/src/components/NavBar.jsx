import React from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Simula remoção de token/dados de sessão
    navigate("/login");   // Redireciona para tela de login
  };

  return (
    <div className="d-flex">
      <div className="sidebar p-3">
        <h4>Menu</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/perfil">Perfil</Link>
          </li>

          <li className="nav-item"><strong>Aeronaves</strong></li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/aeronaves/voos">Voos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/aeronaves/aeronaves">Aeronaves</Link>
          </li>

          <li className="nav-item"><strong>Ocorrências</strong></li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/ocorrencias">Novo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/consulta">Consulta</Link>
          </li>

          <li className="nav-item mt-4">
            <button
              className="btn btn-outline-danger w-100"
              onClick={handleLogout}
            >
              Sair
            </button>
          </li>
        </ul>
      </div>

      <div className="content flex-grow-1 p-3">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
