---
title: Código del Proyecto
---

# Código del Proyecto IoT

### Código fuente del sistema

```

// Proyecto IoT

// Importar librerias
#include "thingProperties.h"
#include <WiFi.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_LEDBackpack.h>
#include <ESP32Servo.h>
#include <esp_sleep.h>

// Pines
#define PIR_PIN 14
#define SERVO_PIN 25
#define BUZZER_PIN 15
#define POT_PIN 34
#define LED_R 4
#define LED_G 16
#define LED_B 17
#define SDA_PIN 21
#define SCL_PIN 22

// Constantes
#define MATRIX_ADDRESS 0x70
#define SERIAL_BAUD 115200
#define MIN_SLEEP_TIME 5
#define MAX_SLEEP_TIME 20
#define SERVO_AWAKE_POS 180
#define SERVO_SLEEP_POS 0
#define DEBOUNCE_DELAY 50
#define COUNTDOWN_INTERVAL 1000
#define LED_ON 1
#define LED_OFF 0

// Maquina de estados
enum SystemMode {
  MODE_CAFEINA = 0,
  MODE_SLEEPY = 1,
  MODE_MUDO = 2,
  MODE_CANTOR = 3
};

// Variables globales
Adafruit_8x8matrix matrix = Adafruit_8x8matrix();
Servo servo;

// Estado inicial
unsigned long lastMotionTime = 0;
unsigned long lastCountdownUpdate = 0;
bool inDeepSleep = false;
bool motionDetected = false;
int currentSleepTimeout = 20;
SystemMode currentMode = MODE_SLEEPY;
int lastServoPosition = SERVO_AWAKE_POS;

// Notas musicales
#define NOTE_C4 262
#define NOTE_CS4 277
#define NOTE_D4 294
#define NOTE_DS4 311
#define NOTE_E4 330
#define NOTE_F4 349
#define NOTE_FS4 370
#define NOTE_G4 392
#define NOTE_GS4 415
#define NOTE_A4 440
#define NOTE_AS4 466
#define NOTE_B4 494
#define NOTE_C5 523
#define NOTE_CS5 554
#define NOTE_D5 587
#define NOTE_DS5 622
#define NOTE_E5 659
#define NOTE_F5 698
#define NOTE_FS5 740
#define NOTE_G5 784

// Sleep Musica
int sleepMelody[] = {NOTE_G5, NOTE_E5, NOTE_C5, NOTE_G4};
int sleepDurations[] = {400, 400, 400, 600};

// Mario Musica
int wakeMelody[] = {NOTE_G4, NOTE_C5, NOTE_E5, NOTE_G5, NOTE_C5, NOTE_E5};
int wakeDurations[] = {125, 125, 125, 125, 125, 250};

// Iconos DotMatrix
const uint8_t ICON_CAFEINA[8] PROGMEM = {
  0b00000000,
  0b00111100,
  0b01000010,
  0b01011010,
  0b01011010,
  0b01111110,
  0b00111100,
  0b00000000
};

const uint8_t ICON_SLEEPY[8] PROGMEM = {
  0b00000000,
  0b00100100,
  0b01000010,
  0b00011000,
  0b00011000,
  0b01000010,
  0b00100100,
  0b00000000
};

const uint8_t ICON_MUDO[8] PROGMEM = {
  0b00000000,
  0b00000000,
  0b00000000,
  0b11111111,
  0b11111111,
  0b00000000,
  0b00000000,
  0b00000000
};

const uint8_t ICON_CANTOR[8] PROGMEM = {
  0b00001000,
  0b00001100,
  0b00001110,
  0b00001000,
  0b01101000,
  0b11111000,
  0b11111000,
  0b01101000
};

void setup() {
  Serial.begin(SERIAL_BAUD);
  delay(2000);
  Serial.println("=== Iniciando Sistema de Monitoreo IoT ===");

  // Iniciar Pines base
  configurePins();

  // Dot matrix
  if (!initializeMatrix()) {
    Serial.println("No se pudo inicializar dotMatrix");
    while(1) delay(1000);
  }

  initializeServo();

  // Arduino Cloud
  initProperties();
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);
  setDebugMessageLevel(2);
  ArduinoCloud.printDebugInfo();

  // Iniciar maquina de estados
  lastMotionTime = millis();
  currentMode = static_cast<SystemMode>(modoEstado);
  currentSleepTimeout = sleepTime;

  displayCurrentMode();
  updateServoPosition(0);

  mensajes = "Sistema iniciado correctamente";
  Serial.println("=== Sistema listo ===");
}

void loop() {
  // Arduino Cloud
  ArduinoCloud.update();

  // Leer potenciometro
  updateSleepTimeoutFromPot();

  // Pir
  handleMotionDetection();

  // Timmpo inactividad
  unsigned long inactiveTime = (millis() - lastMotionTime) / 1000;

  // Mostrar tiempo
  if (millis() - lastCountdownUpdate >= COUNTDOWN_INTERVAL) {
    updateCountdownDisplay(inactiveTime);
    lastCountdownUpdate = millis();
  }

  // Deep sleep
  if (shouldEnterDeepSleep(inactiveTime)) {
    enterDeepSleep();
  }

  // Luces RGB
  updateRGBLED();

  delay(50);
}

void configurePins() {
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_R, OUTPUT);
  pinMode(LED_G, OUTPUT);
  pinMode(LED_B, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  digitalWrite(LED_R, LOW);
  digitalWrite(LED_G, LOW);
  digitalWrite(LED_B, LOW);

  esp_sleep_enable_ext0_wakeup(GPIO_NUM_14, 1);
}

bool initializeMatrix() {
  Wire.begin(SDA_PIN, SCL_PIN);

  if (!matrix.begin(MATRIX_ADDRESS)) {
    return false;
  }

  matrix.setRotation(0);
  matrix.setBrightness(8);
  matrix.clear();
  matrix.writeDisplay();
  return true;
}

void initializeServo() {
  servo.attach(SERVO_PIN);
  servo.write(SERVO_AWAKE_POS);
  lastServoPosition = SERVO_AWAKE_POS;
  delay(500);
}

void updateSleepTimeoutFromPot() {
  int potValue = analogRead(POT_PIN);
  int newTimeout = map(potValue, 0, 4095, MIN_SLEEP_TIME, MAX_SLEEP_TIME);

  if (abs(newTimeout - currentSleepTimeout) > 0) {
    currentSleepTimeout = newTimeout;
    sleepTime = newTimeout;

    mensajes = "Tiempo de sleep cambiado a: " + String(currentSleepTimeout) + "s";
    Serial.println(mensajes);

    lastMotionTime = millis();
  }
}

void handleMotionDetection() {
  bool currentPIRState = digitalRead(PIR_PIN);

  if (currentPIRState == HIGH && !motionDetected) {
    motionDetected = true;
    lastMotionTime = millis();

    mensajes = "Movimiento detectado!";
    Serial.println(mensajes);

    updateServoPosition(0);
  } else if (currentPIRState == LOW) {
    motionDetected = false;
  }
}

void updateCountdownDisplay(unsigned long inactiveTime) {
  updateServoPosition(inactiveTime);

  if (currentMode != MODE_CAFEINA && inactiveTime < currentSleepTimeout) {
    int timeLeft = currentSleepTimeout - inactiveTime;
    Serial.println("Tiempo restante para dormir: " + String(timeLeft) + "s");
  }
}

void updateServoPosition(unsigned long inactiveTime) {
  int targetPosition;

  if (currentMode == MODE_CAFEINA) {
    targetPosition = SERVO_AWAKE_POS;
  } else if (inactiveTime >= currentSleepTimeout) {
    targetPosition = SERVO_SLEEP_POS;
  } else {
    targetPosition = map(inactiveTime, 0, currentSleepTimeout, SERVO_AWAKE_POS, SERVO_SLEEP_POS);
  }

  if (abs(targetPosition - lastServoPosition) > 5) {
    servo.write(targetPosition);
    lastServoPosition = targetPosition;
  }
}

bool shouldEnterDeepSleep(unsigned long inactiveTime) {
  return (currentMode != MODE_CAFEINA &&
          inactiveTime >= currentSleepTimeout &&
          !motionDetected);
}

void enterDeepSleep() {
  mensajes = "Entrando en modo deep sleep...";
  Serial.println(mensajes);

  if (currentMode == MODE_CANTOR) {
    playMelody(sleepMelody, sleepDurations, 4);
  }

  servo.write(SERVO_SLEEP_POS);
  delay(1000);

  digitalWrite(LED_R, LOW);
  digitalWrite(LED_G, LOW);
  digitalWrite(LED_B, LOW);

  matrix.clear();
  matrix.writeDisplay();

  ArduinoCloud.update();
  delay(1000);

  Serial.println("Yendo a deep sleep...");
  Serial.flush();

  esp_deep_sleep_start();
}

void displayCurrentMode() {
  matrix.clear();

  const uint8_t* iconData = getIconForMode(currentMode);

  for (int y = 0; y < 8; y++) {
    uint8_t row = pgm_read_byte(&iconData[y]);
    for (int x = 0; x < 8; x++) {
      if (row & (1 << (7 - x))) {
        matrix.drawPixel(x, y, LED_ON);
      }
    }
  }

  matrix.writeDisplay();
}

const uint8_t* getIconForMode(SystemMode mode) {
  switch (mode) {
    case MODE_CAFEINA: return ICON_CAFEINA;
    case MODE_SLEEPY:  return ICON_SLEEPY;
    case MODE_MUDO:    return ICON_MUDO;
    case MODE_CANTOR:  return ICON_CANTOR;
    default:           return ICON_SLEEPY;
  }
}

void updateRGBLED() {
  if (ledState) {
    uint8_t r, g, b;
    ledColor.getValue().getRGB(r, g, b);

    analogWrite(LED_R, r);
    analogWrite(LED_G, g);
    analogWrite(LED_B, b);
  } else {
    digitalWrite(LED_R, LOW);
    digitalWrite(LED_G, LOW);
    digitalWrite(LED_B, LOW);
  }
}

void playMelody(int melody[], int durations[], int length) {
  for (int i = 0; i < length; i++) {
    int noteDuration = durations[i];
    tone(BUZZER_PIN, melody[i], noteDuration);
    delay(noteDuration * 1.3);
    noTone(BUZZER_PIN);
  }
}

void onLedStateChange() {
  Serial.println("Estado LED cambiado: " + String(ledState ? "ON" : "OFF"));
  mensajes = "LED " + String(ledState ? "encendido" : "apagado");
}

void onLedColorChange() {
  uint8_t r, g, b;
  ledColor.getValue().getRGB(r, g, b);
  Serial.println("Color LED cambiado: R=" + String(r) + " G=" + String(g) + " B=" + String(b));
  mensajes = "Color LED actualizado";
}

void onModoEstadoChange() {
  SystemMode newMode = static_cast<SystemMode>(constrain(modoEstado, 0, 3));

  if (newMode != currentMode) {
    currentMode = newMode;

    String modeNames[] = {"Cafeína", "Sleepy", "Mudo", "Cantor"};
    mensajes = "Modo cambiado a: " + modeNames[currentMode];
    Serial.println(mensajes);

    if (currentMode == MODE_CANTOR) {
      playMelody(wakeMelody, wakeDurations, 6);
    }

    displayCurrentMode();
    lastMotionTime = millis();
  }
}

void onSleepTimeChange() {
  currentSleepTimeout = constrain(sleepTime, MIN_SLEEP_TIME, MAX_SLEEP_TIME);
  mensajes = "Tiempo de sleep desde cloud: " + String(sleepTime) + "s";
  Serial.println(mensajes);
  lastMotionTime = millis();
}

void wakeUpCallback() {
  Serial.println("=== DESPERTANDO ===");
  mensajes = "Sistema despertado por movimiento";

  if (currentMode == MODE_CANTOR) {
    playMelody(wakeMelody, wakeDurations, 6);
  }

  servo.write(SERVO_AWAKE_POS);
  lastServoPosition = SERVO_AWAKE_POS;

  displayCurrentMode();

  lastMotionTime = millis();
  lastCountdownUpdate = millis();
}


void printSystemStatus() {
  Serial.println("=== Estado del Sistema ===");
  Serial.println("Modo: " + String(currentMode));
  Serial.println("Timeout: " + String(currentSleepTimeout) + "s");
  Serial.println("LED Estado: " + String(ledState));
  Serial.println("Movimiento: " + String(motionDetected ? "SÍ" : "NO"));
  Serial.println("========================");
}

void onLedOnChange()  {
  updateRGBLED();
}
```

## 🧠 ¿Qué hace este sistema?

- Detecta movimiento con un sensor PIR.
- Entra en **modo de bajo consumo** si no hay actividad.
- Permite controlar una **luz RGB** desde internet.
- Reproduce melodías al dormir o despertar (modo "cantor").
- Muestra el estado del sistema en una **matriz LED 8x8**.
- Usa un **servomotor** como indicador visual del tiempo restante antes de dormir.

---

## 🛠️ Componentes principales

| Componente                        | Función                                 |
| --------------------------------- | --------------------------------------- |
| ESP32                             | Microcontrolador central                |
| Sensor PIR (GPIO 14)              | Detecta movimiento humano               |
| Potenciómetro (GPIO 34)           | Ajusta tiempo para entrar en deep sleep |
| Servo motor (GPIO 25)             | Muestra cuenta regresiva con ángulo     |
| Buzzer (GPIO 15)                  | Reproduce melodías                      |
| LED RGB (GPIO 4, 16, 17)          | Luz controlable desde Arduino Cloud     |
| Matriz LED 8x8 (I2C: GPIO 21, 22) | Íconos del estado actual                |

---

## 🖥️ Funcionalidades del Código

### 1. Control del LED RGB

- El usuario puede **encender/apagar** el LED (`ledState`).
- Puede modificar su color con la variable `ledColor`.

### 2. Deep Sleep

- El sistema se duerme si no hay movimiento por `sleepTime` segundos.
- El tiempo se define localmente con el potenciómetro (5 a 20 s) y puede sincronizarse con la nube.
- El ESP32 despierta **automáticamente** si el sensor PIR detecta movimiento.

### 3. Modos del Sistema

El modo se cambia desde el dashboard con la variable `modoEstado` (0 a 3):

| Modo          | Descripción                | Ícono |
| ------------- | -------------------------- | ----- |
| `0` - Cafeína | No duerme nunca            | ☕    |
| `1` - Sleepy  | Sleep habilitado           | 😴    |
| `2` - Mudo    | No hay música              | 🔇    |
| `3` - Cantor  | Música al dormir/despertar | 🎶    |

La matriz LED muestra un ícono representativo del estado actual.

### 4. Indicador de cuenta regresiva

Cada segundo, se actualiza la posición del servo motor (de 180° a 0°) mostrando cuánto tiempo falta para entrar en sleep.

### 5. Melodías

- Al dormir: melodía tipo bajada.
- Al despertar: melodía alegre inspirada en Mario Bros.
- Solo suena en **modo Cantor**.

---

## 🌐 Variables en Arduino Cloud

| Variable     | Tipo         | Descripción                           |
| ------------ | ------------ | ------------------------------------- |
| `ledState`   | `bool`       | Encendido/apagado del LED RGB         |
| `ledColor`   | `CloudColor` | Color actual del LED                  |
| `modoEstado` | `int`        | Estado actual del sistema (0–3)       |
| `sleepTime`  | `int`        | Tiempo de inactividad antes de dormir |
| `mensajes`   | `String`     | Mensajes del sistema para el usuario  |

---

## 🔁 Flujo de ejecución

1. Se inicia el sistema con `setup()`.
2. Se configuran los pines y se conecta a la nube.
3. Se leen continuamente los sensores y la nube (`loop()`).
4. Si no hay movimiento:
   - Se actualiza el servo.
   - Se muestra la cuenta regresiva.
   - Al llegar a 0 → **modo deep sleep**.
5. Si se detecta movimiento → se reinicia el contador.

---

## 🧪 Prueba de funcionamiento

1. Enciende el sistema conectado a Arduino Cloud.
2. Cambia los modos y colores desde el dashboard.
3. Ajusta el potenciómetro y revisa cómo cambia el tiempo antes del sleep.
4. Observa el ángulo del servo cambiar y la matriz LED actualizarse.
5. Detén el movimiento → espera → sistema se duerme (y suena).
6. Mueve algo → se despierta automáticamente (y suena si está en modo cantor).

---

## 📌 Recomendaciones

- Alimenta el servo con fuente externa si se vuelve inestable.
- Asegúrate de tener una conexión estable a WiFi para sincronización en la nube.
- Si deseas agregar más íconos, modifica los arrays `ICON_*` en el código.

---

## 📎 Archivos relevantes

- `main.ino`: código fuente principal del proyecto.
- `thingProperties.h`: generado por Arduino Cloud, contiene las variables vinculadas.

---

## 📷 Vista esperada del Dashboard

- Switch para LED ON/OFF
- Selector de color
- Dropdown con los 4 modos del sistema
- Visualización del tiempo para sleep
- Consola con mensajes (`mensajes`)

---
