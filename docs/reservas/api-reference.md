---
sidebar_position: 4
title: Referencia de API Endpoints
description: Referencia completa y concisa de todos los endpoints REST disponibles
---

# Referencia de Endpoints API

Referencia rápida de todos los endpoints disponibles en el sistema de reservas.

:::info
**Base URL:** `https://reservas.aldored.com/api`  
**Autenticación:** Bearer token o sesión requerida  
**Formato:** JSON
:::

## Teléfono & Verificación

### Guardar Teléfono

```http
POST /me/phone
Content-Type: application/json

{
  "phone": "912345678",
  "country": "CL",
  "whatsapp_opt_in": true
}
```

**Response (200/201):**

```json
{
  "ok": true,
  "phone_e164": "+56912345678",
  "requires_otp": false,
  "message": "Teléfono guardado exitosamente."
}
```

**Límite de rate:** 6 requests/minuto

--- ### Verificar OTP

```http
POST /me/phone/verify-otp
Content-Type: application/json

{
  "otp_code": "123456"
}
```

**Response (200):**

```json
{
  "ok": true,
  "message": "Teléfono verificado exitosamente."
}
```

**Límite de rate:** 6 requests/minuto

---

## Salas

### Listar Salas

```http
GET /rooms
```

**Query Parameters:**

- `page` (int, optional) - Página (default: 1)
- `per_page` (int, optional) - Por página (default: 15)

**Response (200):**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Sala de Conferencias A",
      "description": "Para 10-15 personas",
      "capacity": 15,
      "location": "Piso 2",
      "status": "active"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 42
  }
}
```

--- ### Crear Sala

```http
POST /rooms
Content-Type: application/json

{
  "name": "Nueva Sala",
  "description": "Descripción opcional",
  "capacity": 20,
  "location": "Piso 3"
}
```

**Response (201):**

```json
{
  "data": {
    "id": 5,
    "name": "Nueva Sala",
    "capacity": 20,
    "status": "active"
  }
}
```

**Permisos:** Admin del tenant

--- ### Obtener Sala

```http
GET /rooms/{id}
```

**Response (200):**

```json
{
  "data": {
    "id": 1,
    "name": "Sala A",
    "capacity": 15,
    "location": "Piso 2",
    "status": "active"
  }
}
```

--- ### Actualizar Sala

```http
PUT /rooms/{id}
Content-Type: application/json

{
  "name": "Sala Actualizada",
  "capacity": 20
}
```

**Response (200):** Sala actualizada

**Permisos:** Admin del tenant

--- ### Eliminar Sala

```http
DELETE /rooms/{id}
```

**Response (204):** Sin contenido

**Permisos:** Admin del tenant

--- ### Verificar Disponibilidad

```http
GET /rooms/{id}/availability
```

**Query Parameters:**

- `start_datetime` (string, required) - ISO 8601 (ej: 2025-01-15T10:00:00Z)
- `end_datetime` (string, required) - ISO 8601

**Response (200):**

```json
{
  "available": true,
  "room_id": 1,
  "room_name": "Sala A",
  "start": "2025-01-15T10:00:00Z",
  "end": "2025-01-15T11:00:00Z",
  "conflicts": []
}
```

---

## Reservas

### Listar Reservas

```http
GET /bookings
```

**Query Parameters:**

- `room_id` (int, optional) - Filtrar por sala
- `start_date` (string, optional) - YYYY-MM-DD
- `end_date` (string, optional) - YYYY-MM-DD
- `status` (string, optional) - confirmed|cancelled|pending
- `page` (int, optional) - Página
- `per_page` (int, optional) - Por página

**Response (200):**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Reunión de Equipo",
      "room": { "id": 1, "name": "Sala A" },
      "start_datetime": "2025-01-15T10:00:00Z",
      "end_datetime": "2025-01-15T11:00:00Z",
      "status": "confirmed",
      "created_by": { "id": 1, "name": "Juan" },
      "guests": [{ "id": 2, "name": "María" }],
      "has_google_meet": true,
      "google_meet_link": "https://meet.google.com/abc-defg-hij"
    }
  ],
  "meta": { "current_page": 1, "total": 15 }
}
```

--- ### Crear Reserva

```http
POST /bookings
Content-Type: application/json

{
  "title": "Reunión Importante",
  "room_id": 1,
  "start_datetime": "2025-01-15T10:00:00Z",
  "end_datetime": "2025-01-15T11:00:00Z",
  "description": "Descripción opcional",
  "has_google_meet": true,
  "guests": ["maria@example.com", "pablo@example.com"]
}
```

**Response (201):**

```json
{
  "data": {
    "id": 5,
    "title": "Reunión Importante",
    "room": { "id": 1, "name": "Sala A" },
    "status": "confirmed",
    "google_meet_link": "https://meet.google.com/xyz-wxyz-abc",
    "created_at": "2025-01-15T09:30:00Z"
  }
}
```

**Validaciones:**

- Sala debe existir
- No debe haber conflictos
- Hora de inicio debe ser en el futuro
- Hora de fin debe ser después del inicio
- Invitados deben ser usuarios válidos

--- ### Obtener Reserva

```http
GET /bookings/{id}
```

**Response (200):**

```json
{
  "data": {
    "id": 1,
    "title": "Reunión",
    "room": {
      "id": 1,
      "name": "Sala A",
      "capacity": 15
    },
    "start_datetime": "2025-01-15T10:00:00Z",
    "end_datetime": "2025-01-15T11:00:00Z",
    "description": "Detalles",
    "status": "confirmed",
    "created_by": {
      "id": 1,
      "name": "Juan",
      "email": "juan@example.com"
    },
    "guests": [{ "id": 2, "name": "María", "email": "maria@example.com" }],
    "has_google_meet": true,
    "google_meet_link": "https://meet.google.com/abc-defg-hij",
    "created_at": "2025-01-10T15:30:00Z",
    "updated_at": "2025-01-10T15:30:00Z"
  }
}
```

--- ### Actualizar Reserva

```http
PUT /bookings/{id}
Content-Type: application/json

{
  "title": "Reunión Actualizada",
  "start_datetime": "2025-01-16T10:00:00Z",
  "end_datetime": "2025-01-16T11:00:00Z",
  "guests": ["maria@example.com"]
}
```

**Response (200):** Reserva actualizada

**Permisos:** Creador o admin del tenant

--- ### Cancelar Reserva

```http
PATCH /bookings/{id}/cancel
Content-Type: application/json

{
  "reason": "Cambio de planes"
}
```

**Response (200):**

```json
{
  "data": {
    "id": 1,
    "status": "cancelled",
    "cancelled_at": "2025-01-15T16:00:00Z"
  }
}
```

**Acciones automáticas:**

- Email a asistentes
- WhatsApp al organizador
- Eliminar evento de Google Calendar

--- ### Eliminar Reserva

```http
DELETE /bookings/{id}
```

**Response (204):** Sin contenido

**Permisos:** Creador o admin

--- ### Buscar Usuarios

```http
GET /bookings/search-users
```

**Query Parameters:**

- `q` (string, required) - Término de búsqueda (nombre o email)

**Response (200):**

```json
{
  "data": [
    {
      "id": 2,
      "name": "María García",
      "email": "maria@example.com"
    },
    {
      "id": 3,
      "name": "María López",
      "email": "maria.lopez@example.com"
    }
  ]
}
```

--- ### Verificar Disponibilidad

```http
GET /bookings/check-availability
```

**Query Parameters:**

- `room_id` (int, required)
- `start_datetime` (string, required)
- `end_datetime` (string, required)

**Response (200):**

```json
{
  "available": true,
  "conflicts": []
}
```

O si hay conflictos:

```json
{
  "available": false,
  "conflicts": [
    {
      "id": 3,
      "title": "Otra Reunión",
      "start": "2025-01-15T10:15:00Z",
      "end": "2025-01-15T10:45:00Z"
    }
  ]
}
```

--- ### Obtener Calendario

```http
GET /bookings/calendar
```

**Query Parameters:**

- `start` (string, optional) - Fecha inicio (YYYY-MM-DD)
- `end` (string, optional) - Fecha fin (YYYY-MM-DD)

**Response (200):**

```json
{
  "data": [
    {
      "id": 1,
      "title": "Reunión A",
      "start": "2025-01-15T10:00:00Z",
      "end": "2025-01-15T11:00:00Z",
      "room": "Sala A",
      "color": "#3b82f6"
    },
    {
      "id": 2,
      "title": "Reunión B",
      "start": "2025-01-15T14:00:00Z",
      "end": "2025-01-15T15:00:00Z",
      "room": "Sala B",
      "color": "#ef4444"
    }
  ]
}
```

---

## Dashboard

### Calendario Semanal

```http
GET /dashboard/weekly-calendar
```

**Query Parameters:**

- `week_offset` (int, optional) - Offset de semana (0=hoy)
- `room_id` (int, optional) - Filtrar por sala

**Response (200):**

```json
{
  "week": "2025-01-13 to 2025-01-19",
  "data": {
    "Monday": [
      {
        "time": "10:00-11:00",
        "booking_id": 1,
        "booking": "Reunión A",
        "room": "Sala A"
      }
    ],
    "Tuesday": [],
    "Wednesday": [
      {
        "time": "14:00-15:00",
        "booking_id": 2,
        "booking": "Reunión B",
        "room": "Sala B"
      }
    ]
  }
}
```

--- ### Calendar de Sala

```http
GET /dashboard/room-calendar/{roomId}
```

**Query Parameters:**

- `month` (string, optional) - YYYY-MM

**Response (200):**

```json
{
  "room_id": 1,
  "room_name": "Sala A",
  "month": "2025-01",
  "bookings": [
    {
      "date": "2025-01-15",
      "start": "10:00",
      "end": "11:00",
      "title": "Reunión"
    }
  ]
}
```

---

## Estado de Respuesta

| Código  | Descripción                         |
| ------- | ----------------------------------- |
| **200** | OK - Operación exitosa              |
| **201** | Created - Recurso creado            |
| **204** | No Content - Eliminado              |
| **400** | Bad Request - Formato inválido      |
| **401** | Unauthorized - No autenticado       |
| **403** | Forbidden - Sin permisos            |
| **404** | Not Found - Recurso no existe       |
| **422** | Unprocessable - Error de validación |
| **429** | Too Many Requests - Rate limit      |
| **500** | Server Error - Error interno        |

---

## Filtros Comunes

### Por Rango de Fechas

```http
GET /bookings?start_date=2025-01-15&end_date=2025-01-31
```

### Por Sala

```http
GET /bookings?room_id=1
```

### Por Estado

```http
GET /bookings?status=confirmed
```

### Combinados

```http
GET /bookings?room_id=1&start_date=2025-01-15&status=confirmed&page=1&per_page=10
```

---

## Campos Comunes

### Timestamps

Todos en formato ISO 8601 UTC:

```
"2025-01-15T10:30:00Z"
```

### Estados de Reserva

- `confirmed` - Confirmada
- `pending` - Pendiente
- `cancelled` - Cancelada

### Estados de Sala

- `active` - Disponible
- `inactive` - No disponible

### Formato E.164 (Teléfono)

```
"+56912345678"   // Chile
"+34912345678"   // España
"+1234567890"    // USA
```

---

## Ejemplos Rápidos

### Crear y obtener reserva en dos pasos

```bash
# 1. Crear
curl -X POST https://tudominio.com/api/bookings \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi Reunión",
    "room_id": 1,
    "start_datetime": "2025-01-15T10:00:00Z",
    "end_datetime": "2025-01-15T11:00:00Z"
  }'

# 2. Obtener (reemplaza {id} con el ID retornado)
curl https://tudominio.com/api/bookings/{id} \
  -H "Authorization: Bearer TOKEN"
```

### Cancelar reserva

```bash
curl -X PATCH https://tudominio.com/api/bookings/{id}/cancel \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"reason": "Ya no es necesaria"}'
```

### Buscar usuarios

```bash
curl "https://tudominio.com/api/bookings/search-users?q=maria" \
  -H "Authorization: Bearer TOKEN"
```

---

## Errores Comunes

### 422 - Error de Validación

```json
{
  "message": "Validation failed",
  "errors": {
    "room_id": ["La sala no existe"],
    "start_datetime": ["Debe ser en el futuro"]
  }
}
```

### 409 - Conflicto de horario

```json
{
  "message": "La sala ya está reservada en ese horario"
}
```

### 429 - Rate Limit

```json
{
  "message": "Too many requests. Please try again in 60 seconds.",
  "retry_after": 60
}
```

---
