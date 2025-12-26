import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./precios.module.css";

interface Plan {
  name: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  endpoints: {
    [key: string]: boolean;
  };
  isPopular?: boolean;
  buttonText: string;
  queryLimit: number;
  rateLimit: number; // requests per minute
  costoPorConsulta: number;
}

const plans: Plan[] = [
  {
    name: "Gratis",
    price: 0,
    yearlyPrice: 0,
    features: [
      "SII BTE emitidas",
      "300 consultas por mes",
      "Rate-limit: 5 req/min",
      "Soporte por email",
      "Documentación completa",
    ],
    endpoints: {
      "SII BTE emitidas": true,
      "SII BHE recibidas": false,
      "SII RCV compras": false,
      "SII RCV ventas": false,
      "SII RCV informes": false,
      "BUK - Nueva API key": false,
    },
    buttonText: "Empezar gratis",
    queryLimit: 300,
    rateLimit: 5,
    costoPorConsulta: 0,
  },
  {
    name: "PYME",
    price: 4,
    yearlyPrice: 3.32, // 4 * 12 * 0.83 / 12
    features: [
      "SII BTE emitidas",
      "SII BHE recibidas",
      "SII RCV compras",
      "SII RCV ventas",
      "2,000 consultas por mes",
      "Rate-limit: 10 req/min",
      "Soporte prioritario",
    ],
    endpoints: {
      "SII BTE emitidas": true,
      "SII BHE recibidas": true,
      "SII RCV compras": true,
      "SII RCV ventas": true,
      "SII RCV informes": false,
      "BUK - Nueva API key": false,
    },
    buttonText: "Elegir PYME",
    queryLimit: 2000,
    rateLimit: 10,
    costoPorConsulta: 0.0016,
  },
  {
    name: "Pro",
    price: 5,
    yearlyPrice: 4.15, // 5 * 12 * 0.83 / 12
    isPopular: true,
    features: [
      "Todos los endpoints SII + BUK",
      "10,000 consultas por mes",
      "Rate-limit: 30 req/min",
      "Soporte 24/7 prioritario",
      "API keys múltiples ilimitadas",
      "Dashboard analytics avanzado",
      "Webhook notifications",
      "Reportes automatizados",
      "Autenticación OAuth2",
      "Backup automático de datos",
      "White-label disponible",
    ],
    endpoints: {
      "SII BTE emitidas": true,
      "SII BHE recibidas": true,
      "SII RCV compras": true,
      "SII RCV ventas": true,
      "SII RCV informes": true,
      "BUK - Nueva API key": true,
    },
    buttonText: "Elegir Pro (Recomendado)",
    queryLimit: 10000,
    rateLimit: 30,
    costoPorConsulta: 0.0005,
  },
  {
    name: "Premier",
    price: 12,
    yearlyPrice: 9.96, // 12 * 12 * 0.83 / 12
    features: [
      "Todo del plan Pro incluido",
      "25,000 consultas por mes",
      "Rate-limit: 60 req/min",
      "Account Manager dedicado",
      "Integraciones personalizadas",
      "Soporte telefónico directo",
      "SLA garantizado 99.9%",
      "Consultoría y capacitación",
      "Desarrollo de features a medida",
      "Onboarding personalizado",
    ],
    endpoints: {
      "SII BTE emitidas": true,
      "SII BHE recibidas": true,
      "SII RCV compras": true,
      "SII RCV ventas": true,
      "SII RCV informes": true,
      "BUK - Nueva API key": true,
    },
    buttonText: "Elegir Premier",
    queryLimit: 25000,
    rateLimit: 60,
    costoPorConsulta: 0.0004,
  },
];

export default function Precios(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const handleContactSales = (planName: string, isYearly: boolean) => {
    const subject = `Consulta sobre plan ${planName} ${
      isYearly ? "(Anual)" : "(Mensual)"
    }`;
    const body = `Hola, estoy interesado en contratar el plan ${planName} ${
      isYearly ? "con facturación anual" : "con facturación mensual"
    }. 

¿Podrían proporcionarme más información sobre el proceso de contratación?

Gracias.`;

    const mailtoLink = `mailto:aldo@aldored.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <Layout
      title="Precios"
      description="Planes y precios de AldoRed RPA Contable API"
    >
      <div className={styles.pricingContainer}>
        <div className={styles.header}>
          <h1>Planes y Precios</h1>
          <p>
            Elige el plan que mejor se adapte a las necesidades de tu empresa
          </p>

          <div className={styles.billingToggle}>
            <button
              className={`${styles.toggleButton} ${
                billingPeriod === "monthly" ? styles.active : ""
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Mensual
            </button>
            <button
              className={`${styles.toggleButton} ${
                billingPeriod === "yearly" ? styles.active : ""
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Anual <span className={styles.discount}>(-17%)</span>
            </button>
          </div>
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planCard} ${
                plan.isPopular ? styles.popular : ""
              }`}
            >
              {plan.isPopular && (
                <div className={styles.popularBadge}>Más Popular</div>
              )}

              <div className={styles.planHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.priceSection}>
                  {plan.price === 0 ? (
                    <div className={styles.price}>
                      <span className={styles.amount}>Gratis</span>
                    </div>
                  ) : (
                    <div className={styles.price}>
                      <span className={styles.amount}>
                        {billingPeriod === "monthly"
                          ? plan.price
                          : plan.yearlyPrice.toFixed(2)}{" "}
                        UF
                      </span>
                      <span className={styles.period}>/mes</span>
                    </div>
                  )}
                  {billingPeriod === "yearly" && plan.price > 0 && (
                    <div className={styles.originalPrice}>
                      <s>{plan.price} UF/mes</s>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.planFeatures}>
                <div className={styles.limits}>
                  <div className={styles.limitItem}>
                    <strong>{plan.queryLimit.toLocaleString()}</strong>{" "}
                    consultas/mes
                  </div>
                  <div className={styles.limitItem}>
                    <strong>{plan.rateLimit} req/min</strong> rate-limit
                  </div>
                  <div className={styles.limitItem}>
                    <strong>{plan.costoPorConsulta.toFixed(4)} UF</strong> por
                    consulta
                  </div>
                </div>

                <div className={styles.endpointsTable}>
                  <h4>Endpoints disponibles:</h4>
                  {Object.entries(plan.endpoints).map(
                    ([endpoint, available]) => (
                      <div key={endpoint} className={styles.endpointRow}>
                        <span
                          className={`${styles.endpointStatus} ${
                            available ? styles.available : styles.unavailable
                          }`}
                        >
                          {available ? "✓" : "✗"}
                        </span>
                        <span className={styles.endpointName}>{endpoint}</span>
                      </div>
                    )
                  )}
                </div>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`${styles.planButton} ${
                  plan.isPopular ? styles.popularButton : ""
                }`}
                onClick={() =>
                  handleContactSales(plan.name, billingPeriod === "yearly")
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>¿Listo para automatizar tu flujos?</h2>
          <p>
            Agenda una llamada o escríbenos y te guiamos con el setup,
            estimación de tiempos y el roadmap de automatización.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCta}
              onClick={() => handleContactSales("Consulta General", false)}
            >
              Agendar llamada
            </button>
            <a href="/api" className={styles.secondaryCta}>
              Ver documentación
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
