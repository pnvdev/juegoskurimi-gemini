import React, { useState, useEffect } from 'react';
import './Slideshow.css';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/hero-1.png',
    title: 'Aventuras en Madera',
    subtitle: 'Nuestros autos están listos para la próxima gran aventura de tus hijos.'
  },
  {
    id: 2,
    image: '/assets/hero-2.png',
    title: 'Amigos Bichitos',
    subtitle: 'Diseños que estimulan la imaginación y el amor por la naturaleza.'
  },
  {
    id: 3,
    image: '/assets/hero-3.png',
    title: 'Color y Diversión',
    subtitle: 'Aprendizaje lúdico con colores vibrantes y formas seguras.'
  },
  {
    id: 4,
    image: '/assets/hero-4.png',
    title: 'Torres de Ingenio',
    subtitle: 'Desarrollando la motricidad y la paciencia bloque a bloque.'
  }
];

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <button className="cta-button">Ver Colección</button>
          </div>
        </div>
      ))}
      <button className="nav-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="nav-button next" onClick={nextSlide}>&#10095;</button>
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;