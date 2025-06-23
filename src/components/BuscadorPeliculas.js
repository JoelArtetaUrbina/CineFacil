import { useState } from 'react';

function BuscadorPeliculas({ onBuscar }) {
  const [titulo, setTitulo] = useState('');
  const [modo, setModo] = useState('multiple'); // 'multiple' o 'exacta'

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      onBuscar(titulo, modo); // ahora enviamos también el modo de búsqueda
    }
  };

  return (
    <form className="buscador" onSubmit={manejarEnvio}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Busca una película..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <select
          className="form-select"
          value={modo}
          onChange={(e) => setModo(e.target.value)}
        >
          <option value="multiple">Búsqueda general</option>
          <option value="exacta">Búsqueda exacta</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default BuscadorPeliculas;