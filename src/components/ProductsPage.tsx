import React from 'react';
import './ProductsPage.css';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const allProducts: Product[] = [
  { id: 1, name: 'Auto Aventurero', category: 'Vehículos', image: '/assets/products/auto-aventurero.png', description: 'Auto de madera resistente para grandes viajes.' },
  { id: 2, name: 'Banco de Descarga', category: 'Motricidad', image: '/assets/products/banco-descarga.png', description: 'Estimula la coordinación y descarga de energía.' },
  { id: 3, name: 'Bichito', category: 'Figuras', image: '/assets/products/bichito.png', description: 'Simpático bichito para juegos imaginativos.' },
  { id: 4, name: 'Bloques Chicos', category: 'Construcción', image: '/assets/products/bloques-chicos.png', description: 'Set de bloques para crear mundos infinitos.' },
  { id: 5, name: 'Caracol de Arrastre', category: 'Arrastre', image: '/assets/products/caracol.png', description: 'Compañero ideal para los primeros pasos.' },
  { id: 6, name: 'Carro Andador', category: 'Andadores', image: '/assets/products/carro-andador.png', description: 'Andador firme con bloques gigantes.' },
  { id: 7, name: 'Chango de Super', category: 'Juego Simbólico', image: '/assets/products/chango-super.png', description: 'Para jugar a las compras con estilo.' },
  { id: 8, name: 'Cubo Fauna', category: 'Encastre', image: '/assets/products/cubo-fauna.png', description: 'Descubrí los animales mientras encastrás.' },
  { id: 9, name: 'Ensarte Matemático', category: 'Educativo', image: '/assets/products/ensarte-matematico.png', description: 'Aprendé números y formas jugando.' },
  { id: 10, name: 'Formitas', category: 'Geometría', image: '/assets/products/formitas.png', description: 'Explorá las formas geométricas básicas.' },
  { id: 11, name: 'Pizarra Aqua', category: 'Creatividad', image: '/assets/products/pizarra.png', description: 'Espacio para dibujar y crear sin límites.' },
  { id: 12, name: 'Torre de Aprendizaje', category: 'Montessori', image: '/assets/products/torre-aprendizaje.png', description: 'Fomentando la independencia en el hogar.' },
  { id: 13, name: 'Torre de Colores', category: 'Apilables', image: '/assets/products/torre-colores.png', description: 'Desafío de equilibrio y color.' }
];

const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">
      <header className="products-hero">
        <div className="container">
          <h1>Catálogo Completo</h1>
          <p>Explorá nuestra línea de juguetes didácticos diseñados para crecer jugando.</p>
        </div>
      </header>
      
      <section className="catalog-section">
        <div className="container">
          <div className="catalog-grid">
            {allProducts.map(product => (
              <div key={product.id} className="catalog-card">
                <div className="catalog-image" style={{ backgroundImage: `url(${product.image})` }}>
                  <div className="category-tag">{product.category}</div>
                </div>
                <div className="catalog-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button className="view-button">Consultar Stock</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;