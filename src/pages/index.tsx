import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/sections/Hero";
import LogoTicker from "@site/src/sections/LogoTicker";
import ShowProject from "@site/src/components/ShowProject";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Inicio"
      description="AldoRed: Software Solutions for Your Business"
    >
      <Hero />

      <LogoTicker />

      <ShowProject
        projectName="AldoERP"
        image="/img/logo-AldoERP-gbfree.webp"
        description="Sistema ERP personalizable que integra autenticación, gestión de usuarios y módulos a medida para optimizar procesos empresariales y mejorar la toma de decisiones"
        primaryText="Primeros pasos"
        primaryUrl="/docs/software/AldoERP/tutoriales/primeros-pasos"
        secondaryText="Documentación"
        secondaryUrl="/docs/category/aldoerp"
      />

      <ShowProject
        projectName="Educación"
        image="/img/books.png"
        description="Diferentes recursos educativos relacionados con la programación y el desarrollo de software"
        primaryText="Ver más"
        primaryUrl="/docs/category/educación"
        secondaryText="Documentación"
        secondaryUrl="/docs/intro"
      />
    </Layout>
  );
}
