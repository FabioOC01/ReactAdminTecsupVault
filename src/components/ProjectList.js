import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProyectoList = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await axios.get('https://api-proyecto-integrador.onrender.com/api/proyectos/');
        console.log(response.data);  // Verifica cómo se estructura la respuesta de la API
        setProyectos(response.data);
      } catch (err) {
        setError('Error al cargar los proyectos');
      } finally {
        setLoading(false);
      }
    };
    fetchProyectos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-proyecto-integrador.onrender.com/api/proyectos/${id}`);
      setProyectos(proyectos.filter(proyecto => proyecto.id !== id));
    } catch (err) {
      setError('Error al eliminar el proyecto');
    }
  };

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Lista de Proyectos</h1>
      <Link to="/crear" className="btn btn-primary mb-3">Crear Proyecto</Link>
      <table className="table table-striped table-hover table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Año</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Documento</th>
            <th>Video</th>
            <th>URL Github</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>{proyecto.titulo}</td>
              <td>{proyecto.descripcion}</td>
              <td>{proyecto.año ? proyecto.año.año : 'No asignado'}</td>
              <td>{proyecto.categoria ? proyecto.categoria.nombre : 'No asignado'}</td>  {/* Asegúrate de acceder al nombre de la categoría */}
              <td>
                {proyecto.imagen && (
                  <img src={proyecto.imagen} alt={proyecto.titulo} width="100" />
                )}
              </td>
              <td>
                {proyecto.documento && (
                  <a href={proyecto.documento} target="_blank" rel="noopener noreferrer">Ver Documento</a>
                )}
              </td>
              <td>
                {proyecto.video && (
                  <a href={proyecto.video} target="_blank" rel="noopener noreferrer">Ver Video</a>
                )}
              </td>
              <td>
                {proyecto.url_github && (
                  <a href={proyecto.url_github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
              </td>
              <td>
                <Link to={`/editar/${proyecto.id}`} className="btn btn-warning mr-2">Editar</Link>
                <button onClick={() => handleDelete(proyecto.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProyectoList;
