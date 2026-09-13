import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/sections/Hero";
import { Products } from "@site/src/sections/Products";
import { CTA } from "@site/src/sections/CTA";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Software y soluciones para empresas"
      wrapperClassName="aldored-landing"
      description="AldoRed: Soluciones de software a medida para tu negocio"
    >
      <main>
        <Hero />
        <Products />
        <CTA />
      </main>
    </Layout>
  );
}
