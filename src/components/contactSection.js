import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id='contacto' className="contact-section">
      <div className="form-section">
        <h2>Contacto</h2>
        <div className="form-columns">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="name">Tu nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tu email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Tu teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Tu teléfono"
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
