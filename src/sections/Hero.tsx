import React from "react";
import "@site/src/css/hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Software a medida para tu empresa.
        </h1>
        <p className="hero-subtitle">
          Desde herramientas empresariales hasta soluciones específicas para tu
          industria. Diseñadas para ser rápidas, confiables y escalables.
        </p>
        <div className="hero-cta-group">
          <a href="#productos" className="hero-cta-primary">
            Ver productos
          </a>
          <a href="mailto:aldo@aldored.com" className="hero-cta-secondary">
            Conversemos →
          </a>
        </div>
      </div>
    </section>
  );
};
