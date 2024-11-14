import React from 'react';
import './Style.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li className="boton"><a href="/">Menu</a></li>
          <li className="boton"><a href="/login">Iniciar Sesion</a></li>
          <li className="boton"><a href="/manual">Ayuda</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
