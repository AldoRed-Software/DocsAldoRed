import React from "react";
import "@site/src/css/productCard.css";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  cta?: {
    text: string;
    url: string;
    external?: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  features,
  cta,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-icon">{icon}</div>
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-description">{description}</p>
      {features && features.length > 0 && (
        <ul className="product-card-features">
          {features.map((feature, idx) => (
            <li key={idx} className="product-card-feature">
              <span className="feature-dot"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <a
          href={cta.url}
          className="product-card-cta"
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
        >
          {cta.text} →
        </a>
      )}
    </div>
  );
};
