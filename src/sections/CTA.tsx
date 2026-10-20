import React from "react";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import "@site/src/css/cta.css";

export const CTA = () => {
  useBrokenLinks().collectAnchor("contacto");
  return (
  <section className="cta-section" id="contacto" aria-labelledby="contact-heading">
    <div className="landing-container cta-container">
      <div className="cta-copy">
        <h2 className="cta-title" id="contact-heading">
          Hablemos de lo que tu empresa necesita.
        </h2>
        <p className="cta-description">
          Cuéntanos qué quieres mejorar y encontramos juntos el punto de partida.
        </p>
      </div>
      <div className="cta-buttons">
        <a
          href="mailto:contacto@aldored.com?subject=Conversemos%20sobre%20mi%20proyecto"
          className="landing-button landing-button-primary"
        >
          Conversemos
        </a>
        <a href="mailto:contacto@aldored.com" className="landing-underline cta-email">
          contacto@aldored.com
        </a>
      </div>
    </div>
  </section>
);
};
