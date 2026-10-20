import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import "@site/src/css/services.css";

const services = [
  {
    title: "Administración tecnológica",
    price: "UF 1,72",
    description: "Nos encargamos por completo de tu software en la nube y de los correos de tu empresa en Google Workspace.",
    items: ["Software en la nube", "Correos y cuentas de Google Workspace", "Pagos automáticos mes a mes"],
    url: "/docs/administracion-tecnologica",
    cta: "Conocer el servicio",
    primary: true,
  },
  {
    title: "Asesorías y desarrollo a medida",
    price: "UF 7,5",
    description: "Evaluamos tus proyectos, diseñamos soluciones en la nube y desarrollamos el software que tu operación necesita.",
    items: ["Desarrollo de software", "Cloud y AWS", "Evaluación de proyectos"],
    url: "/docs/asesorias-consultorias",
    cta: "Conocer las asesorías",
    primary: false,
  },
];

export const Services = () => (
  <section className="services-section" id="servicios" aria-labelledby="services-heading">
    <div className="landing-container">
      <h2 id="services-heading">Tú te ocupas de tu negocio. Nosotros, de la tecnología.</h2>
      <div className="services-grid">
        {services.map(service => (
          <article className="service-card" key={service.title}>
            <div className="service-card-heading">
              <h3>{service.title}</h3>
              <p>Desde <strong>{service.price}</strong>/mes</p>
            </div>
            <p className="service-card-description">{service.description}</p>
            <ul>
              {service.items.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Link
              to={service.url}
              className={clsx("landing-button", service.primary ? "landing-button-primary" : "landing-button-secondary")}
            >
              {service.cta}
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
