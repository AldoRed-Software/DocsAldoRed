import React from "react";
import Link from "@docusaurus/Link";
import { SolutionIcon, type SolutionKind } from "@site/src/components/SolutionIcon";
import "@site/src/css/hero.css";

const solutions: { name: string; description: string; url: string; icon: SolutionKind }[] = [
  { name: "Fidato", description: "Organiza la documentación de tus proyectos", url: "/docs/fidato", icon: "folder" },
  { name: "Reservas AldoRed", description: "Coordina salas, calendarios y reuniones", url: "/docs/reservas", icon: "calendar" },
  { name: "API para SII", description: "Automatiza la información del SII en tus sistemas", url: "/api", icon: "code" },
  { name: "Administración tecnológica", description: "Tu nube y Google Workspace, en nuestras manos. Desde UF 1,72/mes", url: "/docs/administracion-tecnologica", icon: "cloud" },
  { name: "Carta AldoRed", description: "Gestiona las comandas de tu restaurante", url: "/docs/carta", icon: "menu" },
];

export const Hero = () => (
  <section className="hero-container" aria-labelledby="hero-heading">
    <div className="hero-stage" aria-hidden="true" />
    <div className="hero-content">
      <header className="hero-copy">
        <h1 className="hero-title" id="hero-heading">Un mejor día de trabajo{" "}<br />empieza con el software correcto.</h1>
        <p className="hero-subtitle">Soluciones AldoRed para simplificar lo que haces cada día.</p>
      </header>

      <div className="hero-panels">
        <div className="solutions-column">
          <h2 className="panel-label"><SolutionIcon kind="layers" />Nuestras soluciones</h2>
          <div className="solutions-panel">
            <div className="solutions-panel-heading"><span>Software y servicios para tu empresa</span></div>
            <p className="solutions-intro">Encuentra tu punto de partida</p>
            <div className="solutions-list">
              {solutions.map(solution => (
                <Link to={solution.url} className="solution-row" key={solution.name}>
                  <span className="solution-row-icon"><SolutionIcon kind={solution.icon} /></span>
                  <span className="solution-row-copy">
                    <strong>{solution.name}</strong>
                    <span>{solution.description}</span>
                  </span>
                  <span className="solution-row-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <div className="solutions-panel-footer">
              <a href="mailto:aldo@aldored.com">¿Necesitas una solución a medida? Conversemos.</a>
              <p>Conoce cómo funcionan en nuestra <Link to="/docs/intro">documentación</Link>.</p>
            </div>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Trabajemos juntos">
          <p className="panel-label"><span className="aside-brand" aria-hidden="true">a.</span>AldoRed, contigo</p>
          <div className="hero-side-card">
            <div>
              <h2>Tu próximo proyecto empieza aquí.</h2>
              <p>Cuéntanos qué necesitas mejorar en tu empresa.</p>
              <a href="mailto:aldo@aldored.com" className="side-card-button">Hablar sobre mi proyecto</a>
            </div>
            <span className="side-card-icon" aria-hidden="true"><SolutionIcon kind="code" /></span>
          </div>
          <div className="hero-side-card">
            <div>
              <h2>Da el siguiente paso con confianza.</h2>
              <p>Asesoría en software, cloud y evaluación de proyectos.</p>
              <Link to="/docs/asesorias-consultorias" className="side-card-button">Conocer las asesorías</Link>
            </div>
            <span className="side-card-icon" aria-hidden="true"><SolutionIcon kind="layers" /></span>
          </div>
        </aside>
      </div>
    </div>
  </section>
);
