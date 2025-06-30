import { useState, useEffect, useRef } from 'react';
import '../styles/CarruselPeliculas.css';
import { useNavigate } from 'react-router-dom';
import { buscarPeliculas } from '../services/apiPeliculas';

function CarruselPeliculas({ titulo, terminoBusqueda, favoritos, onToggleFavorito }) {
  const [peliculas, setPeliculas] = useState([]);
  const contenedorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const data = await buscarPeliculas(terminoBusqueda);
        setPeliculas(data);
      } catch (err) {
        console.error("Error al obtener películas:", err);
        setPeliculas([]);
      }
    };

    obtenerPeliculas();
  }, [terminoBusqueda]);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    let scrollX = 0;

    const interval = setInterval(() => {
      if (contenedor) {
        const scrollMax = contenedor.scrollWidth - contenedor.clientWidth;
        if (contenedor.scrollLeft >= scrollMax - 1) {
          contenedor.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollX += 1.5;
          contenedor.scrollTo({ left: scrollX, behavior: "smooth" });
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const peliculasConPoster = peliculas.filter(
    (peli) => peli.Poster && peli.Poster !== 'N/A'
  );

  return (
    <div className="carrusel">
      <h3 className="carrusel__titulo">{titulo}</h3>
      <div className="carrusel__contenedor" ref={contenedorRef}>
        {peliculasConPoster.length > 0 ? (
          peliculasConPoster.map((peli) => (
            <div
              className="carrusel__item"
              key={peli.imdbID}
              onClick={() => navigate(`/peliculas/${peli.imdbID}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={peli.Poster}
                alt={peli.Title}
                className="carrusel__poster"
              />
              <button
                className="carrusel__favorito"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorito(peli);
                }}
              >
                {favoritos.some(fav => fav.imdbID === peli.imdbID) ? '★' : '☆'}
              </button>
            </div>
          ))
        ) : (
          <p className="carrusel__mensaje">No se encontraron películas</p>
        )}
      </div>
    </div>
  );
}

export default CarruselPeliculas;