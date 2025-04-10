---
sidebar_position: 1
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
