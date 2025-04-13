import React from "react";
import Link from "@docusaurus/Link";
import "@site/src/css/cardLink.css";

const CardLink = ({ title, link, description }) => {
  return (
    <Link to={link} className="card">
      <div className="cardContent">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
};

export default CardLink;
