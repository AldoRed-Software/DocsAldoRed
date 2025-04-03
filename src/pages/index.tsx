import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hero } from "@site/src/sections/Hero";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`AldoRed ${siteConfig.title}`}
      description="AldoRed: Software Solutions for Your Business"
    >
      <Hero />
    </Layout>
  );
}
