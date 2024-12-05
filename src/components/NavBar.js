import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tecsup Vault Admin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/anos">
                Años
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grupos">
                Grupos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumnos">
                Alumnos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/secciones">
                Secciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
