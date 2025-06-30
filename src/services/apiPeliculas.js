// src/services/apiPeliculas.js

const API_BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_OMDB_KEY;

/**
 * Busca películas por título
 * @param {string} titulo - Término de búsqueda
 */
export const buscarPeliculas = async (titulo) => {
  try {
    const res = await fetch(`${API_BASE_URL}?s=${titulo}&apikey=${API_KEY}`);
    const data = await res.json();
    return data.Response === 'True' ? data.Search : [];
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};

/**
 * Obtiene los detalles completos de una película por ID
 * @param {string} id - IMDb ID de la película
 */
export const obtenerDetallePelicula = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error al obtener detalle:', error);
    return null;
  }
};