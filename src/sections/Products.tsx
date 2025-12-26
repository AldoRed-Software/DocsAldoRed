import React from "react";
import { ProductCard } from "@site/src/components/ProductCard";
import "@site/src/css/products.css";

interface Icon {
  icon: React.ReactNode;
}

const FidatoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3h18a2 2 0 012 2v22a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10 8h12M10 13h12M10 18h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ReservasIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7h22a2 2 0 012 2v18a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M7 5v4M25 5v4M5 15h22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="10" cy="21" r="1.5" fill="currentColor" />
    <circle cx="16" cy="21" r="1.5" fill="currentColor" />
    <circle cx="22" cy="21" r="1.5" fill="currentColor" />
  </svg>
);

const APIIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8h24a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 14l3 2-3 2M12 18h2M18 14l-3 2 3 2M24 14h-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConsultoriaIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M22 18c0-3.314-2.686-6-6-6s-6 2.686-6 6v2h12v-2z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 26h20a2 2 0 002-2v-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CartaIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4h16a2 2 0 012 2v20a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10 8h12M10 12h12M10 16h8M10 20h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
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
              url: "/docs/software/",
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
              url: "/docs/software/",
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
              text: "Documentación",
              url: "/api",
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
              url: "/docs/software/",
            }}
          />
        </div>
      </div>
    </section>
  );
};
