import { Link } from 'react-router-dom';
import CarruselPeliculas from '../components/CarruselPeliculas';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero principal */}
      <section className="home__hero text-center">
        <div className="home__contenido container">
          <h1 className="home__titulo">CineFacilito</h1>
          <p className="home__subtitulo">Explora, busca y guarda tus películas favoritas.</p>

          <div className="home__botones mt-4">
            <Link to="/peliculas" className="btn btn-outline-light rounded-pill me-3">
              Explorar Películas
            </Link>
            <Link to="/favoritos" className="btn btn-outline-light rounded-pill">
              Ver Favoritos
            </Link>
          </div>
        </div>
      </section>

      {/* Carrusel de tendencias */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="🎥 Tendencias de hoy"
          apiURL="https://www.omdbapi.com/?s=batman&apikey=314fe0e"
        />
      </section>

      {/* Carrusel de clásicos */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="📼 Clásicos que debes ver"
          apiURL="https://www.omdbapi.com/?s=old&apikey=314fe0e"
        />
      </section>

      {/* Animadas */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="🎨 Películas animadas"
          apiURL="https://www.omdbapi.com/?s=animated&apikey=314fe0e"
        />
      </section>

      {/* De acción */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="🔥 De acción explosiva"
          apiURL="https://www.omdbapi.com/?s=action&apikey=314fe0e"
        />
      </section>

      {/* Divertidas */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="😂 Para reír sin parar"
          apiURL="https://www.omdbapi.com/?s=comedy&apikey=314fe0e"
        />
      </section>

      {/* De terror */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="👻 Terror que te hará saltar"
          apiURL="https://www.omdbapi.com/?s=horror&apikey=314fe0e"
        />
      </section>

      {/* De ciencia ficción */}
      <section className="home__seccion">
        <CarruselPeliculas
          titulo="🚀 Ciencia ficción para soñar"
          apiURL="https://www.omdbapi.com/?s=scifi&apikey=314fe0e"
        />
      </section>
    </div>
  );
}

export default Home;