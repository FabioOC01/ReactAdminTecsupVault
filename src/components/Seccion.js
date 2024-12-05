import React, { useEffect, useState } from "react";
import axios from "axios";

const Seccion = () => {
  const [secciones, setSecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSecciones = async () => {
      try {
        const response = await axios.get("https://api-proyecto-integrador.onrender.com/api/secciones/");
        setSecciones(response.data);
      } catch (err) {
        setError("Error al cargar las secciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchSecciones();
  }, []);

  if (loading) return <p>Cargando secciones...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Secciones</h1>
      {secciones.length > 0 ? (
        <table className="table table-striped table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {secciones.map((seccion) => (
              <tr key={seccion.id}>
                <td>{seccion.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay secciones disponibles.</p>
      )}
    </div>
  );
};

export default Seccion;
