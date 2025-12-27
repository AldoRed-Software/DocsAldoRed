---
sidebar_position: 5
title: Flujos y Casos de Uso
description: Diagramas y descripción de los flujos principales del sistema
---

# Flujos y Casos de Uso

Documentación visual de los principales flujos de operación del sistema y ejemplos de cómo integrarlo con otros sistemas.

## Índice de Flujos

1. [Autenticación](#autenticación)
2. [Creación de Reserva](#creación-de-reserva)
3. [Edición de Reserva](#edición-de-reserva)
4. [Cancelación de Reserva](#cancelación-de-reserva)
5. [Notificaciones](#notificaciones)
6. [Integraciones Externas](#integraciones-externas)

---

## Autenticación

### Flujo de Login con Google OAuth

```mermaid
graph TD
    A["Usuario"] -->|Click 'Login con Google'| B["Página de Login"]
    B -->|Redirige| C["Google OAuth"]
    C -->|Usuario autoriza| D["Google retorna<br/>código de autorización"]
    D -->|Verifica código| E["Sistema verifica<br/>en Google"]
    E -->|Obtiene email| F{¿Email pertenece<br/>a un tenant?}
    F -->|Sí| G["Buscar/crear usuario<br/>en sistema"]
    F -->|No| H["Error: Dominio<br/>no autorizado"]
    G -->|Crear| I["Crear sesión/token<br/>para el usuario"]
    I -->|Redirigir| J["Dashboard<br/>Usuario autenticado"]
    H -->|Mostrar error| B

    style A fill:#e1f5ff
    style J fill:#c8e6c9
    style H fill:#ffcdd2
```

**Pasos:**

1. Usuario hace clic en "Login con Google"
2. Se redirige a Google OAuth
3. Usuario autoriza la aplicación
4. Sistema verifica el código y obtiene email
5. Sistema busca o crea usuario basado en el tenant
6. Se crea sesión/token
7. Usuario entra al dashboard

---

## Creación de Reserva

### Flujo Principal - Crear Nueva Reserva

```mermaid
graph TD
    A["Usuario autenticado<br/>en Dashboard"] -->|Click 'Nueva Reserva'| B["Formulario de Reserva"]
    B -->|Ingresa datos<br/>título, sala, hora, invitados| C["Validar en cliente"]
    C -->|Campos requeridos<br/>Horario válido| D{¿Errores<br/>locales?}
    D -->|Sí| E["Mostrar errores<br/>específicos"]
    E -->|Corrige| B
    D -->|No| F["POST /api/bookings<br/>Enviar formulario"]
    F -->|Servidor valida| G["Validaciones"]
    G -->|Sala existe<br/>Usuario del tenant<br/>Sin conflictos<br/>Capacidad OK<br/>Invitados válidos| H{¿Validaciones<br/>OK?}
    H -->|No| I["Mostrar errores"]
    I -->|Corrige| B
    H -->|Sí| J["Crear reserva en BD"]
    J -->|¿Google Meet?| K{¿Crear<br/>Google Meet?}
    K -->|No| M["Saltar Google Meet"]
    K -->|Sí| L["Crear evento en<br/>Google Calendar"]
    L -->|¿Éxito?| N{¿API exitosa?}
    N -->|No| O["Crear enlace<br/>fallback simple"]
    N -->|Sí| O
    O -->|Con URL| P["Enviar emails<br/>Confirmación + ICS"]
    P -->|A invitados| Q["¿WhatsApp<br/>verificado?"]
    Q -->|Sí| R["Queue Job:<br/>Enviar WhatsApp"]
    Q -->|No| S["Confirmación<br/>Reserva creada"]
    M -->|No Meet| P
    R -->|Async| S

    style A fill:#e1f5ff
    style S fill:#c8e6c9
    style E fill:#ffcdd2
    style I fill:#ffcdd2
```

**Acciones Automáticas:**

- Email de confirmación con archivo ICS
- WhatsApp con detalles de reunión
- Evento en Google Calendar (si aplica)
- Google Meet enlazado en el evento

---

## Edición de Reserva

### Flujo de Actualización de Reserva

```mermaid
graph TD
    A["Usuario ve reserva<br/>en lista o calendario"] -->|Click 'Editar'| B["Verificar permisos"]
    B -->|¿Es creador<br/>o admin?| C{¿Autorizado?}
    C -->|No| D["Error 403<br/>Sin permisos"]
    C -->|Sí| E["Formulario edición<br/>pre-poblado"]
    E -->|Cambiar:<br/>título, sala, hora<br/>descripción, invitados| F["Validar cambios"]
    F -->|Sin conflictos<br/>Sala válida<br/>Datos correctos| G{¿Hay errores?}
    G -->|Sí| H["Mostrar errores"]
    H -->|Corrige| E
    G -->|No| I["PUT /api/bookings/{id}"]
    I -->|Servidor valida| J["Validar cambios"]
    J -->|Sala válida<br/>Sin conflictos<br/>Invitados válidos| K{¿OK?}
    K -->|No| L["Error en servidor"]
    L -->|Corrige| E
    K -->|Sí| M["Actualizar BD"]
    M -->|Evalúa cambios| N{¿Cambió<br/>hora/sala?}
    N -->|Sí| O["Actualizar<br/>Google Calendar"]
    N -->|No| P["Enviar email<br/>notificación"]
    O -->|Actualizar evento| P
    P -->|A invitados| Q["WhatsApp?"]
    Q -->|Sí| R["Queue Job<br/>Notificar"]
    Q -->|No| S["Confirmación<br/>Reserva actualizada"]
    R -->|Async| S

    style A fill:#e1f5ff
    style S fill:#c8e6c9
    style D fill:#ffcdd2
    style L fill:#ffcdd2
```

**Notificaciones:**

- Email a todos los invitados con cambios
- WhatsApp al organizador
- Evento de Google Calendar sincronizado

---

## Cancelación de Reserva

### Flujo de Cancelación y Limpieza

```mermaid
graph TD
    A["Usuario en detalles<br/>de reserva"] -->|Click 'Cancelar'| B["Modal de confirmación"]
    B -->|'¿Seguro que deseas<br/>cancelar?'| C{¿Confirma<br/>cancelación?}
    C -->|No| D["Cerrar modal"]
    C -->|Sí| E["PATCH /bookings/{id}/cancel"]
    E -->|Con razón opcional| F["Actualizar status<br/>→ 'cancelled'"]
    F -->|Registra timestamp| G{¿Tiene<br/>Google Meet?}
    G -->|No| H["Saltar limpieza"]
    G -->|Sí| I["Eliminar evento<br/>Google Calendar"]
    I -->|Sync inmediata| H
    H -->|Procede| J["Email organizador"]
    J -->|'Reserva cancelada'<br/>Razón + re-agendar| K["Email invitados"]
    K -->|Detalles + quién canceló| L["WhatsApp?"]
    L -->|¿Verificado?| M{¿Enviar<br/>WhatsApp?}
    M -->|Sí| N["Queue Job<br/>Notificar"]
    M -->|No| O["Confirmación<br/>Cancelada"]
    N -->|Async| O

    style A fill:#e1f5ff
    style O fill:#c8e6c9
    style D fill:#fff9c4
```

**Limpieza Automática:**

- Eliminar evento de Google Calendar
- Notificar a todos los invitados
- Notificar al organizador por WhatsApp
- Registrar cancelación en auditoría

---

## Notificaciones

### Flujo de Sistema de Notificaciones

```mermaid
graph TD
    A["Evento en el sistema"] -->|Reserva creada<br/>Reserva modificada<br/>Reserva cancelada<br/>15 min antes| B["Obtener datos<br/>del evento"]
    B -->|Usuario<br/>Invitados<br/>Sala<br/>Meet link<br/>Detalles| C["Generar<br/>notificaciones"]
    C -->|EMAIL<br/>WHATSAPP<br/>ICS| D["Distribuir<br/>a 3 canales"]

    D -->|Email| E["Queue Job:<br/>Mailable"]
    E -->|SMTP| F["Envío Email"]
    F -->|Log| G["Registrar en<br/>auditoría"]

    D -->|WhatsApp| H["Verificar teléfono"]
    H -->|OTP check<br/>opt-in check| I["Queue Job:<br/>WhatsApp API"]
    I -->|Reintentos<br/>hasta 3x| J["Envío WhatsApp"]
    J -->|Log| G

    D -->|ICS| K["Generar archivo<br/>ICS"]
    K -->|Adjuntar| L["Agregar a email"]
    L -->|Log| G

    G -->|Qué se envió<br/>A quién<br/>Cuándo<br/>Status| M["Auditoría<br/>completa"]

    style A fill:#e1f5ff
    style M fill:#c8e6c9
```

**Tipos de Notificaciones:**

1. **Confirmación de Reserva**

   - Destinatario: Organizador + Invitados
   - Contenido: Detalles de reunión, Google Meet link, ICS

2. **Edición de Reserva**

   - Destinatario: Todos los involucrados
   - Contenido: Cambios realizados, nuevos detalles

3. **Cancelación**

   - Destinatario: Organizador + Invitados
   - Contenido: Motivo de cancelación, datos de lo cancelado

4. **Recordatorio (15 min antes)**
   - Destinatario: Organizador + Invitados con WhatsApp
   - Contenido: Recordatorio de próxima reunión, Google Meet link

---

## Integraciones Externas

### Flujo de Integración CRM + Sistema de Reservas

```mermaid
graph LR
    A["Sistema CRM<br/>Externo"] -->|Usuario abre<br/>modal reserva| B["Iframe Sistema<br/>Reservas"]
    B -->|Crea reserva<br/>normal| C["Selecciona sala,<br/>hora, invitados"]
    C -->|API busca| D["GET /bookings/<br/>search-users"]
    D -->|Retorna lista| C
    C -->|Envía| E["POST /api/bookings"]
    E -->|Crea en DB| F["Booking creado"]
    F -->|JSON response| G["booking_id<br/>meet_link<br/>ics_file"]
    G -->|Retorna a CRM| A
    A -->|Guarda booking_id<br/>Inserta link<br/>Actualiza oportunidad| A

    A -.->|Si cancela en CRM| H["DELETE /api/bookings"]
    H -.->|Confirma| A
    A -.->|Si edita en CRM| I["PUT /api/bookings/{id}"]
    I -.->|Actualiza| A
    A -.->|Si cancela en Sistema| J["Webhook notify"]
    J -.->|Actualiza CRM| A

    style A fill:#bbdefb
    style F fill:#c8e6c9
```

### Flujo de Integración con Sistema de Asistencia

```mermaid
graph TD
    A["Sistema Asistencia<br/>Control de acceso"] -->|Cron job cada hora| B["GET /api/bookings/calendar"]
    B -->|Parámetros:<br/>start=hoy<br/>end=hoy+7d| C["Obtener reservas<br/>del período"]
    C -->|Quién, cuándo<br/>sala, visitantes| D["Sistema asistencia<br/>procesa"]
    D -->|1. Autorizar acceso| E["Usuarios internos"]
    D -->|2. Preparar entrada| F["Visitantes externos"]
    D -->|3. Notificar| G["Seguridad"]
    D -->|4. Pre-registrar| H["Credenciales"]

    E -->|Acceso habilitado| I["Log Auditoría"]
    F -->|Entrada lista| I
    G -->|Notificado| I
    H -->|Pre-registrado| I

    I -->|Quién entró<br/>Hora<br/>Sala<br/>Reunión #| J["Auditoría<br/>sincronizada"]

    style A fill:#e1f5ff
    style J fill:#c8e6c9
```

---

## Casos de Uso Típicos

### Caso 1: Reunión Simple Entre Internos

**Actor:** Usuario de la empresa  
**Objetivo:** Agendar reunión con equipo

**Pasos:**

1. Login con Google
2. Click "Nueva Reserva"
3. Seleccionar sala
4. Seleccionar hora
5. Buscar y agregar invitados (María, Juan)
6. Crear Google Meet
7. Crear reserva

**Resultado:**

- Confirmación a todos por email
- Recordatorio 15 min antes por WhatsApp

**Duración:** ~5 minutos  
**Notificaciones:** 2 emails + 1 WhatsApp

---

### Caso 2: Reunión con Cliente Externo

**Actor:** Ejecutivo de ventas  
**Objetivo:** Agendar llamada con prospecto

**Pasos:**

1. Login con Google
2. Click "Nueva Reserva"
3. Seleccionar sala (con Google Meet)
4. Seleccionar hora
5. Agregar email de cliente (externo)
6. Crear Google Meet
7. Crear reserva

**Resultado:**

- Email al cliente con Meet link
- Email a ejecutivo con confirmación
- Recordatorio 15 min antes
- Cliente accede al Meet desde email

**Duración:** ~5 minutos  
**Notificaciones:** 3 emails + 1 WhatsApp

---

### Caso 3: Integración con CRM

**Actor:** Sistema CRM externo  
**Objetivo:** Sincronizar reuniones en ambos sistemas

**Flujo:**

```
CRM → Abre modal "Agendar Reunión"
    → API GET /bookings/search-users?q=maria
    → API POST /bookings (crear)
    → API GET /bookings/{id} (obtener detalles)
    → Guarda booking_id en CRM
    → Usuario ve Google Meet link en CRM

Usuario cancela en CRM:
    → API DELETE /bookings/{id}
    → Sistema notifica por email

Usuario edita en Sistema:
    → Webhook notifica a CRM
    → CRM actualiza su base de datos
```

---

### Caso 4: Reserva Recurrente (Semanal)

**Nota:** Función puede requerir extensión

**Pasos:**

1. Usuario crea reserva
2. Sistema expone opción "Recurrente"
3. Selecciona "Semanal" y duración
4. Sistema crea múltiples reservas

**Resultado:**

- Una reserva por cada semana
- Cada una es independiente
- Se pueden editar/cancelar individualmente

---

## Próximas Mejoras

Planeado para futuras versiones:

- Reservas recurrentes
- Webhooks para integraciones avanzadas
- Importar/exportar de calendarios
- Recordatorios personalizables
- Reportes y analytics
- RSVP y confirmación de asistencia
- Salas virtuales integradas

---
