import React, { useEffect, useState } from "react";
import axios from "axios";

const Grupo = () => {
  const [grupos, setGrupos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await axios.get("https://api-proyecto-integrador.onrender.com/api/grupos/");
        setGrupos(response.data);
      } catch (err) {
        setError("Error al cargar los grupos.");
      } finally {
        setLoading(false);
      }
    };

    fetchGrupos();
  }, []);

  if (loading) return <p>Cargando grupos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Grupos</h1>
      {grupos.length > 0 ? (
        <table className="table table-striped table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Sección</th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((grupo) => (
              <tr key={grupo.id}>
                <td>{grupo.nombre}</td>
                <td>{grupo.seccion ? grupo.seccion.nombre : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay grupos disponibles.</p>
      )}
    </div>
  );
};

export default Grupo;
