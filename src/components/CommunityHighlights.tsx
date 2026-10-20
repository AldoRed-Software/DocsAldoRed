import React from "react";
import Link from "@docusaurus/Link";
import "@site/src/css/community.css";

const stories = [
  {
    title: "Junto a Compañía de María Exalumnos",
    description: "Acompañamos al equipo en Liga La Quinta como auspiciadores.",
    category: "Deporte y comunidad",
    url: "/blog/compania-de-maria-exalumnos",
  },
  {
    title: "Con 20s.cl, dentro y fuera de la tecnología",
    description: "Sponsors de su revista y responsables de administrar su tecnología.",
    category: "Colaboraciones",
    url: "/blog/colaboracion-20s",
  },
];

export function CommunityHighlights() {
  return (
    <section className="community-section" aria-labelledby="community-heading">
      <div className="landing-container">
        <div className="landing-section-heading">
          <h2 id="community-heading">AldoRed, contigo</h2>
          <Link to="/blog" className="landing-link">Ver todas las historias <span aria-hidden="true">→</span></Link>
        </div>
        <ul className="community-stories">
          {stories.map(story => (
            <li key={story.url}>
              <Link to={story.url} className="community-story">
                <span className="community-category">{story.category}</span>
                <div className="community-story-copy">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
                <span className="community-story-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
