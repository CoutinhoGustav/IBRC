import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Site.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSpotify, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Site() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkTheme(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const toggleTheme = () => setDarkTheme(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <div className="home-page">
      <header className="header-section">
        <div className="header-logo">
          <p><span>IBRC</span></p>
        </div>

        <nav className="header-nav">
          <div className="mobile-nav-icon" onClick={toggleMobileMenu}>
            <i className="bi bi-list"></i>
          </div>

          <ul className={`header-nav-list ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/servicos" onClick={handleLinkClick}>Serviços</Link></li>
            <li><Link to="/sobre" onClick={handleLinkClick}>Sobre</Link></li>
            
          </ul>

          
          <div className="header-right">
            <div className="theme-change" onClick={toggleTheme}>
              <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
            </div>

            

          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="content-header">Bem-vindo(a)</p>
          <p className="content-body">
            Nós somos a Igreja Batista Regular do Calvário de Ceilândia do Distrito Federal, fundada em 1985.
            <br />
            <span>Programações: Quartas às 20H, Sextas às 19H30 e Domingos às 9H30/19H.</span>
            <br />
            <span>Deseja agendar uma consulta? Clique no botão abaixo.</span>
          </p>
          <div className="hero-btn">
            <button className="resume-btn">Agende sua Consulta</button>
          </div>
        </div>

        {/* Ícones redes sociais */}
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            
        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/CoutinhoGustav/pc3/main/src/assets/img/ImagemExemploConsultorio.jpg"
            alt="Imagem do Consultório Médico"
            className="main-img protected-image"
          />
        </div>
      </section>
    </div>
  );
}
