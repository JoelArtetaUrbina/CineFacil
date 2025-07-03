import { useState, useEffect, useRef } from 'react';
import { buscarPeliculas } from '../services/apiPeliculas';
import { useNavigate } from 'react-router-dom';
import '../styles/CarruselPeliculas.css';

function CarruselPeliculas({ titulo, terminoBusqueda, favoritos, onToggleFavorito }) {
  const [peliculas, setPeliculas] = useState([]);
  const contenedorRef = useRef(null);
  const scrollX = useRef(0);
  const isHovering = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const pagina1 = await buscarPeliculas(terminoBusqueda, 1);
        const pagina2 = await buscarPeliculas(terminoBusqueda, 2);// opcional
        const todas = [...pagina1, ...pagina2].filter(p => p.Poster && p.Poster !== 'N/A');
        setPeliculas(todas);
      } catch (error) {
        console.error("Error al obtener películas:", error);
        setPeliculas([]);
      }
    };

    obtenerPeliculas();
  }, [terminoBusqueda]);


  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    const moverScroll = () => {
      const maxScroll = contenedor.scrollWidth - contenedor.clientWidth;
      if (!isHovering.current) {
        if (scrollX.current >= maxScroll) {
          scrollX.current = 0;
        } else {
          scrollX.current += 1.5;
        }
        contenedor.scrollTo({ left: scrollX.current, behavior: 'auto' });
      }
    };

    const interval = setInterval(moverScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="carrusel__titulo">{titulo}</h3>
      <div className="carrusel__contenedor">
        <div className="carrusel__lista">
          {[...peliculas, ...peliculas].map((peli, index) => (
            <div
              className="carrusel__item"
              key={`${peli.imdbID}-${index}`}
              onClick={() => navigate(`/peliculas/${peli.imdbID}`)}
            >
              <img
                className="carrusel__poster"
                src={peli.Poster}
                alt={peli.Title}
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
          ))}
        </div>
      </div>
    </>
  );
}

export default CarruselPeliculas;