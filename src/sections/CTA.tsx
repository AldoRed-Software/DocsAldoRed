import React from "react";
import Link from "@docusaurus/Link";
import "@site/src/css/cta.css";

export const CTA = () => (
  <>
    <section
      className="consulting-section"
      aria-labelledby="consulting-heading"
    >
      <div className="consulting-container">
        <div>
          <p className="consulting-label">Asesorías y desarrollo a medida</p>
          <h2 id="consulting-heading">
            Tu próximo paso tecnológico, bien acompañado.
          </h2>
        </div>
        <div className="consulting-copy">
          <p>
            Cada empresa tiene desafíos distintos. Te ayudamos a evaluar
            proyectos, diseñar soluciones en la nube y desarrollar el software
            que tu operación necesita.
          </p>
          <Link to="/docs/asesorias-consultorias" className="product-link">
            Conocer nuestras asesorías <span aria-hidden="true">↗</span>
          </Link>
          <div className="consulting-topics">
            <span>Desarrollo de software</span>
            <span>Cloud y AWS</span>
            <span>Evaluación de proyectos</span>
          </div>
        </div>
      </div>
    </section>
    <section
      className="cta-section"
      id="contacto"
      aria-labelledby="contact-heading"
    >
      <div className="cta-container">
        <p className="cta-label">Construyamos la solución</p>
        <h2 className="cta-title" id="contact-heading">
          Hablemos de lo que
          <br />
          tu empresa necesita.
        </h2>
        <p className="cta-description">
          Cuéntanos qué quieres mejorar. Encontramos juntos el punto de partida.
        </p>
        <div className="cta-buttons">
          <a
            href="mailto:contacto@aldored.com?subject=Conversemos%20sobre%20mi%20proyecto"
            className="landing-button landing-button-primary"
          >
            Conversemos
          </a>
          <a href="mailto:contacto@aldored.com" className="cta-email">
            contacto@aldored.com
          </a>
        </div>
      </div>
    </section>
  </>
);
