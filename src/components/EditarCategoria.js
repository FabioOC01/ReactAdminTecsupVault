import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';  // Usamos useNavigate aquí

const EditarCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();  // Para obtener el ID de la categoría a editar
  const navigate = useNavigate();  // Usamos useNavigate aquí

  useEffect(() => {
    // Cargar los datos de la categoría cuando el componente se monte
    const fetchCategoria = async () => {
      try {
        const response = await axios.get(`https://api-proyecto-integrador.onrender.com/api/categorias/${id}`);
        setNombre(response.data.nombre);
      } catch (error) {
        setError('Error al cargar los datos de la categoría');
      }
    };

    fetchCategoria();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const updatedCategoria = { nombre };
      await axios.put(`https://api-proyecto-integrador.onrender.com/api/categorias/${id}/`, updatedCategoria);
      navigate('/categorias');  // Redirige a la lista de categorías después de editar
    } catch (error) {
      setError('Error al actualizar la categoría');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Editar Categoría</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? 'Cargando...' : 'Actualizar Categoría'}
        </button>
      </form>
    </div>
  );
};

export default EditarCategoria;
