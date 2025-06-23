import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ favoritos }) {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__brand">🎬 CineFacilito</Link>

        <nav className="header__nav">
          <NavLink to="/peliculas" className="header__link">Películas</NavLink>
          <NavLink to="/favoritos" className="header__link">
            Favoritos
            {favoritos?.length > 0 && (
              <span className="header__badge">{favoritos.length}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;