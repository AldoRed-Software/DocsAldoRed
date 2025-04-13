"use client";

import { motion } from "framer-motion";
import "@site/src/css/logoTicker.css";

export const LogoTicker = () => {
  return (
    <div className="logoTickerWrapper">
      <div className="logoTickerContainer">
        <div className="logoTickerFlex">
          <motion.div
            className="logoTickerMotion"
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <a
              href="https://locampino.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-locampino.png"
                alt="Lo Campino Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://es-la.facebook.com/miradordepumalal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-miradordepumalal.png"
                alt="Mirador de Pumalal Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://impulsa-di.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-impulsa.png"
                alt="Impulsa Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://bravoizquierdo.cl/web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-bi.png"
                alt="Bravo Izquierdo Logo"
                className="logoTickerImage
                "
              />
            </a>
            <a
              href="https://work-center.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-workcenter.jpg"
                alt="Work Center Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="http://www.maderaviva.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-maderaviva.webp"
                alt="Madera Viva Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a
              href="Http://Ivertice.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-vertice.png"
                alt="Vértice Logo"
                className="logoTickerImage
                "
              />
            </a>
            <a
              href="https://bicevida.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-bicevida.png"
                alt="BICE Vida Logo"
                className="logoTickerImage"
              />
            </a>

            {/* Second set of logos */}
            <a
              href="https://locampino.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-locampino.png"
                alt="Lo Campino Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://es-la.facebook.com/miradordepumalal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-miradordepumalal.png"
                alt="Mirador de Pumalal Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://impulsa-di.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-impulsa.png"
                alt="Impulsa Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://bravoizquierdo.cl/web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-bi.png"
                alt="Bravo Izquierdo Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://work-center.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-workcenter.jpg"
                alt="Work Center Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="http://www.maderaviva.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-maderaviva.webp"
                alt="Madera Viva Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a
              href="Http://Ivertice.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-vertice.png"
                alt="Vértice Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://bicevida.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-bicevida.png"
                alt="BICE Vida Logo"
                className="logoTickerImage"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default LogoTicker;
