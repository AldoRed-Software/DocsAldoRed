---
title: Fundamentos de procesos biológicos
---

### 1. Biología de los sistemas de tratamiento.

Ojetivos del tratamiento biológico:

1. Estabilización de materia orgánica (soluble, particulada)
2. Eliminación de compuestos nitrogenados ($NO_2^{-}, NO_3^{-}, NH_4^{+}$), fosfatos ($PO_4^{3-}$) y otros nutrientes.
3. Recuperación de energía (i.e. $CH_4, C_2H_6O$)

#### ¿En qué se fundamentan los procesos biológicos?

- Uso de microorganismos, principalmente bacterias, que actúan de biocatalizadores en la conversión de la materia orgánica y nutrientes.

#### Clasificación de los microoranismos

| Fuente de energía | Fuente de carbono   |
| ----------------- | ------------------- |
| Fototrofos        | Autótrofos ($CO_2$) |
| Quimiotrofos      | Heterótrofos (m.o.) |

Microorganismos de importancia implicados:

:::info BACTERIAS:

- Procariotas unicelulares
- Degradación de materia orgánica, nitrógeno y fósforo
- Bacterias Aerobias y/o Anaerobias. Heterótrofas y autótrofas
- Tamaño: 0.5 a 3 µm

:::

:::info HONGOS:

- Microorganismos heterótrofos, NO fotosintéticos
- Compiten con las bacterias por la materia orgánica
- Prefieren pH bajos (de 3 a 8.5)
- Tamaño y forma: filamentos de ~5 µm de diámetro y hasta 200 µm de longitud

:::

:::info ALGAS:

- Microorganismos unicelulares o multicelulares
- Autótrofas y fotosintéticas.
- Poca importancia en reactores de tratamiento de aguas

:::

:::info PROTOZOOS:

- Microorganismos móviles unicelulares. Heterótrofos aerobios --> La mayor parte.
- Se suelen alimentar de BACTERIAS.
- Tamaño: 10 - 200 µm

:::

:::info METAZOOS:

- Microorganismos pluricelulares (Crustáceos, nemátodos, gusanos...)
- Se suelen alimentar de BACTERIAS.
- Tamaño: 100 - 200 µm

:::

### Reacción global

$Microorganismos + Sustratos + Nutrientes \rightarrow \textcolor{red}{Nuevos\ Microorg.} + \textcolor{green}{Productos finales} + \textcolor{orange}{Energia}$

#### a. Reacción de síntesis: Procesos asimilatorios: Anabolismo

$Microorganismos + substratos + Nutrientes + \textcolor{orange}{Energia} \rightarrow \textcolor{red}{Nuevos\ Microorg. (C_5H_7O_2N)}$

#### b. Reación energía: Procesos disimilatorios: Catabolismo

$Microorganismos + substratos \rightarrow \textcolor{green}{CO_2 + NH_3 + otros\ productos} + \textcolor{orange}{Energia} $

#### c. Reacciones de metabolismo endógeno:

$C_5H_7O_2N + 5O_2 \rightarrow 5CO_2 + NH_3 + 2H_2O + \text{Energía} $

### Cálculos de diseño:

1. Superficie requerida
2. Cantidad de metano generado
3. Cantidad de lixiviado generado
4. Cantidad de lixiviado infiltrado

### 1. Superficie requerida

$$
S = \frac{P \cdot R_{c} \cdot t}{\rho_{rc} \cdot H}
$$

- S: Superficie $[m^2]$
- P: Población a atender $[habitantes]$
- Rc: Residuos generados per cápita $[\frac{kg}{hab \cdot \text{año}}]$
- t: Tiempo de vida útil de relleno $[\text{años}]$
- $\rho_{rc}$: Densidad del residuo compactado $[\frac{kg}{m^3}]$
- H: Altura máxima permitida $[m]$

### 2. Cantidad de metano generado

$$
Q_{CH_4} = R_{c} \cdot P \cdot r_{gas}
$$

- $Q_{CH_4}$: Caudal de metano $[\frac{m^3CH_4}{\text{año}}]$
- $r_{gas}$: Potencial de producción de $CH_4$ $[\frac{m^3CH_4}{kg}]$
- $r_{gas}$: $0.15-0.25 m^3 \frac{CH_4}{kg}$ (Experimentalmente)

:::warning OJO
Es diferente a la cantidad de metano recuperado (15-35%)

:::

### 3. Cantidad de lixiviado generado

:::info Capacidad de campo (CC)

Fracción máxima de humedad que el residuo es capaz de retener.
Se calcula por base seca de residuo.

$$
CC = 0.6 - 0.55 \cdot (\frac{W}{4500 + W})
$$

- CC: Capacidad de campo del residuo $[\frac{kg H_2O}{kg\ residuo\ seco}]$
- W: Peso de sobrecarga calculado a la altura media del residuo $[\frac{kg}{m^2}]$

:::

Balance hídrico

$$
P_r = P - ET - R - \Delta S
$$

- $P_r$: Lixiviado $[\frac{m^3}{\text{año} \cdot m^2}]$
- $P$: Precipitación $[\frac{m^3}{\text{año} \cdot m^2}]$
- ET: Evapotranspiración $[\frac{m^3}{\text{año} \cdot m^2}]$
- R: Escorrentía superficial $[\frac{m^3}{\text{año} \cdot m^2}]$
- $\Delta S$: Cambio de agua almacenada $[\frac{m^3}{\text{año} \cdot m^2}]$

### 4. Cantidad de lixiviado infiltrado

#### Ley de Darcy

$$
Q = K \cdot (\frac{\Delta h}{\Delta L}) \cdot \frac{S}{\epsilon}
$$

- $Q$: Caudal de lixiviado infiltrado $[\frac{m^3}{s}]$
- $K$: Coeficiente de permeabilidad del forro $[\frac{m}{s}]$
- $\Delta h$: Diferencia de nivel entre el lixiviado y el subsuelo $[s]$
- $\Delta L$: Espesor del forro $[m]$
- $S$: Superficie del forro $[m^2]$
- $\epsilon$: Porosidad del forro
