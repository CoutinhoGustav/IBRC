import React from "react";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" id="heroSection">
        <div className="hero-content">
          <p className="content-header">Sejam Bem-Vindos a IBRC!</p>
          <p className="content-body">
            Somos a Igreja Batista Regular do Calvário do Distrito Federal.<br />
            Programações: Quartas-Feiras às 20H, Sextas-Feiras às 19H30 e Domingo às 9H30/19H.
            <br />Deseja mais informações? Clique no botão abaixo.
          </p>
          <div className="hero-btn">
            <button className="resume-btn">Clique Aqui</button>
          </div>
        </div>

        {/* Imagem */}
        <div className="hero-image">
          <img src="img/hero-img.png" alt="Hero" className="main-img" />
        </div>

        {/* Social icons */}
        <div className="social-icon-list">
          <a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>
          <a href="https://open.spotify.com/show/3RC1O9rkXKZCRGRWXLrih8"><i className="bi bi-spotify"></i></a>
          <a href="https://www.instagram.com/ibrc_df"><i className="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/@igrejabatistaregulardocalv5714"><i className="bi bi-youtube"></i></a>
          <a href="https://www.whatsapp.com"><i className="bi bi-whatsapp"></i></a>
        </div>
      </section>
    </div>
  );
}
