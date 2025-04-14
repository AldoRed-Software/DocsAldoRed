import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AldoRed",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://aldored.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AldoRed-Software", // Usually your GitHub org/user name.
  projectName: "DocsAldoRed", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/AldoRed-Software/DocsAldoRed/tree/main",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    navbar: {
      title: "AldoRed",
      /*logo: {
        alt: "Main Logo of AldoRed",
        src: "img/logo.png",
        },*/
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentación",
        },
        {
          to: "/docs/category/educación",
          label: "Educación",
          position: "left",
        },
        {
          type: "dropdown",
          label: "Software",
          position: "left",
          to: "/docs/software/intro",
          items: [
            {
              label: "AldoERP",
              to: "/docs/category/aldoerp",
            },
            {
              label: "Módulo gestor proyectos",
              to: "/docs/software/AldoERP/modulos/gProyectos/changelog",
            },
            {
              label: "Módulo gestor colaboradores",
              to: "/docs/category/educación",
            },
            {
              label: "Módulo gestor documental",
              to: "/docs/category/educación",
            },
            {
              label: "Módulo gestor reuniones",
              to: "/docs/category/educación",
            },
          ],
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Bienvenida",
              to: "/docs/intro",
            },
            {
              label: "Educación",
              to: "/docs/category/educación",
            },
            {
              label: "AldoERP",
              to: "/docs/category/aldoerp",
            },
          ],
        },
        {
          title: "AldoRed",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/AldoRed-Software",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AldoRed.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
