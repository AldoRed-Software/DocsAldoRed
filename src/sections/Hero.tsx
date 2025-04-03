import React from "react";
import "@site/src/css/hero.css";
import heroImage from "@site/static/img/screen.png";

export const Hero = () => {
  return (
    <section className="hero-container container">
      <div className="hero-content">
        <h1 className="hero-title">
          AldoRed: Software Solutions for Your Business
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
        <img src={heroImage} alt="Mockup de software AldoRed" />
      </div>
    </section>
  );
};
