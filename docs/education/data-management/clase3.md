---
side_position: 2
title: Álgebra Relacional
---

### Álgebra Relacional

- Expresividad vs Complejidad

- Modelo relacional (Edgar F. Codd 1970)

  - Codd propuso dos lenguajes de consulta teóricos:

    - Álgebra Relacional
    - Cálculo Relacional

  - Estos lenguajes fueron la base para SQL

:::info

- Una consulta genera una tabla a partir de un conjunto de tablas.

  - El proceso de consulta es "cerrado".

- Podemos detectar ciertas **operaciones básicas** sobre tablas (un álgebra)

- Una consultaa es la _composición_ de estas operaaciones básicas.

- **Lenguaje procedural**:
  - Cada consulta indica explícitamente el procedimiento para calcularla.

:::

### Algunas consultas

**Películas**

| ID  | Título        | Año  | Categoría       | Calificación |
| --- | ------------- | ---- | --------------- | ------------ |
| 1   | Inception     | 2010 | Ciencia Ficción | 8,8          |
| 2   | Waking Life   | 2001 | Drama           | 7,8          |
| 3   | Her           | 2013 | Drama           | 8,0          |
| 4   | Spirited Away | 2001 | Fantasía        | 8,6          |
| 5   | Titanic       | 1997 | Drama           | 7,8          |

**Usuarios**

| ID  | Nombre  |
| --- | ------- |
| 1   | Miguel  |
| 2   | Paulina |
| 3   | Ignacia |

**Visto**

| ID Usuario | ID Película | Día      |
| ---------- | ----------- | -------- |
| 1          | 4           | 30/07/21 |
| 2          | 5           | 28/07/21 |
| 2          | 1           | 25/07/21 |

:::success Quiero toda la información de las películas

Esto sería:

| ID  | Título        | Año  | Categoría       | Calificación |
| --- | ------------- | ---- | --------------- | ------------ |
| 1   | Inception     | 2010 | Ciencia Ficción | 8,8          |
| 2   | Waking Life   | 2001 | Drama           | 7,8          |
| 3   | Her           | 2013 | Drama           | 8,0          |
| 4   | Spirited Away | 2001 | Fantasía        | 8,6          |
| 5   | Titanic       | 1997 | Drama           | 7,8          |

:::

:::success Quiero toda la información de las películas con calificación mayor o igual a 8.0

Esto sería:

| ID  | Título        | Año  | Categoría       | Calificación |
| --- | ------------- | ---- | --------------- | ------------ |
| 1   | Inception     | 2010 | Ciencia Ficción | 8,8          |
| 3   | Her           | 2013 | Drama           | 8,0          |
| 4   | Spirited Away | 2001 | Fantasía        | 8,6          |

:::

:::success Quiero toda la información de las películas de Drama con calificación mayor o igual a 8.0

Esto sería:

| ID  | Título | Año  | Categoría | Calificación |
| --- | ------ | ---- | --------- | ------------ |
| 3   | Her    | 2013 | Drama     | 8,0          |

:::

:::success Quiero el nombre de todos los usuario

Esto sería:

| Nombre  |
| ------- |
| Miguel  |
| Paulina |
| Ignacia |

:::

:::success El ID de todas las películas que ha visto "Paulina"

Esto sería:

| ID Película |
| ----------- |
| 5           |
| 1           |

:::

### Álgebra Relacional: Tablas

:::info El nombre de la tabla entrega la tabla
Ejemplo la tabla $Peliculas \rightarrow R$

Devuelve:

| ID  | Título        | Año  | Categoría       | Calificación |
| --- | ------------- | ---- | --------------- | ------------ |
| 1   | Inception     | 2010 | Ciencia Ficción | 8,8          |
| 2   | Waking Life   | 2001 | Drama           | 7,8          |
| 3   | Her           | 2013 | Drama           | 8,0          |
| 4   | Spirited Away | 2001 | Fantasía        | 8,6          |
| 5   | Titanic       | 1997 | Drama           | 7,8          |

:::

### Álgebra Relacional: Selección

:::info Selección
$\sigma_{condicion}(Tabla) \rightarrow \sigma_{c}(R)$

$\sigma_{c}(R)$ entrega una nueva _nueva relación_ que deja sólo las **tuplas** de la tabla $R$ que satisfacen las condición $C$

Es una operación que filtra las filas según una condición. La condición es una expresión booleana que puede usar:

- Comparaciones: $=$, $\neq$, $<$, $\leq$, $>$, $\geq$
- Operadores lógicos: $\wedge$ (and), $\vee$ (or), $\neg$ (not)

:::

:::success Quiero toda la información de las películas con una clasificación mayor o igual a 8.0
$\sigma_{Calificacion>=8.0}(Peliculas)$

Devuelve:

| ID  | Título        | Año  | Categoría       | Calificación |
| --- | ------------- | ---- | --------------- | ------------ |
| 1   | Inception     | 2010 | Ciencia Ficción | 8,8          |
| 3   | Her           | 2013 | Drama           | 8,0          |
| 4   | Spirited Away | 2001 | Fantasía        | 8,6          |

:::

:::success Quiero toda la información de películas de drama con clasificación mayor o igual a 8.0

$\sigma_{Calificacion>=8.0 \wedge Categoria=Drama}(Pelicula)$

Devuelve:

| ID  | Título | Año  | Categoría | Calificación |
| --- | ------ | ---- | --------- | ------------ |
| 3   | Her    | 2013 | Drama     | 8,0          |

:::

### Álgebra Relacional: Proyección

:::info Proyección

- $\pi_{A_{1},...,A_{n}}(R)$

$\pi_{A_{1},...,A_{n}}(R)$ entrega una _nueva relación_ que deja sólo los **atributos** $A_{1},...,A_{n}$ de la tabla $R$
:::

:::success Quiero el nombre de todos los usuarios

$\pi_{nombre}(Peliculas)$

Devuelve:

| Nombre  |
| ------- |
| Miguel  |
| Paulina |
| Ignacia |

:::

:::success Quiero la categoría de todas las películas

$\pi_{categoria}(Peliculas)$

Devuelve:

| Categoría       |
| --------------- |
| Ciencia Ficción |
| Drama           |
| Fantasía        |

:::

:::warning En la proyección de la álgebra relacional, no devuelve duplicados
:::

### Convenciones sobre tablas

- Por ahora asumimos que las tablas **no** puedes tener duplicados.

- El orden de las tuplas en las tablas no importan.

- En términos técnicos, una tabla es un conjunto de tuplas (set-semantics)

- Esta es la convención que sigue Codd en el modelo relacional y el álgebra relacional.

- Como veremos difiere ligeramente del SQL:
  - En el SQL pueden haber duplicados.
  - Por ende las tablas son _multiconjuntos_ o _bags_ (bag-semantics).
  - En ciertos casos el orden de las tuplas si importa.

:::success Quiero el título y el año de todas las películas de Drama

$\pi_{titulo,ano}(\sigma_{Categoria='Drama'}(Peliculas))$

Devuelve:

| Título      | Año  |
| ----------- | ---- |
| Waking Life | 2001 |
| Her         | 2013 |
| Titanic     | 1997 |

:::

### Álgebra Relacional: Producto Cruz (o cartesiano)

:::info Producto Cruz

- $R_{1} \times R_{2}$

$R_{1} \times R_{2}$ entrega una _nueva relación_ con todas las tuplas $(r_{1},r_{2})$ tal que $r_{1} \in R_{1}$ y $r_{2} \in R_{2}$

Los atributos de $R_{1} \times R_{2}$ son la unión de los atributos de $R_{1}$ y $R_{2}$

En caso de abigüedad, podemos renombrar atributos

- Si tenemos el mismo atributo $A$ en $R_{1}$ y $R_{2}$, es común renombrarlo a $R_{1}.A$ y $R_{2}.A$ en la tabla $R_{1} \times R_{2}$

:::

:::success ID de todas las Peliculas que ha visto Paulina

- $R_{1} = \sigma_{id=id\_usuario}(Visto \times Usuarios)$
- $R_{2} = \sigma_{nombre='Paulina'}(R_{1})$
- $R_{3} = \pi_{id\_pelicula}(R_{2})$

Otra opción:

- $R_{1} = \sigma_{nombre='Paulina'}(Usuario)$
- $R_{2} = R_{1} \times Usuarios$
- $R_{3} = \sigma_{id=id\_usuario}(R_{2})$
- $R_{4} = \pi_{id\_pelicula}(R_{3})$

:::

### Álgebra Relacional: Join

:::info Join

- $R_{1} \bowtie_{C} R_{2}$

- $R_{1} \bowtie_{C} R_{2}$ es la abrebiatura de $\sigma_{C}(R_{1} \times R_{2})$

El cual es el uso típico del punto cruz.

- La condición casi siempre son igualdades entre atributos $R_{1}$ y $R_{2}$

:::

:::success Quiero el ID de todas las películas que ha visto paulina

- $R_{1} = Visto \bowtie_{id=id\_usuario} Usuarios$
- $R_{2} = \sigma_{nombre='Paulina'}(R_{1})$
- $R_{3} = \pi_{id\_pelicula}(R_{2})$

:::

### Álgebra Relacional: Unión

:::info Unión

- $R_{1} \cup R_{2}$

- $R_{1} \cup R_{2}$ entrega una nueva relación con todas las tuplas que están en $R_{1}$ y $R_{2}$ (pueden estar en ambas).

- En caso de incompatibilidad de atributos, podemos renombrar atributos en $R_{1}$ y $R_{2}$

:::

:::success Los títulos de las películas y los nombres de los usuarios

- $\pi_{titulo}(Pelicula) \cup \pi_{nombre}(Usuarios)$

:::

### Álgebra Relacional: Diferencia

:::info Diferencia

- $R_{1} - R_{2}$

- $R_{1} - R_{2}$ entrega una _nueva relación_ con todas las tuplas que están en $R_{1}$ y **no** en $R_{2}$

En caso de incompatibilidad de atributos, podemos renombrar atributos en $R_{1} - R_{2}$
:::

:::success Nombre de los usuarios que no han visto ninguna película

- $R_{1} = Usuarios \bowtie_{id=id_usuario} Visto$
- $R_{2} = \pi_{nombre}(R_{1})$
- $R_{3} = \pi_{nombre}(Usuarios)$
- $R_{4} = R_{3} - R_{2}$

:::

### Álgebra Relacional

- El Álgebra Relacional consiste de las composiciones de los operadores básicos:

$$
\sigma, \pi, \times, \cup, -
$$

- El Álgebra SPC o SPJ consiste de las composiciones de:

$$
\sigma, \pi, \times
$$

o equivalentemente, las composiciones de:

$$
\sigma, \pi, \bowtie
$$

(Esta última contiene las consultas más frecuentes)

### ¿Para qué sirve el álgebra relacional?

- Provee un lenguaje de consulta general sin ambigüedad.
- Provee la base de lenguajes de consultas prácticos (SQL)
- Expresar planes y optimizaciones de consultas.

### Ejercicios

:::success Para cada usuario entregue su nombre junto al título y calificación de las peliculas que ha visto

- $R_{1} = Usuarios \bowtie_{(id=id\_usuario)} Visto$
- $R_{2} = R_{1} \bowtie_{(id\_pelicula=Peliculas.ID)} Peliculas$
- $R_{final} = \pi_{(nombre,titulo,calificacion)}(R_{2})$

:::

### Ejercicio: intersección

Supongamos que tenemos dos tablas $R_{1}$ y $R_{2}$ ambas con atributos $A_{1},...,A_{n}$

Definimos el operador _intersección_ $R_{1} \cap R_{2}$ el cual entrega una _nueva relación_ con todas las tuplas que están en $R_{1}$ **y** en $R_{2}$

¿Cómo escribiría la intersección en función de los operadores ya vistos?

- $R_{1} \cap R_{2} = R_{1} - (R_{1} - R_{2})$

### Ejercicio: división

Supongamos que tenemos una tabla $R$ con dos atributos $A$ y $B$ y otra tabla $S$ con un atributo $B'$

Definimos el operador _división_ $R \div S$ el cual entrega una nueva relación con atributo $A$ que contiene todos los valores $a$ tales que para todo valor $b$ en $S$, el par $(a,b)$ está en $R$.

La división es útil para expresar consultas del tipo "encontrar todos los X que están relacionados con todos los Y".

Es decir: $\{b | (a,b) \in R\} = S$

Veamoslo en un ejemplo práctico:

Ejemplo

**Tenistas**

| Nombre   | Torneo        |
| -------- | ------------- |
| Roger    | Wimbledon     |
| Roger    | US Open       |
| Roger    | Roland Garros |
| Nole     | Wimbledon     |
| Nole     | US Open       |
| Nole     | Roland Garros |
| Alcatraz | US Open       |
| Guga     | Roland Garros |

**Torneos**

| Nombre        |
| ------------- |
| Wimbledon     |
| US Open       |
| Roland Garros |

$Tenista \div Torneo$

:::success Solución

- ¿Nombre de jugadores que hayan ganado todos los torneos?

- $R_{1} = \pi_{nombre}(Tenistas)$
- $R_{2} = R_{1} \times Torneo$
- $R_{3} = R_{2} - Tenistas$
- $R_{final} = \pi_{nombre}(R_{3})$
