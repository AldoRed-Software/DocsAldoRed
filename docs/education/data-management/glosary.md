---
title: Glosario
---

## Clase 1 - [Introducción y Modelo Relacional](./clase1.md)

### Bases de Datos

**Definición:**  
Una colección organizada de datos digitales que se estructuran de forma que se facilite su manipulación, consulta y almacenamiento eficiente.

**Contexto en la clase:**  
Se destaca la importancia de las bases de datos en proyectos de Data Science y se ejemplifica su uso en una tienda de cervezas.

---

### DBMS (Database Management System) o Sistema de Gestión de Bases de Datos

**Definición:**  
Software encargado de manejar bases de datos. Entre sus funciones se incluyen:

- Representar y cargar datos.
- Organizar y actualizar la información.
- Responder consultas de forma eficiente.
- Proveer almacenamiento optimizado, control de concurrencia, seguridad y respaldo de datos.

**Contexto en la clase:**  
El usuario se enfoca en diseñar la estructura y escribir consultas, mientras que el DBMS se encarga del manejo general y la optimización.

---

### Modelo Relacional

**Definición:**  
Es el modelo de datos más establecido, en el que la información se organiza en _relaciones_ (o tablas). Cada relación se compone de atributos (columnas) y tuplas (filas).

**Contexto en la clase:**  
Se explica la evolución histórica del modelo relacional y se introducen conceptos básicos que lo sustentan, como el esquema, la integridad y las llaves.

---

### Relación

**Definición:**  
En el contexto del modelo relacional, una relación se refiere a una tabla que agrupa datos relacionados.

**Ejemplo:**  
La tabla `Películas` que contiene columnas como `ID`, `Título`, `Año`, `Categoría` y `Calificación`.

---

### Atributo

**Definición:**  
Columna de una relación. Cada atributo define un tipo específico de dato que aparecerá en la tabla.

**Ejemplo:**  
El atributo `Título` en la tabla `Películas`.

---

### Tupla

**Definición:**  
Fila de una relación; representa un registro concreto, es decir, el conjunto de datos correspondientes a cada atributo de la tabla.

**Ejemplo:**  
Una tupla en la tabla `Películas` podría ser: `[2, Waking Life, 2001, Drama, 7.8]`.

---

### Esquema

**Definición:**  
Descripción formal de la estructura de la base de datos. Especifica las relaciones que la componen y los atributos de cada una.

**Ejemplo:**  
`Películas(ID, Título, Año, Categoría, Calificación)`.

---

### Dominio

**Definición:**  
Conjunto de valores permitidos para un atributo, que define el tipo de dato que puede tomar cada columna en una relación.

**Ejemplo:**  
En la descripción `Películas(ID: int, Título: string, Año: int, Categoría: string, Calificación: float)`, cada atributo tiene asignado un dominio.

---

### Instancia

**Definición:**  
Un conjunto concreto de datos (o tuplas) que cumplen con el esquema definido para una base de datos en un momento dado.

---

### Restricciones de Integridad

**Definición:**  
Reglas formales aplicadas a un esquema que limitan las posibles instancias, garantizando la validez y consistencia de los datos.

**Contexto en la clase:**  
Se resaltan restricciones como las llaves primarias y foráneas para asegurar la integridad de la información.

---

### Llave Primaria

**Definición:**  
Conjunto _minimal_ de atributos que identifica de forma única cada tupla en una relación.

**Requisitos:**

- Debe ser única para cada registro.
- Es minimal, es decir, no se puede eliminar ningún atributo sin perder la propiedad de identificación única.

**Ejemplo:**  
En una tabla `Películas`, el atributo `ID` podría funcionar como llave primaria.

---

### Llave Foránea

**Definición:**  
Atributo (o conjunto de atributos) en una relación que se utiliza para referenciar la llave primaria de otra relación, estableciendo así una conexión entre ambas.

**Restricción:**  
Si un valor aparece en la llave foránea, debe existir en la llave primaria a la que apunta para mantener la integridad referencial.

**Ejemplo:**  
La tabla `Visto` podría incluir una llave foránea `ID Película` que hace referencia a la llave primaria `ID` de la tabla `Películas`.

---

### SQL (Structured Query Language)

**Definición:**  
Lenguaje de consulta estructurado utilizado para gestionar y manipular bases de datos relacionales.

**Contexto en la clase:**  
Se menciona la importancia de SQL en el contexto de Data Science y cómo surgió a partir de los modelos y conceptos del modelo relacional, introducido en 1974.

---

### Otros Conceptos Relevantes

- **Data Science:**  
  **Definición:** Disciplina que integra estadística, programación y conocimiento del dominio para extraer conocimiento a partir de datos.  
  **Relevancia:** Se destaca la omnipresencia de las bases de datos en proyectos de Data Science.

- **Problemas de Implementaciones a Medida:**  
  **Definición:** Dificultades que surgen al programar soluciones de bases de datos desde cero, sin utilizar un DBMS.  
  **Ejemplos:** Duplicación de datos, inconsistencias, dificultad en consultas complejas, falta de control de concurrencia, control de acceso y respaldo de datos.

- **Concurrencia y Seguridad:**  
  **Definición:**

  - **Concurrencia:** Mecanismo que permite que múltiples usuarios accedan o modifiquen datos de forma simultánea sin interferir entre ellos.
  - **Seguridad:** Conjunto de mecanismos para proteger los datos contra accesos no autorizados o modificaciones indebidas.

  **Contexto en la clase:**  
  Se resalta que estas funciones son responsabilidades del DBMS, lo cual alivia al usuario de tener que implementarlas manualmente.

---

## Clase 2 - [Modelo Entidad-Relación](./clase2.md)

### Modelo Entidad-Relación (ER)

**Definición:**  
Es un modelo conceptual para representar los requerimientos de datos de forma no técnica, utilizando diagramas que facilitan la visualización y comunicación de la estructura de la información.

**Contexto en la clase:**  
Se usa para diseñar esquemas de bases de datos de forma concisa y evitar problemas de diseño, sirviendo además como complemento del modelo relacional.

---

### Entidad

**Definición:**  
Objeto o concepto del mundo real que se modela en el sistema. Es representado en el diagrama como un contenedor (usualmente un rectángulo).

**Ejemplo:**  
`Producto`, `Compañia`, `Persona`.

**Nota:**  
Cada entidad debe tener una llave identificadora (generalmente mostrada subrayada).

---

### Atributo

**Definición:**  
Característica o propiedad que describe una entidad.

**Ejemplo:**  
`nombre`, `precio`, `categoria`, `fecha`.

**Detalles:**

- **Simples:** Un solo valor por entidad (ej. `nombre`).
- **Multivaluados:** Pueden tomar varios valores para una misma entidad (representados con doble óvalo).

---

### Relación

**Definición:**  
Asociación o vínculo entre dos o más entidades que indica cómo interactúan o se conectan.

**Ejemplo:**  
`compra`, `fabrica`, `alquila`.

**Nota:**  
Las relaciones se representan en diagramas mediante rombos o círculos y, a diferencia de las entidades, no tienen llaves propias. Pueden, sin embargo, tener atributos asociados.

---

### Multiplicidad de Relaciones

**Definición:**  
Indica la cantidad de instancias de una entidad que pueden estar asociadas a instancias de otra entidad.

**Ejemplos de Multiplicidad:**

- **n a n:** Una entidad A puede estar relacionada con cero o muchas instancias de B, y viceversa.
- **n a 0 o 1:** Una entidad A puede relacionarse con cero o muchas instancias de B, mientras B se asocia a lo más a una A.
- **0 o 1 a n:** Una entidad A se asocia a lo más a una instancia, mientras B puede tener cero o muchas A.
- **0 o 1 a 1 o más:** Restricción que varía según las necesidades de participación.
- **n a 1:** Muchas instancias de A están asociadas a exactamente una instancia de B.

---

### Atributos Multivaluados

**Definición:**  
Atributos que pueden contener más de un valor para una misma entidad.

**Representación en diagramas:**  
Se representan como un doble óvalo o círculo.

**Ejemplo:**  
Una `Persona` puede tener varias `profesiones`.

---

### Relaciones Múltiples

**Definición:**  
Relaciones que involucran a tres o más entidades de forma simultánea.

**Ejemplo:**  
Una relación `alquila` que asocia `Pelicula`, `Local de Videos` y `Persona`.

**Nota:**  
Aunque son menos comunes, se pueden transformar en relaciones binarias para mayor flexibilidad.

---

### Roles en Relaciones

**Definición:**  
Designaciones que indican la función o participación de una misma entidad en una relación cuando aparece más de una vez.

**Ejemplos:**

- En la relación `alquila`, un `Usuario` puede aparecer como `cliente` y también como `cajero`.
- En la relación `sigue`, un `Usuario` actúa como `seguidor` y como `seguido`.

---

### Entidad Débil

**Definición:**  
Entidad que depende de otra (la entidad padre) para su identificación, ya que no posee atributos suficientes para ser única por sí sola.

**Características:**

- Posee una llave parcial, representada con subrayado punteado.
- Su identificación se completa combinando la llave parcial con la llave de la entidad padre.

**Ejemplo:**  
`Evaluación` dependiente de `Curso`.

---

### Jerarquía entre Entidades (IsA)

**Definición:**  
Estructura que permite definir una relación de herencia entre entidades, donde las subentidades heredan los atributos de la entidad padre.

**Ejemplo:**  
`Deportista` es una entidad padre de `Futbolista` y `Tenista`.

**Detalles:**  
Esta estructura facilita la especialización de entidades y la reutilización de atributos comunes.

---

### Transformación del Modelo ER al Modelo Relacional

**Definición:**  
Proceso de convertir el modelo conceptual (ER) en un esquema relacional, generando tablas a partir de entidades y relaciones.

**Puntos clave:**

- Las entidades (no débiles) se transforman en tablas que conservan sus atributos y llaves.
- Las relaciones se pasan a tablas cuya llave es la unión de las llaves de las entidades relacionadas y se convierten en _foreign_keys_.
- Se pueden aplicar simplificaciones según restricciones de multiplicidad.

---

### Simplificaciones según Restricciones

**Definición:**  
Ajustes en la transformación del modelo ER al modelo relacional para optimizar la estructura, como simplificar o eliminar la tabla de una relación si la multiplicidad lo permite.

**Ejemplo:**  
Si una relación tiene multiplicidad 0 o 1, se puede fusionar con una de las entidades, simplificando así la llave de la tabla resultante.

## Clase 3 - [Álgebra Relacional](./clase3.md)

### Álgebra Relacional

**Definición:**  
Conjunto de operaciones procedurales que generan nuevas relaciones (tablas) a partir de relaciones existentes, propuesto por Edgar F. Codd en 1970 como uno de los lenguajes teóricos para consultas en el modelo relacional.

**Características:**

- **Lenguaje procedural:** especifica paso a paso cómo computar el resultado.
- **Cerrado:** cada operación sobre relaciones devuelve otra relación.

---

### Relación

**Definición:**  
Tabla en el modelo relacional que representa un conjunto de tuplas con atributos definidos.

**Notación:**  
Escribir el nombre de la relación (por ejemplo, `Peliculas`) devuelve toda la tabla.

---

### Consulta

**Definición:**  
Expresión compuesta de operaciones de álgebra relacional que produce una nueva relación a partir de una o más relaciones de entrada.

---

### Selección (σ)

**Definición:**  
Operación que filtra las tuplas de una relación según una condición booleana.

$$
\sigma_{condicion}(R)
$$
