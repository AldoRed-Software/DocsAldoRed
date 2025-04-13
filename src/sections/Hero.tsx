import React from "react";
import "@site/src/css/hero.css";

export const Hero = () => {
  return (
    <section className="hero-container container">
      <div className="hero-content">
        <h1 className="hero-title">
          AldoRed: Soluciones de Software a medida para tu negocio
        </h1>
        <p className="hero-subtitle">
          Desarrollamos soluciones personalizadas para impulsar la eficiencia y
          el crecimiento de tu empresa.
        </p>
        <a href="/contact" className="hero-cta">
          Contáctanos
        </a>
      </div>
      <div className="hero-image">
        <img src="/img/screen.png" alt="Mockup de software AldoRed" />
      </div>
    </section>
  );
};
