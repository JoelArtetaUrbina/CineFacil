import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import DetallePelicula from "./pages/DetallePelicula";
import NotFound from "./pages/NotFound";
import Favoritos from "./pages/Favoritos";
import { useState } from "react";
import "./App.css"; // Asegúrate de tener los estilos del layout aquí

function App() {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (pelicula) => {
    const yaExiste = favoritos.find((fav) => fav.imdbID === pelicula.imdbID);
    if (yaExiste) {
      setFavoritos(favoritos.filter((fav) => fav.imdbID !== pelicula.imdbID));
    } else {
      setFavoritos([...favoritos, pelicula]);
    }
  };

  return (
    <div className="layout">
      <div className="layout__contenido">
        <Router>
          <Header favoritos={favoritos} />
          <main className="container mt-4">
            <Routes>
              <Route path="/" element={<Home favoritos={favoritos} toggleFavorito={toggleFavorito}/>} />
              <Route
                path="/peliculas"
                element={
                  <Peliculas
                    onToggleFavorito={toggleFavorito}
                    favoritos={favoritos}
                  />
                }
              />
              <Route
                path="/favoritos"
                element={
                  <Favoritos
                    favoritos={favoritos}
                    onToggleFavorito={toggleFavorito}
                  />
                }
              />
              <Route path="/peliculas/:id" element={<DetallePelicula />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;