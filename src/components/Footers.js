import React from 'react';
import './Footer.css';
import Logo from './logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
      <div className="footer-logo">
          <Logo />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/inicio">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="footer-social-icons">
  <a href="https://www.facebook.com/MadArquitectura.estudio" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="mailto:tu-email@gmail.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faEnvelope} />
</a>
  <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
</div>
        <hr className="footer-separator" />
        <div className="footer-copyright">
          <p>© 2023 chunichi chacachin design. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
