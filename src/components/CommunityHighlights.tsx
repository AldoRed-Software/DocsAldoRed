import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "@site/src/css/community.css";

const stories = [
  {
    title: "Junto a Compañía de María Exalumnos",
    description: "Acompañamos al equipo en Liga La Quinta como auspiciadores.",
    category: "Deporte y comunidad",
    url: "/blog/compania-de-maria-exalumnos",
    image: "/img/comunidad/compania-de-maria-aldored.jpg",
    alt: "Auspicio de AldoRed en la camiseta de Compañía de María Exalumnos",
    className: "community-image-team",
  },
  {
    title: "Con 20s.cl, dentro y fuera de la tecnología",
    description: "Sponsors de su revista y responsables de administrar su tecnología.",
    category: "Colaboraciones",
    url: "/blog/colaboracion-20s",
    image: "/img/clientes/logo-20s.png",
    alt: "Logo de 20s",
    className: "community-image-logo",
  },
];

const StoryCard: React.FC<{ story: (typeof stories)[number] }> = ({ story }) => {
  const imageUrl = useBaseUrl(story.image);
  return (
    <article className="community-card">
      <Link to={story.url} className="community-card-link">
        <img src={imageUrl} alt={story.alt} className={story.className} loading="lazy" />
        <div className="community-card-copy">
          <p className="community-category">{story.category}</p>
          <h3>{story.title}</h3>
          <p>{story.description}</p>
          <span className="community-read">Leer historia <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
};

export function CommunityHighlights() {
  return (
    <aside className="hero-aside" aria-labelledby="community-heading">
      <h2 className="panel-label" id="community-heading">
        <Link to="/blog">AldoRed, contigo <span aria-hidden="true">↗</span></Link>
      </h2>
      <div className="community-stories">
        {stories.map(story => <StoryCard key={story.url} story={story} />)}
      </div>
      <Link to="/blog" className="community-all">Ver todas las historias</Link>
    </aside>
  );
}
