import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import DetallePelicula from "./pages/DetallePelicula";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <main className="app__contenido container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/peliculas/:id" element={<DetallePelicula />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
