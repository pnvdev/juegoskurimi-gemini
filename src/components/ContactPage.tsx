import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por comunicarte! Te responderemos a la brevedad.');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="container">
          <h1>Contactanos</h1>
          <p>¿Tenés alguna duda o querés ser revendedor? Estamos para ayudarte.</p>
        </div>
      </header>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Ubicación</h3>
                <p>Buenos Aires, Argentina<br/>(Envíos a todo el país)</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>WhatsApp</h3>
                <p>+54 9 11 1234 5678<br/>Lunes a Viernes 9 a 18hs</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email</h3>
                <p>hola@juegoskurimi.com<br/>ventas@juegoskurimi.com</p>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Envianos un mensaje</h2>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                    placeholder="Tu nombre..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="asunto">Asunto</label>
                  <input 
                    type="text" 
                    id="asunto" 
                    name="asunto" 
                    value={formData.asunto} 
                    onChange={handleChange} 
                    required 
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows={5} 
                    value={formData.mensaje} 
                    onChange={handleChange} 
                    required 
                    placeholder="Escribí tu mensaje aquí..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>¿Hacen envíos al interior?</h4>
              <p>Sí, llegamos a todo el país a través de diversos transportes y correo.</p>
            </div>
            <div className="faq-item">
              <h4>¿Venden por mayor?</h4>
              <p>¡Claro! Tenemos una lista de precios especial para jugueterías y emprendedores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;