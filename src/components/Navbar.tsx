import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>Juegos<span>Kurimi</span></h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link-btn">Inicio</Link></li>
          <li><Link to="/productos" className="nav-link-btn">Productos</Link></li>
          <li><Link to="/contacto" className="nav-link-btn">Contacto</Link></li>
          <li className="nav-cta"><Link to="/productos" className="nav-link-btn cta">Tienda Online</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;