import React from "react";
import "@site/src/css/showProject.css";

/**
 * @param {string} props.projectName
 * @param {string} props.image
 * @param {string} props.description
 * @param {string} props.primaryText
 * @param {string} props.primaryUrl
 * @param {string} props.secondaryText
 * @param {string} props.secondaryUrl
 */
function ShowProject({
  projectName,
  image,
  description,
  primaryText,
  primaryUrl,
  secondaryText,
  secondaryUrl,
}) {
  return (
    <div className="container-showProject">
      <img src={image} alt="Project Illustration" className="image" />

      <h2 className="title">{projectName}</h2>
      <p className="description">{description}</p>

      <div className="buttons">
        <a href={primaryUrl} className="primaryButton">
          {primaryText}
        </a>
        <a href={secondaryUrl} className="secondaryButton">
          {secondaryText}
        </a>
      </div>
    </div>
  );
}

export default ShowProject;
