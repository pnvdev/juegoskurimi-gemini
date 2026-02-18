import React from 'react';
import './Navbar.css';

interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
          <h1>Juegos<span>Kurimi</span></h1>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => setPage('home')} className="nav-link-btn">Inicio</button></li>
          <li><button onClick={() => setPage('products')} className="nav-link-btn">Productos</button></li>
          <li><button className="nav-link-btn">Quiénes Somos</button></li>
          <li><button className="nav-link-btn">Contacto</button></li>
          <li className="nav-cta"><button onClick={() => setPage('products')} className="nav-link-btn cta">Tienda Online</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;