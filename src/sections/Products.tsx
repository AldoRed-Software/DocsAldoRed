import React from "react";
import Link from "@docusaurus/Link";
import { SolutionIcon, type SolutionKind } from "@site/src/components/SolutionIcon";
import "@site/src/css/products.css";
import { SolutionLogo } from "@site/src/components/SolutionLogo";

const products: { title: string; category: string; description: string; url: string; kind: SolutionKind; features: string[] }[] = [
  { title: "Fidato", category: "Gestión documental", description: "Mantén la documentación de tus proyectos organizada y disponible para tu equipo en un solo lugar.", url: "/docs/fidato", kind: "folder", features: ["Documentos centralizados", "Acceso en la nube"] },
  { title: "Reservas AldoRed", category: "Coordinación de equipos", description: "Gestiona salas y reuniones sin cruces de horarios, con calendarios y notificaciones conectados.", url: "/docs/reservas", kind: "calendar", features: ["Integración con Google Calendar", "Notificaciones por WhatsApp"] },
  { title: "API para SII", category: "Automatización", description: "Integra la obtención de información del SII en tus sistemas y reduce las tareas manuales de tu operación.", url: "/api", kind: "code", features: ["Integración vía API", "Documentación para desarrolladores"] },
];
export const Products = () => (
  <section className="products-section" id="productos" aria-labelledby="products-heading">
    <div className="products-container">
      <div className="products-heading"><h2 id="products-heading">Descubre lo que puedes hacer.</h2><p>Conoce mejor nuestras herramientas y encuentra la solución para tu equipo.</p></div>
      <article className="managed-service" aria-labelledby="managed-service-heading">
        <div className="managed-service-copy">
          <p className="managed-service-label"><SolutionIcon kind="cloud" /> Administración tecnológica</p>
          <h3 id="managed-service-heading">Tú te ocupas de tu negocio. Nosotros, de la tecnología.</h3>
          <p>Nos encargamos por completo de la administración tecnológica de tu software en la nube y de los correos de tu empresa en Google Workspace.</p>
          <ul>
            <li>Administración de software en la nube</li>
            <li>Gestión de correos y cuentas de Google Workspace</li>
            <li>Pagos automáticos mes a mes</li>
          </ul>
        </div>
        <div className="managed-service-plan">
          <p className="managed-service-price"><span>Desde</span><strong>UF 1,72<span>/mes</span></strong></p>
          <p>Un servicio mensual para que puedas concentrarte en tu negocio.</p>
          <Link to="/docs/administracion-tecnologica" className="landing-button landing-button-primary">Conocer el servicio</Link>
        </div>
      </article>
      <div className="products-grid">
        {products.map(product => <article className="solution-card" key={product.title}>
          <SolutionLogo kind={product.kind} />
          <p className="product-category">{product.category}</p>
          <h3>{product.title}</h3><p className="product-description">{product.description}</p>
          <ul className="product-features">{product.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
          <Link to={product.url} className="product-link">Conocer {product.title}<span aria-hidden="true">↗</span></Link>
        </article>)}
      </div>
      <div className="restaurant-solution"><div className="restaurant-copy"><SolutionIcon kind="menu" /><div><h3>¿Tu negocio es un restaurante?</h3><p>Con Carta AldoRed, gestiona comandas desde el celular y coordina tu operación desde el computador.</p></div></div><Link to="/docs/carta" className="product-link">Conocer Carta AldoRed <span aria-hidden="true">↗</span></Link></div>
    </div>
  </section>
);
