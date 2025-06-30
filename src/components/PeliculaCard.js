import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PeliculaCard.css'; // Asegurate de tener los estilos listos

function PeliculaCard({ pelicula, esFavorito, onToggleFavorito }) {
  return (
    <div className="pelicula-card card h-100">
      <Link to={`/peliculas/${pelicula.imdbID}`} className="text-decoration-none">
        <img
          src={pelicula.Poster}
          alt={pelicula.Title}
          className="pelicula-card__imagen card-img-top"
        />
        <div className="pelicula-card__contenido card-body">
          <h5 className="pelicula-card__titulo">{pelicula.Title}</h5>
          <p className="pelicula-card__year">{pelicula.Year}</p>
        </div>
      </Link>

      {/* Botón para marcar como favorito si se proporciona la función */}
      {onToggleFavorito && (
        <div className="pelicula-card__acciones card-footer text-end">
          <button
            className={`btn btn-sm ${esFavorito ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => onToggleFavorito(pelicula)}
          >
            {esFavorito ? '❤️ Quitar' : '🤍 Favorito'}
          </button>
        </div>
      )}
    </div>
  );
}

export default PeliculaCard;