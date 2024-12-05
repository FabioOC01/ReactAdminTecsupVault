// src/components/Alumno.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Alumno = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://api-proyecto-integrador.onrender.com/api/alumnos/');
        setAlumnos(response.data);
      } catch (err) {
        setError('Error al cargar los alumnos');
      } finally {
        setLoading(false);
      }
    };
    fetchAlumnos();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Alumnos</h1>
      {alumnos.length > 0 ? (
        <table className="table table-striped table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grupo</th>
              <th>Sección</th>
              <th>Proyecto</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.grupo ? alumno.grupo.nombre : 'No asignado'}</td>
                <td>{alumno.seccion ? alumno.seccion.nombre : 'No asignado'}</td>
                <td>{alumno.proyecto ? alumno.proyecto.titulo : 'No asignado'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay alumnos disponibles</p>
      )}
    </div>
  );
};

export default Alumno;
