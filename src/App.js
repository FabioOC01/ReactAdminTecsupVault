import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; 
import Categoria from "./components/CategoriaList";
import Ano from "./components/Ano";
import Grupo from "./components/Grupo";
import Alumno from "./components/Alumno";
import Seccion from "./components/Seccion";
import ProyectoList from './components/ProjectList';
import CrearProyecto from './components/CrearProyecto';
import ActualizarProyecto from './components/ActualizarProyecto';
import CategoriaList from './components/CategoriaList';
import CrearCategoria from './components/CrearCategoria';
import EditarCategoria from './components/EditarCategoria';

function App() {
  return (
    <Router>
      <Navbar /> {/* Mostrar el Navbar */}
      <Routes>
        
        <Route path="/anos" element={<Ano />} />
        <Route path="/grupos" element={<Grupo />} />
        <Route path="/alumnos" element={<Alumno />} />
        <Route path="/secciones" element={<Seccion />} />
        <Route path="/" element={<ProyectoList />} />
        <Route path="/crear" element={<CrearProyecto />} />
        <Route path="/editar/:id" element={<ActualizarProyecto />} />
        <Route path="/categorias" element={<CategoriaList />} />
        <Route path="/categorias/crear" element={<CrearCategoria />} />
        <Route path="/categorias/editar/:id" element={<EditarCategoria />} />
      
        <Route path="/" element={<h1>Bienvenido a Tecsup Vault</h1>} /> {/* Página de inicio */}
      </Routes>
    </Router>
  );
}

export default App;
