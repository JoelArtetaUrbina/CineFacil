import React from 'react';
import './Header.css';

function Header(){
    return(
        <header className="header navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <h1 className="header__titulo navbar-brand mb-0">🎬 Cine Fácil</h1>
        </div>
    </header>
    )
}

export default Header;