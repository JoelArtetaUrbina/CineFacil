import usePeliculas from "../hooks/usePeliculas";
import BuscadorPeliculas from "../components/BuscadorPeliculas";
import PeliculaCard from "../components/PeliculaCard";
import NotFound from "./NotFound";

function Peliculas({ onToggleFavorito, favoritos }) {
    const { peliculas, cargando, buscarPeliculas } = usePeliculas([]);

    return (
        <div className="peliculas">
            <BuscadorPeliculas onBuscar={buscarPeliculas} />

            {cargando && <p>Cargando películas...</p>}

            {peliculas.length === 0 && !cargando && <NotFound />}

            <div className="row mt-4">
                {peliculas.map((peli) => (
                    <div className="col-md-4 mb-4" key={peli.imdbID}>
                        <PeliculaCard
                            pelicula={peli}
                            onToggleFavorito={onToggleFavorito}
                            esFavorito={favoritos.some((fav) => fav.imdbID === peli.imdbID)}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Peliculas;
