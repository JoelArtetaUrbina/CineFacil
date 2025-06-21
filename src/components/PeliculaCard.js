import React from 'react';
import './PeliculaCard.css';

function PeliculaCard({ pelicula }) {
    return (
        <div className="card pelicula-card h-100">
            <img 
            src={pelicula.Poster !== 'N/A' ? pelicula.Poster : 'https://via.placeholder.com/300x445?text=Sin+imagen'}
            className="pelicula-card__imagen card-img-top"
             alt={pelicula.Title}
             />
            <div className="card-body pelicula-card__contenido">
                <h5 className="pelicula-card__titulo card-title">{pelicula.Title}</h5>
                <p className="pelicula-card__year card-text">Año: {pelicula.Year}</p>
            </div>
        </div>
    );
}

export default PeliculaCard;