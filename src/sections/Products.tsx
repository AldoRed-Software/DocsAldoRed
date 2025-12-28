import React from "react";
import { ProductCard } from "@site/src/components/ProductCard";
import "@site/src/css/products.css";

interface Icon {
  icon: React.ReactNode;
}

const FidatoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-folder-search"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2.5" />
    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M20.2 20.2l1.8 1.8" />
  </svg>
);

const ReservasIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-check"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h16" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
);

const APIIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-api"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 13h5" />
    <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
    <path d="M20 8v8" />
    <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
  </svg>
);

const ConsultoriaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-user-check"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
);

const CartaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
  </svg>
);

export const Products = () => {
  return (
    <section className="products-section" id="productos">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Nuestros Productos</h2>
          <p className="products-subtitle">
            Soluciones integrales diseñadas para diferentes aspectos de tu
            negocio
          </p>
        </div>

        <div className="products-grid">
          <ProductCard
            icon={<FidatoIcon />}
            title="Fidato AldoRed"
            description="Gestión centralizada de documentación de proyectos en la nube para tu organización"
            features={[
              "Almacenamiento seguro en la nube",
              "Acceso desde cualquier lugar",
              "Control de versiones",
              "Colaboración en equipo",
            ]}
            cta={{
              text: "Más información",
              url: "/docs/software/AldoERP/tutoriales/primeros-pasos",
            }}
          />

          <ProductCard
            icon={<ReservasIcon />}
            description="Gestión inteligente de reservas de salas físicas integrada con Google, Outlook y WhatsApp"
            title="Reservas AldoRed"
            features={[
              "Integración con Google Calendar",
              "Sincronización con Outlook",
              "Bot WhatsApp con IA",
              "Automatización de flujos",
            ]}
            cta={{
              text: "Más información",
              url: "https://reservas.aldored.com/",
              external: true,
            }}
          />

          <ProductCard
            icon={<APIIcon />}
            title="API para SII"
            description="Automatización de la obtención de información del SII directamente en tus sistemas"
            features={[
              "Conexión directa con SII",
              "Obtención automática de datos",
              "Integración con tus sistemas",
              "Reportes en tiempo real",
            ]}
            cta={{
              text: "Más información",
              url: "https://api.aldored.com/",
              external: true,
            }}
          />

          <ProductCard
            icon={<ConsultoriaIcon />}
            title="Asesorías y Consultorías"
            description="Transformación digital de tu negocio con expertos en cloud y evaluación de proyectos"
            features={[
              "Migraciones a AWS",
              "Evaluación de proyectos",
              "Correos profesionales",
              "Optimización de infraestructura",
            ]}
            cta={{
              text: "Solicitar consulta",
              url: "/docs/intro",
            }}
          />

          <ProductCard
            icon={<CartaIcon />}
            title="Carta AldoRed"
            description="Microservicio especializado para restaurantes: gestión de comandas desde celular con interfaz de computador"
            features={[
              "App móvil para camareros",
              "Panel de control en computador",
              "Integración con impresoras",
              "Gestión de pedidos en tiempo real",
            ]}
            cta={{
              text: "Más información",
              url: "/docs/intro",
            }}
          />
        </div>
      </div>
    </section>
  );
};
