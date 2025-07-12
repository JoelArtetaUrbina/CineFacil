import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import '../styles/NotFound.css'; // Asegúrate de tener este archivo CSS

function NotFound() {
  const location = useLocation();
  const esRutaNoValida = location.pathname === '*' || location.pathname === '/404';

  return (
    <div className="notfound">
      <h2 className="notfound__titulo">
        {esRutaNoValida ? 'Error 404 – Página no encontrada' : 'Sin resultados'}
      </h2>
      <p className="notfound__mensaje">
        {esRutaNoValida
          ? 'La ruta que intentaste acceder no existe.'
          : 'No se encontraron películas con el término ingresado.'}
      </p>

      <Link
        to={esRutaNoValida ? '/' : '/'}
        className="btn btn-outline-light notfound__boton"
      >
        {esRutaNoValida ? 'Volver a inicio' : 'Volver al catálogo'}
      </Link>
    </div>
  );
}

export default NotFound;