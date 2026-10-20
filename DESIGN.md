# AldoRed — Guía de diseño

Profesional, limpio y minimalista. Fondo blanco, texto azul tinta y un solo acento: **#0E9AFF**. El orden lo dan el espacio generoso, la tipografía y las líneas finas, no los colores de fondo ni las sombras. Sin franjas oscuras: toda la página se mantiene clara.

## Dirección

Una empresa de software cercana y seria. Presentar con claridad qué resuelve cada producto y facilitar el contacto. Sin métricas, testimonios ni pantallas de producto inventadas.

## Paleta

Los valores viven como tokens `--ar-*` en `src/css/custom.css`.

| Token         | Valor     | Uso                                                        |
| ------------- | --------- | ---------------------------------------------------------- |
| Brand         | `#0E9AFF` | Acciones principales, iconos y acentos                     |
| Brand hover   | `#0085e5` | Estado hover de las acciones principales                   |
| Brand tint    | `#eaf5ff` | Fondo de los iconos de producto y del panel de contacto    |
| Link          | `#096bb0` | Enlaces de texto y etiquetas sobre fondos claros           |
| Ink           | `#142b40` | Títulos y texto principal                                  |
| Muted         | `#526477` | Texto secundario                                           |
| Surface       | `#f7fafc` | Sección de servicios                                       |
| Hairline      | `#e6edf3` | Bordes de tarjetas y separadores                           |

El azul aparece solo en acciones, iconos y acentos; nunca como fondo de una sección. Un botón primario por bloque. El texto blanco sobre #0E9AFF queda cerca de 3:1, por eso va siempre grueso (700) y a 17px o más; nunca texto blanco fino ni pequeño sobre este azul. Los enlaces de texto usan Link (#096bb0), no Brand. Sin degradados, sombras ni sombras de texto.

## Tipografía

- Familia: Roboto, servida desde el propio sitio (`@fontsource-variable/roboto`); sin descargas externas de tipografía.
- Etiquetas técnicas (eyebrow, categorías de historias, "En construcción"): Roboto Mono, 12–13px (`@fontsource-variable/roboto-mono`).
- Hero: 40–72px, peso 500, interlineado 1.04, tracking -0.035em, alineado a la izquierda.
- Títulos de sección: 30–44px, peso 500, interlineado 1.1, tracking -0.03em.
- Títulos de tarjeta: 20–22px, peso 500.
- Cuerpo: 15–19px; interlineado 1.6; líneas de 40–46 caracteres en textos destacados.

## Composición

Contenido alineado a la izquierda con ancho máximo de 1200px, en la misma línea que la navegación.

```text
Navegación  · blanca, línea inferior · logo / enlaces · Login + Contacto
Hero        · eyebrow mono, titular grande, un botón y el correo | precio destacado
Soluciones  · tres tarjetas (Fidato, Reservas, API RPA) + fila punteada de Carta AldoRed
Servicios   · fondo Surface · Administración tecnológica | Asesorías, con precio
Comunidad   · historias como filas de texto separadas por líneas
Contacto    · panel Brand tint, radio 16px · titular a la izquierda, acciones a la derecha
Pie         · Soluciones / Servicios / Recursos / Empresa
```

Cada producto aparece una sola vez. Los productos no se numeran: no representan una secuencia.

## Componentes

- Navegación: blanca en todo el sitio, con línea inferior de 1px; 80px en escritorio y 68px en móvil. "Contacto" es el único botón relleno.
- Logo: solo "AldoRed" en Roboto 700, en texto real; 18px en escritorio y 15px en móvil, para caber en el cuadrado de la intro. Al cargar el sitio se reproduce una vez la intro de `static/img/aldored-logo-animado.svg`: letras blancas sobre un cuadrado Brand de la altura de la navbar menos 4px arriba y abajo (72px en escritorio, 60px en móvil), que sale hacia la derecha y deja el nombre en Ink (1s, tras 0,7s).
- Acción principal: fondo Brand, texto blanco 700, radio 6px, altura 52px.
- Acción secundaria: transparente, borde `#c5d3df` que pasa a Ink al hacer hover.
- Tarjetas: borde Hairline de 1px, radio 12px, relleno 24–40px, sin sombra; el borde pasa a Brand en hover.
- Iconos de producto: SVG de trazo en Brand sobre un cuadro Brand tint de 44px. Fidato usa un archivador.
- Etiquetas: Roboto Mono en Link, borde `#b9dcf7`, forma de píldora.
- Secciones: 96px de espacio vertical en escritorio y 56px en móvil, separadas por líneas Hairline.
- Contacto: correo real `contacto@aldored.com`, sin formularios que no envíen datos.

## Adaptación y accesibilidad

Columnas que se apilan con flex-wrap en pantallas pequeñas. Enlaces con destino real, foco visible y encabezados jerárquicos. Respetar `prefers-reduced-motion`. Sin carruseles ni animaciones automáticas, salvo la intro del logo, que dura un segundo y no se repite. Los estilos de contenido de la landing se delimitan con `.aldored-landing`; navegación y pie son compartidos con documentación y blog.
