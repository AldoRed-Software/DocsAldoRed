# AldoRed — Guía de diseño

Adaptación de la referencia visual de Slack a la identidad de AldoRed. El color principal es **#2196f3**. La referencia aporta tipografía amplia, espacio generoso, tarjetas discretas y alternancia de superficies claras con franjas oscuras. El contenido y los elementos visuales corresponden a AldoRed.

## Dirección

Una empresa de software cercana y seria. Presentar con claridad qué resuelve cada producto y facilitar el contacto. Sin métricas, testimonios ni pantallas de producto inventadas.

## Paleta

| Token       | Valor     | Uso                                                  |
| ----------- | --------- | ---------------------------------------------------- |
| Brand       | `#2196f3` | Acciones principales, símbolo de marca y acentos     |
| Ink         | `#142b40` | Títulos y texto principal                            |
| Deep blue   | `#123c60` | Franjas invertidas y cabecera del mapa de soluciones |
| Wash        | `#edf6fd` | Superficies secundarias e iconos                     |
| Canvas      | `#ffffff` | Navegación y sección de productos                    |
| Hero canvas | `#f7fbfe` | Fondo de la introducción                             |
| Muted       | `#526477` | Texto secundario                                     |
| Line        | `#c9e2f6` | Bordes de tarjetas                                   |
| Link        | `#096bb0` | Enlaces de texto sobre fondos claros                 |

El azul principal sustituye al morado de Slack. Utilizar azul oscuro para las grandes superficies invertidas. Los botones #2196f3 llevan texto #082940 para mantener contraste legible; no usar texto blanco pequeño sobre este azul. No usar degradados ni sombras de texto.

## Tipografía

- Títulos: Avenir Next, Avenir, Century Gothic, sans-serif. Geométrica, con peso 600–650.
- Cuerpo: Avenir Next, Avenir y fuentes del sistema. Sin descargas externas de tipografía.
- Hero: 32–48px, centrado; interlineado 1.15.
- Títulos de sección: 32–48px; interlineado 1.15.
- Cuerpo: 16–18px; interlineado 1.65–1.75; líneas inferiores a 80 caracteres.
- Etiquetas auxiliares: 12–14px, en estilo oración.

## Composición

Contenido centrado con ancho máximo de 1200px. Texto alineado a la izquierda en paneles; hero y cierre de contacto centrados.

```text
Navegación azul   · marca / documentación / productos / precios / contacto
Hero azul curvo   · título centrado
Paneles blancos  · lista de soluciones | contacto y asesoría
Productos        · tres tarjetas + franja de Carta AldoRed
Asesorías        · título | explicación y áreas de trabajo, fondo azul claro
Contacto         · título centrado y acciones, fondo azul oscuro
Pie              · documentación y enlaces de empresa
```

La pieza visual distintiva es el panel de soluciones que se superpone al fondo curvo, siguiendo la captura de Slack. Los productos no se numeran: no representan una secuencia. Mantener el resto de la página sobrio.

## Componentes

- Navegación: azul oscuro en la landing y blanca en documentación; 80px en escritorio y 68px en móvil.
- Acciones principales: rectangulares, radio 4px, altura mínima 54px.
- Acción secundaria: fondo transparente y borde azul grisáceo.
- Tarjetas: radio 16px, borde 1px y relleno 24–30px; sin sombras.
- Panel de soluciones y tarjetas laterales: blancos, radio 16px y sombra suave.
- Iconos: SVG de trazo consistente; decorativos y ocultos a lectores de pantalla.
- Secciones: 80–96px de espacio vertical en escritorio y 54–60px en móvil.
- Contacto: correo real `contacto@aldored.com`, sin formularios que no envíen datos.

## Adaptación y accesibilidad

Columnas apiladas en pantallas pequeñas. Enlaces con destino real, foco visible y encabezados jerárquicos. Respetar `prefers-reduced-motion`. Sin carruseles ni animaciones automáticas. Los estilos de contenido de la landing se delimitan con `.aldored-landing`; navegación y pie son compartidos con documentación y precios.

## Referencia prioritaria: captura de Slack

La composición sigue la captura compartida: navegación integrada en un escenario azul oscuro `#104a78`, titular centrado, curva elíptica inferior y paneles blancos superpuestos. El panel principal ocupa dos tercios del ancho y presenta cuatro soluciones en filas; a su derecha, dos tarjetas de contacto y asesoría. Después aparece una sección compacta de descubrimiento.

El azul de marca sigue siendo `#2196f3`, presente en iconos, acentos y acciones. La superficie oscura es una variante de apoyo para que el texto blanco sea legible. Esta composición sustituye al hero dividido y al mapa de soluciones de la primera propuesta. Los paneles superpuestos usan sombra suave como en la captura. En móvil se apilan y mantienen todos los enlaces accesibles.
