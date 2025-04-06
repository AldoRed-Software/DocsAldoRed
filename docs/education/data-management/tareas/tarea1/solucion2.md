---
sidebar_position: 3
title: Solución parte 2
---

## Parte 2 (30%)

Considere el siguiente esquema relacional que caaptura alumnos, cursos, y la toma de cursos:

<div align="center">
  alumnos(<u>rut</u>, nombre, edad)<br />
  cursos(<u>codigo</u>, nombre, carrera)<br />
  toma(<u>rut_alumno</u>, <u>codigo_curso</u>)
</div>

1. (1.5 pts) **Escriba una consulta en el álgebra relacional que entregue el nombre y edad de todos los alumnos que han tomado el curso llamado "Topología".**

2. (3.0 pts) **Escriba una consulta en el álgebra relacional que entregue el nombre de todos los alumnos que han tomado todos los cursos de la carrera "Informática".**

3. Indique si las siguientes aserciones son verdaderas o falsas. Justifique sus razones:

   - (a) (0.5 pts) **Una expresión de la forma σ<sub>C</sub>(σ<sub>C</sub>(E)) es equivalente a σ<sub>C ∧ C</sub>(E).**
   - (b) (0.5 pts) **Una expresión de la forma π<sub>A</sub>(π<sub>A</sub>(E)) es equivalente a π<sub>A</sub>(E).**
   - (c) (1.0 pts) **El resultado de una expresión σ<sub>C1</sub>(E1 × E2), donde las condiciones no comparten atributos con E1 ni con E2, es equivalente a σ<sub>C1</sub>(E1) × σ<sub>C2</sub>(E2).**

## Solución

### Pregunta 1

1. **Seleccionar el curso "Topología":**  
   Se filtra la relación **cursos** para obtener solo el curso llamado "Topología".  
   $$ C = \sigma\_{nombre = "Topología"}(cursos) $$

2. **Unir con la relación de toma:**  
   Se une la relación resultante con **toma** utilizando la condición que relaciona el código del curso:  
   $$ T = toma \ \bowtie\_{codigo_curso = codigo} \ C $$

3. **Unir con la relación de alumnos:**  
   Se une el resultado con la relación **alumnos** utilizando la condición que relaciona el rut del alumno:  
   $$ A = alumnos \ \bowtie\_{rut = rut_alumno} \ T $$

4. **Proyectar nombre y edad:**  
   Finalmente, se extraen únicamente los atributos **nombre** y **edad**:  
   $$ \pi\_{nombre, edad}(A) $$

**Consulta completa:**

$$
\pi_{nombre, edad} \Bigl( alumnos \ \bowtie_{rut = rut\_alumno} \Bigl( toma \ \bowtie_{codigo\_curso = codigo} \bigl( \sigma_{nombre = "Topología"}(cursos) \bigr) \Bigr) \Bigr)
$$

### Pregunta 2

1. **Obtener el conjunto de códigos de cursos de "Informática":**  
   Se filtra la relación **cursos** para obtener únicamente los cursos de la carrera "Informática" y se proyecta el código.

   $$
   C = \pi_{codigo} \bigl( \sigma_{carrera = "Informática"}(cursos) \bigr)
   $$

2. **Obtener las inscripciones de alumnos en cursos de "Informática":**  
   Se unen **toma** y **cursos** filtrados por "Informática", para obtener la relación de alumnos y los cursos de esa carrera.

   $$
   T = \pi_{rut\_alumno, codigo\_curso} \bigl( toma \ \bowtie_{codigo\_curso = codigo} \ \sigma_{carrera = "Informática"}(cursos) \bigr)
   $$

3. **Aplicar el operador de división:**  
   Se seleccionan aquellos alumnos que han tomado todos los cursos de "Informática" realizando la división de la relación anterior por el conjunto de cursos:

   $$
   R = T \div C
   $$

   En donde $R$ contendrá el atributo `rut_alumno` de aquellos alumnos que están inscritos en _todos_ los cursos de "Informática".

4. **Obtener el nombre de los alumnos:**  
   Se unen la relación resultante con **alumnos** para proyectar únicamente el nombre.
   $$
   \pi_{nombre}\bigl( alumnos \ \bowtie_{rut = rut\_alumno} \ R \bigr)
   $$

**Consulta completa en álgebra relacional:**

$$
\pi_{nombre}\Bigl(
\; alumnos \ \bowtie_{rut = rut\_alumno} \Bigl(
\; \pi_{rut\_alumno, codigo\_curso}\bigl( toma \ \bowtie_{codigo\_curso = codigo} \ \sigma_{carrera = "Informática"}(cursos) \bigr)
\; \div \; \pi_{codigo}\bigl( \sigma_{carrera = "Informática"}(cursos) \bigr)
\Bigr)
\Bigr)
$$

### Pregunta 3

**(a) Verdadero.**  
Aplicar la selección con la misma condición dos veces es redundante, ya que:  
$$\sigma_{C}(\sigma_{C}(E)) = \sigma_{C \land C}(E)$$  
Y, puesto que \(C \land C\) es lógicamente equivalente a \(C\), ambas expresiones son iguales.

---

**(b) Verdadero.**  
La operación de proyección es idempotente, lo que significa que aplicar la misma proyección repetidamente no altera el resultado:  
$$\pi_{A}(\pi_{A}(E)) = \pi_{A}(E)$$

---

**(c) Falso.**

La aserción enuncia una comparación entre:
$$\sigma_{C1}(E1 \times E2)$$
y
$$\sigma_{C1}(E1) \times \sigma_{C2}(E2).$$

Sin embargo, en la expresión de la derecha se utiliza \(C2\) sin haberlo definido previamente. Esto genera ambigüedad en la condición que se aplica a \(E2\). Además, la propiedad de distribución de la selección sobre el producto cartesiano solo se cumple si la condición de selección se puede descomponer en dos condiciones independientes:

$$
\sigma_{C1 \land C2}(E1 \times E2) = \sigma_{C1}(E1) \times \sigma_{C2}(E2)
$$

donde \(C1\) afecta únicamente a \(E1\) y \(C2\) únicamente a \(E2\).

Debido a que en la aserción original \(C2\) no está definido, la equivalencia no se cumple. Por ello, la aserción es falsa.
