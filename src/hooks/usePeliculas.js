import { useState } from 'react';

// Hook personalizado para buscar películas usando OMDb
function usePeliculas(){
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const API_BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_OMDB_KEY;

    //función que realiza la consulta a la api
    const buscarPeliculas = async (titulo, modo) => {
  setCargando(true);
  setError(null);

  const url =
    modo === 'exacta'
      ? `${API_BASE_URL}?t=${titulo}&apikey=${API_KEY}`
      : `${API_BASE_URL}?s=${titulo}&apikey=${API_KEY}`;

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