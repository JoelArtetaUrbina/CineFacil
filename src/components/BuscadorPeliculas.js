import React, {useState} from "react";

function BuscadorPeliculas({onBuscar}) {
    const[titulo, setTitulo] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim()) {
            onBuscar(titulo);
        }
    };

    return (
        <form className="buscador" onSubmit={manejarSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control buscador__input"
                    placeholder="Buscar películas..."
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <button type="submit" className="btn btn-primary buscador__boton">
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default BuscadorPeliculas;