import React from "react";
import "@site/src/css/cta.css";

export const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para transformar tu negocio?</h2>
          <p className="cta-description">
            Contáctanos hoy para conocer cómo nuestras soluciones pueden
            optimizar tus procesos y acelerar el crecimiento de tu empresa.
          </p>
          <div className="cta-buttons">
            <a
              href="mailto:aldo@aldored.com?subject=Quiero%20conocer%20sus%20soluciones"
              className="cta-primary-btn"
            >
              Conversemos
            </a>
            <a href="/docs/intro" className="cta-secondary-btn">
              Ver documentación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
