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
              href="https://www.mujeresia.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-mujeresia.png"
                alt="Mujeres IA Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://filari.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-filari.png"
                alt="Filari Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a href="https://20s.cl/" target="_blank" rel="noopener noreferrer">
              <img
                src="/img/clientes/logo-20s.png"
                alt="20s Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://www.machmotos.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-machmotos.png"
                alt="Mach Motos Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a
              href="https://renmach.machmotos.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-renmach.png"
                alt="Renmach Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://aware.tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-awaretools.png"
                alt="Aware Tools Logo"
                className="logoTickerImage"
              />
            </a>

            {/* Second set of logos */}
            <a
              href="https://www.mujeresia.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-mujeresia.png"
                alt="Mujeres IA Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://filari.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-filari.png"
                alt="Filari Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a href="https://20s.cl/" target="_blank" rel="noopener noreferrer">
              <img
                src="/img/clientes/logo-20s.png"
                alt="20s Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://www.machmotos.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-machmotos.png"
                alt="Mach Motos Logo"
                className="logoTickerImage bgBlack"
              />
            </a>
            <a
              href="https://renmach.machmotos.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-renmach.png"
                alt="Renmach Logo"
                className="logoTickerImage"
              />
            </a>
            <a
              href="https://aware.tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/clientes/logo-awaretools.png"
                alt="Aware Tools Logo"
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
