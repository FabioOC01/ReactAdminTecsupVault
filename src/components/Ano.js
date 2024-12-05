import React, { useEffect, useState } from "react";
import axios from "axios";

const Ano = () => {
  const [anos, setAnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnos = async () => {
      try {
        const response = await axios.get("https://api-proyecto-integrador.onrender.com/api/anos/");
        setAnos(response.data);
      } catch (err) {
        setError("Error al cargar los años.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnos();
  }, []);

  if (loading) return <p>Cargando años...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Años</h1>
      {anos.length > 0 ? (
        <table className="table table-striped table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Año</th>
              <th>Semestre</th>
            </tr>
          </thead>
          <tbody>
            {anos.map((ano) => (
              <tr key={ano.id}>
                <td>{ano.año}</td>
                <td>{ano.semestre === 1 ? "Primer Semestre" : "Segundo Semestre"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay años disponibles.</p>
      )}
    </div>
  );
};

export default Ano;
