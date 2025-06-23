import { useState } from 'react';

// Hook personalizado para buscar películas usando OMDb
function usePeliculas(){
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    //función que realiza la consulta a la api
    const buscarPeliculas = async (titulo, modo) => {
  setCargando(true);
  setError(null);

  const url =
    modo === 'exacta'
      ? `https://www.omdbapi.com/?t=${titulo}&apikey=314fe0e`
      : `https://www.omdbapi.com/?s=${titulo}&apikey=314fe0e`;

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    if (data.Response === 'True') {
      const resultados = modo === 'exacta' ? [data] : data.Search;
      setPeliculas(resultados);
    } else {
      setPeliculas([]);
      setError('No se encontraron resultados');
    }
  } catch (error) {
    setError('Error al buscar películas');
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