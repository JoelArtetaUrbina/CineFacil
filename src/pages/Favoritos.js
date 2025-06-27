import PeliculaCard from '../components/PeliculaCard';
import './Favoritos.css';

function Favoritos({ favoritos, onToggleFavorito, props}) {
  return (
    <div className="favoritos">
  <h2>Tus Películas Favoritas</h2>

  {favoritos.length > 0 ? (
    <div className="favoritos__lista">
      {favoritos.map((peli) => (
        <div key={peli.imdbID}>
          <PeliculaCard
            pelicula={peli}
            esFavorito={true}
            onToggleFavorito={onToggleFavorito}
          />
        </div>
      ))}
    </div>
  ) : (
    <p className="favoritos__mensaje">No has agregado películas favoritas todavía.</p>
  )}
</div>
  );
}

export default Favoritos;