import React from "react";
import "@site/src/css/products.css";

const products = [
  {
    title: "Fidato AldoRed",
    description:
      "Gestión centralizada de documentación de proyectos en la nube para tu organización",
    url: "/docs/software/AldoERP/tutoriales/primeros-pasos",
    external: false,
  },
  {
    title: "Reservas AldoRed",
    description:
      "Gestión inteligente de reservas de salas con integración Google, Outlook y WhatsApp",
    url: "https://reservas.aldored.com/",
    external: true,
  },
  {
    title: "API para SII",
    description:
      "Automatización de la obtención de información del SII directamente en tus sistemas",
    url: "https://api.aldored.com/",
    external: true,
  },
  {
    title: "Asesorías y Consultorías",
    description:
      "Transformación digital con expertos en cloud, AWS y evaluación de proyectos",
    url: "/docs/intro",
    external: false,
  },
  {
    title: "Carta AldoRed",
    description:
      "Gestión de comandas para restaurantes desde celular con panel en computador",
    url: "/docs/intro",
    external: false,
  },
];

export const Products = () => {
  return (
    <section className="products-section" id="productos">
      <div className="products-container">
        <p className="products-label">Productos</p>
        <ul className="products-list">
          {products.map((product, index) => (
            <li key={index}>
              <a
                href={product.url}
                className="product-item-link"
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
              >
                <span className="product-number">0{index + 1}</span>
                <span className="product-info">
                  <span className="product-name">{product.title}</span>
                  <span className="product-desc">{product.description}</span>
                </span>
                <span className="product-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
