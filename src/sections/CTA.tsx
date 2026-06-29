import React from "react";
import "@site/src/css/cta.css";

export const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">¿Listo para empezar?</h2>
        <p className="cta-description">
          Cuéntanos sobre tu proyecto y encontramos juntos la mejor solución
          para tu empresa.
        </p>
        <div className="cta-buttons">
          <a
            href="mailto:aldo@aldored.com?subject=Quiero%20conocer%20sus%20soluciones"
            className="cta-primary-btn"
          >
            Escríbenos
          </a>
          <a href="/docs/intro" className="cta-secondary-btn">
            Ver documentación →
          </a>
        </div>
      </div>
    </section>
  );
};
