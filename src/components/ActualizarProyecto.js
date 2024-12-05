import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarProyecto = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [documento, setDocumento] = useState(null);
  const [video, setVideo] = useState(null);
  const [urlGithub, setUrlGithub] = useState('');
  const [categoria, setCategoria] = useState('');
  const [año, setAño] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Cargar los datos del proyecto al cargar el formulario
  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`https://api-proyecto-integrador.onrender.com/api/proyectos/${id}`);
        const proyecto = response.data;
        setTitulo(proyecto.titulo);
        setDescripcion(proyecto.descripcion);
        setCategoria(proyecto.categoria);
        setAño(proyecto.año);
      } catch (err) {
        setError('Error al cargar los datos del proyecto');
      }
    };

    fetchProyecto();
  }, [id]);

  // Manejo del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);
    formData.append('documento', documento);
    formData.append('video', video);
    formData.append('url_github', urlGithub);
    formData.append('categoria', categoria);
    formData.append('año', año);

    try {
      await axios.put(`https://api-proyecto-integrador.onrender.com/api/proyectos/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/proyectos'); // Redirige al listado de proyectos después de la actualización
    } catch (err) {
      setError('Error al actualizar el proyecto');
    }
  };

  return (
    <div className="container">
      <h2>Actualizar Proyecto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen</label>
          <input
            type="file"
            id="imagen"
            className="form-control"
            onChange={(e) => setImagen(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="documento">Documento</label>
          <input
            type="file"
            id="documento"
            className="form-control"
            onChange={(e) => setDocumento(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video</label>
          <input
            type="file"
            id="video"
            className="form-control"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="urlGithub">URL de GitHub</label>
          <input
            type="url"
            id="urlGithub"
            className="form-control"
            value={urlGithub}
            onChange={(e) => setUrlGithub(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <input
            type="text"
            id="categoria"
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="año">Año</label>
          <input
            type="number"
            id="año"
            className="form-control"
            value={año}
            onChange={(e) => setAño(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Actualizar Proyecto
        </button>
      </form>
    </div>
  );
};

export default ActualizarProyecto;
