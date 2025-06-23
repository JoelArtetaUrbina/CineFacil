import PeliculaCard from '../components/PeliculaCard';

function Favoritos({ favoritos, onToggleFavorito, props}) {
  return (
    <div className="favoritos">
      <h2>Tus Películas Favoritas</h2>
      <div className="row mt-4">
        {favoritos.length > 0 ? (
          favoritos.map((peli) => (
            <div className="col-md-4 mb-4" key={peli.imdbID}>
              <PeliculaCard
                pelicula={peli}
                esFavorito={true}
                onToggleFavorito={onToggleFavorito}
              />
            </div>
          ))
        ) : (
          <p>No has agregado películas favoritas todavía.</p>
        )}
      </div>
    </div>
  );
}

export default Favoritos;