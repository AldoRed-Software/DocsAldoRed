import React from "react";
import Link from "@docusaurus/Link";
import "@site/src/css/hero.css";

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const Hero = () => (
  <section className="hero-container" aria-labelledby="hero-heading">
    <div className="hero-copy">
      <p className="landing-eyebrow">Software para empresas · Chile</p>
      <h1 className="hero-title" id="hero-heading">
        Software que simplifica tu día de trabajo.
      </h1>
      <p className="hero-subtitle">
        Herramientas claras para documentos, reservas y automatización, y un
        equipo que administra tu tecnología.
      </p>
      <div className="hero-actions">
        <Link to="#soluciones" className="landing-button landing-button-primary">
          Ver soluciones <ArrowRight />
        </Link>
        <a href="mailto:contacto@aldored.com" className="landing-underline">
          contacto@aldored.com
        </a>
      </div>
    </div>
    <aside className="hero-highlight" aria-label="Servicio destacado">
      <p className="hero-highlight-label">Administración tecnológica</p>
      <p className="hero-highlight-price">
        UF 1,72<span> /mes</span>
      </p>
      <p className="hero-highlight-copy">
        Tu nube y Google Workspace, en nuestras manos.{" "}
        <Link to="/docs/administracion-tecnologica">Conocer el servicio</Link>
      </p>
    </aside>
  </section>
);
