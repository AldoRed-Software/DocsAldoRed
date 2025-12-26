import React from "react";
import "@site/src/css/hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">
            Soluciones innovadoras para tu empresa
          </span>
        </div>
        <h1 className="hero-title">
          Software personalizado que acelera tu negocio
        </h1>
        <p className="hero-subtitle">
          Desde herramientas empresariales hasta soluciones específicas para tu
          industria. Diseñadas para ser intuitivas, confiables y escalables.
        </p>
        <div className="hero-cta-group">
          <a href="#productos" className="hero-cta-primary">
            Explorar productos
          </a>
          <a href="/docs/intro" className="hero-cta-secondary">
            Ver documentación →
          </a>
        </div>
      </div>
    </section>
  );
};
