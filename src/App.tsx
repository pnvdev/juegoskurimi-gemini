import React from 'react';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import './App.css';

const FeaturedProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Caracol de Arrastre', price: '$4.500', image: '/assets/featured-1.png' },
    { id: 2, name: 'Cubo Fauna', price: '$6.200', image: '/assets/featured-2.png' },
    { id: 3, name: 'Ensarte Matemático', price: '$5.800', image: '/assets/featured-3.png' },
  ];

  return (
    <section id="productos" className="featured-section">
      <div className="container">
        <h2 className="section-title">Productos Destacados</h2>
        <p className="section-subtitle">Nuestra selección de juguetes favoritos para este mes.</p>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="price">{product.price}</span>
                <button className="add-to-cart">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <FeaturedProducts />
      
      <section id="puzzles" className="puzzles-section">
        <div className="container">
          <div className="puzzles-header">
            <h2 className="section-title">Nuevos Rompecabezas</h2>
            <p className="section-subtitle">¡Llegó el cartón! Descubrí nuestra nueva línea de rompecabezas coloridos y resistentes.</p>
          </div>
          <div className="puzzles-grid">
            <div className="puzzle-item">
              <img src="/assets/hero-2.png" alt="Puzzle Bichito" />
              <div className="puzzle-overlay">
                <h3>Línea Bichitos</h3>
                <p>24 piezas de pura diversión.</p>
              </div>
            </div>
            <div className="puzzle-item">
              <img src="/assets/hero-1.png" alt="Puzzle Auto" />
              <div className="puzzle-overlay">
                <h3>Línea Aventura</h3>
                <p>Desafíos que estimulan la mente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>Juegos Kurimi es una empresa familiar apasionada por la creación de juguetes didácticos que inspiran el aprendizaje a través del juego natural.</p>
              <p>Cada pieza es fabricada con amor y dedicación, pensando en el desarrollo motriz y creativo de los más pequeños.</p>
              <button className="secondary-button">Conocenos Más</button>
            </div>
            <div className="about-image">
               <img src="/assets/hero-4.png" alt="Torre Kurimi" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <h3>Juegos<span>Kurimi</span></h3>
              <p>Fabricación artesanal de juguetes didácticos en madera.</p>
            </div>
            <div className="footer-links">
              <h4>Enlaces</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contacto</h4>
              <p>Email: hola@juegoskurimi.com</p>
              <p>WhatsApp: +54 9 11 1234 5678</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Juegos Kurimi. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;