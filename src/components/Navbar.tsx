import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Juegos<span>Kurimi</span></h1>
        </div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Quiénes Somos</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li className="nav-cta"><a href="#tienda">Tienda Online</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;