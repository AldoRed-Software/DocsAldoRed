---
title: Proyecto IoT
---

# Proyecto IoT – Monitoreo de la casa de un amigo

## 1. Contexto

Un usuario con poca experiencia en tecnología solicitó el desarrollo de un sistema basado en ESP32 que le permita **controlar y monitorear su casa** desde un computador o tablet. Este sistema debe ser accesible tanto de forma remota como local, con especial énfasis en **minimizar el consumo energético** cuando no hay nadie en casa.

---

## 2. Especificaciones del Sistema

### 2.1 Funcionalidades principales

#### 1. Control de luz RGB desde el dashboard

- Permite **encender/apagar** la luz.
- Se puede **cambiar el color** desde Arduino Cloud.
- No es necesario control presencial.

#### 2. Deep Sleep configurable para ahorro de energía

- El ESP32 entra en **modo de bajo consumo** si no detecta movimiento.
- El **tiempo de espera** antes de dormir se ajusta con un potenciómetro.
  - Rango: **5 a 20 segundos** (20 por defecto).
- Un **servomotor** actúa como indicador visual de la cuenta regresiva.
- La cuenta regresiva:
  - Se reinicia al detectar movimiento.
  - Se muestra cada 1 segundo con el servo.
- El ESP32:
  - **Despierta inmediatamente** si detecta movimiento.
  - Envía mensajes al dashboard al **dormir, despertar y cambiar el tiempo**.

#### 3. Música al dormir y despertar

- Se reproduce una melodía al entrar en deep sleep.
- Se reproduce otra melodía al despertar.
- Preferencia del usuario: **temas inspirados en Mario Bros**.

#### 4. Indicador visual de estado con matriz LED 8x8

- El estado actual del sistema se representa mediante **íconos gráficos**.
- Se actualiza automáticamente al cambiar de modo.

---

### 2.2 Estados del sistema

Se definen cuatro modos, seleccionables desde el dashboard, cada uno con un ícono propio mostrado en la matriz LED:

| Modo    | Descripción                               | Ícono sugerido             |
| ------- | ----------------------------------------- | -------------------------- |
| Cafeína | El ESP32 **no entra en modo sleep**       | Taza de café / Energía     |
| Sleepy  | Modo normal con sleep según actividad     | Luna / ZZZ                 |
| Mudo    | No reproduce música al dormir o despertar | Altavoz tachado / Silencio |
| Cantor  | Reproduce música al dormir y al despertar | Nota musical / Altavoz     |

---

### 2.3 Hardware requerido

| Componente     | Función                                   |
| -------------- | ----------------------------------------- |
| ESP32          | Microcontrolador principal                |
| Sensor PIR     | Detección de movimiento                   |
| Potenciómetro  | Ajuste de tiempo de inactividad           |
| Servomotor     | Indicador de cuenta regresiva             |
| Buzzer         | Reproducción de melodías (Mario Bros)     |
| LED RGB        | Luz de habitación controlable remotamente |
| Matriz LED 8x8 | Visualización de estados del sistema      |

---

### 2.4 Variables en Arduino Cloud

El sistema debe estar limitado a **cinco variables en Arduino Cloud**. Ejemplo de uso eficiente:

1. `ledState` (bool): Encendido/apagado del LED RGB.
2. `ledColor` (color): Color del LED RGB.
3. `modoEstado` (int): Modo actual del sistema (0 a 3).
4. `sleepTime` (int): Tiempo para entrar en sleep.
5. `mensajes` (string): Mensajes informativos al usuario.

---

### 2.5 Entregables

1. **Diagrama de conexiones** entre componentes.
2. **Dashboard en Arduino Cloud** funcional.
3. **Manual de uso básico** para el usuario final.

---

## 3. Proyecto Personalizado (opcional)

Los estudiantes que desarrollen un proyecto distinto deben asegurarse de cumplir con estos bloques mínimos:

- Capacidad de **dormir y despertar** automáticamente.
- Sonido al dormir y despertar.
- Envío y recepción de datos por WiFi (Arduino Cloud).
- Un actuador controlable desde el cloud y localmente (ideal: servomotor).
- Un sensor que envíe datos al cloud.
- Uso de matriz LED 8x8 para mostrar estado o información local.

---

### Notas adicionales

- El proyecto debe funcionar con **bajo consumo energético** en mente.
- Se valorará la **originalidad**, pero también la **usabilidad** para el usuario no técnico.
