import React from "react";  
import usePeliculas from "../hooks/usePeliculas";
import BuscadorPeliculas from "../components/BuscadorPeliculas";
import PeliculaCard from "../components/PeliculaCard";

function Peliculas() {
    const { peliculas, cargando, error, buscarPeliculas } = usePeliculas([]);

    return (
        <div className="peliculas">
            <BuscadorPeliculas onBuscar={buscarPeliculas} />

            {cargando && <p>Cargando películas...</p>}
            {error && <p>Error al cargar las películas: {error.message}</p>}

            <div className="row mt-4">
                {peliculas.map((peli) => (
                    <div className="col-md-4 mb-4" key={peli.imdbID}>
                        <PeliculaCard pelicula={peli} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Peliculas;
