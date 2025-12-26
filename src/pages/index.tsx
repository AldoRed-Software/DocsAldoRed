import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/sections/Hero";
import { Products } from "@site/src/sections/Products";
import { CTA } from "@site/src/sections/CTA";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Inicio"
      description="AldoRed: Soluciones de software a medida para tu negocio"
    >
      <Hero />
      <Products />
      <CTA />
    </Layout>
  );
}
