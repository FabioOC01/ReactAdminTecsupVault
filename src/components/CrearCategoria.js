import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Usamos useNavigate aquí

const CrearCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Usamos useNavigate aquí

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const newCategoria = { nombre };
      await axios.post('https://api-proyecto-integrador.onrender.com/api/categorias/', newCategoria);
      navigate('/categorias');  // Redirigimos a la lista de categorías
    } catch (error) {
      setError('Error al crear la categoría');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Crear Categoría</h1>
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
          {loading ? 'Cargando...' : 'Crear Categoría'}
        </button>
      </form>
    </div>
  );
};

export default CrearCategoria;

