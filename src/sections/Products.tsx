import React from "react";
import Link from "@docusaurus/Link";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import { SolutionIcon, type SolutionKind } from "@site/src/components/SolutionIcon";
import "@site/src/css/products.css";

const products: { title: string; category: string; description: string; url: string; kind: SolutionKind; cta: string }[] = [
  { title: "Fidato", category: "Gestión documental", description: "La documentación de tus proyectos, ordenada y disponible para todo tu equipo.", url: "/docs/fidato", kind: "archive", cta: "Conocer Fidato" },
  { title: "Reservas AldoRed", category: "Coordinación de equipos", description: "Salas y reuniones sin cruces de horario, conectadas a Google Calendar y WhatsApp.", url: "/docs/reservas", kind: "calendar", cta: "Conocer Reservas" },
  { title: "API soluciones RPA", category: "Automatización", description: "Integra la información del SII en tus sistemas y elimina tareas manuales.", url: "/docs/api-sii", kind: "code", cta: "Ver la API" },
];

export const Products = () => {
  useBrokenLinks().collectAnchor("soluciones");
  return (
  <section className="products-section" id="soluciones" aria-labelledby="products-heading">
    <div className="landing-container">
      <div className="landing-section-heading">
        <h2 id="products-heading">Nuestras soluciones</h2>
        <p>Cada una resuelve una tarea concreta. Empieza por la que más tiempo te quita hoy.</p>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <article className="solution-card" key={product.title}>
            <span className="solution-card-icon"><SolutionIcon kind={product.kind} /></span>
            <p className="solution-card-category">{product.category}</p>
            <h3>{product.title}</h3>
            <p className="solution-card-description">{product.description}</p>
            <Link to={product.url} className="landing-link">
              {product.cta} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
      <Link to="/docs/carta" className="upcoming-solution">
        <span className="landing-tag">En construcción</span>
        <strong>Carta AldoRed</strong>
        <span className="upcoming-solution-copy">Comandas desde el celular para coordinar tu restaurante.</span>
        <span className="upcoming-solution-arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  </section>
);
};
