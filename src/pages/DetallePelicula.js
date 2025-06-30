import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DetallePelicula.css';
import { obtenerDetallePelicula } from '../services/apiPeliculas';

function DetallePelicula() {
    // Obtenemos el ID de la película desde la URL
  const { id } = useParams();
  // Estado para almacenar los datos de la película seleccionada
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    const data = await obtenerDetallePelicula(id);
    setPelicula(data);
  };
  fetchData();
}, [id]);

  // Mientras se carga la data, mostramos un mensaje
  if (!pelicula) return <p>Cargando detalles...</p>;

  // Cuando ya tenemos la data, mostramos los detalles de la película
  return (
    <div className="detalle-pelicula container">
      <h2>{pelicula.Title}</h2>
      <img src={pelicula.Poster} alt={pelicula.Title} />
      <p><strong>Año:</strong> {pelicula.Year}</p>
      <p><strong>Duración:</strong> {pelicula.Runtime}</p>
      <p><strong>Género:</strong> {pelicula.Genre}</p>
      <p><strong>Director:</strong> {pelicula.Director}</p>
      <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
    </div>
  );
}

export default DetallePelicula;
