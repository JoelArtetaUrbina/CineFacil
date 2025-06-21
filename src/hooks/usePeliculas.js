import { useState } from 'react';

// Hook personalizado para buscar películas usando OMDb
function usePeliculas(){
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    //función que realiza la consulta a la api
    const buscarPeliculas = async (titulo) => {
        setCargando(true);
        setError(null);
        try {
            const respuesta = await fetch(`https://www.omdbapi.com/?s=${titulo}&apikey=314fe0eb`);
            const datos = await respuesta.json();

            // Verificamos si la respuesta es exitosa
            if (datos.Response === "true") {
                setPeliculas(datos.Search);
            }   else {
                setPeliculas([]);
                console.error("No se encontraron películas.");
            }
        } catch (error) {
            setError(error);
            console.error("Error al buscar películas:", error);
        } finally {
            setCargando(false);
        }
    };

    // el hook devuelve lo necesario para trabajar con la API
    return {
        peliculas,
        cargando,
        error,
        buscarPeliculas
    };
}

export default usePeliculas;