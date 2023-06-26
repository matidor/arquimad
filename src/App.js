import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import fondo from '../src/components/fondo.svg';
import { FaInstagram, FaPinterest, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import '../src/components/nosotros.css';
import '../src/components/servicios.css';
import '../src/components/whatsapp.css';

import ContactSection from './components/contactSection'; 


const App = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <title>MAD - ARQ</title>
      </Helmet>
      <Header />
      <div id="inicio" className="main-content">
        <img src={fondo} alt="fondo" />
        <h1 className="title">Diseño y Planificación <br /> Arquitectónica.</h1>
        <h2 className="subtitle">Si estás buscando una empresa de construcción y arquitectura confiable y profesional.  <br /> Contáctanos hoy mismo para obtener más información sobre nuestros servicios.<br /> Estaremos encantados de ayudarte a hacer realidad tu proyecto de construcción o remodelación.</h2>
        <button className="contact-button">Contáctanos <FaArrowRight /></button>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><FaInstagram /></span>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><FaPinterest /></span>
          </a>
          <a href="https://www.facebook.com/MadArquitectura.estudio" target="_blank" rel="noopener noreferrer">
            <span className="social-icon"><FaFacebook /></span>
          </a>
        </div>
      </div>

      <div id="nosotros" className="nosotros-section">
  <h2>NOSOTROS</h2>
  <div className="image-container">
    <img src={require('../src/components/img10x15.svg').default} alt="imagen nosotros" />
  </div>
  <div className="text-container">
    <p className="centered-text">
      Nuestro enfoque se centra en la calidad, la innovación y la atención al cliente.<br /> Nos aseguramos de que nuestros clientes estén involucrados en todo el proceso de diseño y construcción,<br /> desde la planificación hasta la finalización del proyecto. <br />
      Ofrecemos una amplia gama de servicios que incluyen el diseño arquitectónico,<br /> la construcción de viviendas y edificios comerciales, <br />la remodelación y renovación de estructuras existentes, y mucho más.<br />
      Si estás interesado en trabajar con nosotros, no dudes en ponerte en contacto.<br /> Estaremos encantados de discutir tus proyectos y ofrecerte una solución personalizada y asequible.<br /> ¡Contáctanos ahora y comencemos a trabajar en tu proyecto!
    </p>
  </div>
  <div className="bottom-text">
    <p>"Nos gusta definirnos como estudio de arquitectura creativo, <br />enfocándonos en la innovación en el diseño y la arquitectura, <br />mediante soluciones resolutivas y alcanzables."</p>
  </div>
</div>
      <hr className="separator-line" />

      <div id="servicios" className="services-section">
        <h2 className="centered-text">SERVICIOS</h2>
        <p>Desde nuestro estudio MAD Arquitectura y Construcción, <br />cada proyecto es el resultado de un proceso de comprensión de las necesidades de nuestro cliente <br /> la creatividad y la experiencia acumulada de nuestro equipo para obtener el mejor resultado.<br /> Conoce con más detalle nuestros servicios y déjanos guiarte en cada paso.</p>

        <div className="custom-section custom-section1">
          <div className="custom-card">
            <div className="custom-card-content">
              <h3>PROYECTO Y DIRECCIÓN DE OBRA</h3>
              <p>Diseñamos arquitectura de calidad, <br /> con un diseño estético pensado exclusivamente para cada proyecto.  <br />El diseño es acorde a la inversión planteada.  <br />Dirigimos y construimos cada uno de nuestros proyectos. <br /> Importancia del trabajo en equipo entre arquitectos,  <br />gremios, proveedoras y sobretodo el cliente.</p>
            </div>
          </div>
          <div className="custom-section-image">
            <img src={require('../src/components/servicios1.svg').default} alt="Imagen" />
          </div>
        </div>

        <div className="bottom-text-services">
          <p>"Somos responsables de saber emplear los recursos justos para resolver de manera eficiente un proyecto. <br />Muchas veces en la sencillez y en la re-interpretación de la tradición<br /> se encuentra la solución más inteligente a un problema."</p>
        </div>

        <div className="custom-section custom-section2 custom-section-reverse">
          <div className="custom-section-image2">
            <img src={require('../src/components/servicios2.svg').default} alt="Imagen" />
          </div>
          <div className="custom-card">
            <div className="custom-card-content">
              <h3>CONSTRUCCIÓN</h3>
              <p>De obras civiles y privadas, con un sistema integral de soluciones, abarcando todos los servicios necesarios para la materialización, puesta en marcha y mantenimiento de obra</p>
            </div>
          </div>
        </div>

        <div className="custom-section custom-section3">
          <div className="custom-card">
            <div className="custom-card-content">
              <h3>DISEÑO ARQUITECTÓNICO</h3>
              <p>A la hora de plantearnos llevar a cabo una obra, hay que tener en cuenta el trabajo previo que es imprescindible para poder plantear la mejor versión posible del espacio del que se dispone.</p>
            </div>
          </div>
          <div className="custom-section-image">
            <img src={require('../src/components/servicios3.svg').default} alt="Imagen" />
          </div>
        </div>

        <div className="custom-section custom-section4 custom-section-reverse">
          <div className="custom-section-image">
            <img src={require('../src/components/servicios4.svg').default} alt="Imagen" />
          </div>
          <div className="custom-card">
            <div className="custom-card-content">
              <h2>Servicios a empresas</h2>
              <p>Gas Instalación de cañerías, cambio de regulador de presión, detección de perdidas con instrumental (scanners, explosímetro) por profesional altamente capacitado (gasista matriculado), instalación y reparación de estufas, cocinas, calefónes termotanques y calderas.

                Electricidad Detección de fallas, tableros eléctricos, reparación e instalación de luminarias, tomas corrientes, cableado y recableado, etc.

                Piscinas Realización y diseño de piscinas adaptadas y personalizadas.

                Pintura Servicio integral de pintura con amplia experiencia en viviendas u oficinas. Obras completas, interiores, exteriores, revestimientos decorativos, trabajos en altura.

                Terminaciones Cielo raso, pisos y recubrimientos, cubierta, fachadas en general.</p>
            </div>
          </div>
        </div>


        <div className="custom-section custom-section3">
          <div className="custom-card">
            <div className="custom-card-content">
              <h2>Construcción de estructuras de Steel Framing.</h2>
              <p>El Steel Frame es un sistema único en el mercado, tanto por sus altas prestaciones autoportantes como por su grado de industralización, su rapidez de montaje en obra y sus alto estándar de calidad.</p>
              <h3>Características principales:</h3>
    <p>
      +Resistencia: los paneles de acero utilizados en las construcciones son altamente resistentes a los impactos y a las inclemencias del tiempo.<br/>
      +Durabilidad: desde los perfiles de acero galvanizado utilizados para armar la estructura hasta las placas y materiales que se emplean como terminación, todos poseen una larga durabilidad que les permite mantenerse intactos durante décadas.<br/>
      +Flexibilidad arquitectónica: se adapta a cualquier tipo de proyecto, con practicidad y limpieza para remodelaciones, ampliaciones y refacciones. Además, implica un menor tiempo de ejecución.<br/>
      +Sustentable: se reduce el desperdicio de materiales y el consumo de agua.
    </p>
              
          </div>
        </div>
        <div className="custom-section-image">
          <img src={require('../src/components/servicios4steel.svg').default} alt="Imagen" />
        </div>
      </div>

      <div className="custom-section custom-section5 custom-section-reverse ">
        <div className="custom-section-image">
          <img src={require('../src/components/servicios6.svg').default} alt="Imagen" />
        </div>
        <div className="custom-card">
          <div className="custom-card-content">
            <h3>Servicio de Diseño de Interiores</h3>
            <p>Ofrecemos servicios de diseño de interiores que transforman los espacios en entornos funcionales, estéticos y armoniosos. Nuestro equipo de diseñadores trabaja estrechamente con los clientes para comprender sus necesidades y preferencias, y luego crea diseños personalizados que reflejan su estilo y personalidad.</p>
          </div>
        </div>

      </div>

      <ContactSection /> {/* Agrega la sección de contacto aquí */}

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/2254616834"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">¿Cómo podemos ayudarte?</span>
      </a>
    </div>
    </div >
  );
};

export default App;
