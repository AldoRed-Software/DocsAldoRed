---
sidebar_position: 2
title: Características y Funcionalidades
description: Listado completo de funcionalidades del sistema de reservas, incluyendo APIs para integraciones
---

# Características y Funcionalidades del Sistema de Reservas

Sistema integral de gestión de reservas de salas de reuniones con arquitectura multi-tenant, autenticación moderna y funcionalidades avanzadas de integración.

## Características Principales

### Autenticación e Identidad

#### Google OAuth 2.0

- **Login mediante Google** - Autenticación segura con cuentas de Google
- **Detección automática de tenant** - Basada en el dominio del email del usuario
- **Perfiles de usuario** - Gestión de datos personales y preferencias
- **Logout seguro** - Cierre de sesión con invalidación de tokens

#### Phone Capture & Verification

- **Captura de número telefónico** - Almacenamiento seguro en formato E.164
- **Validación de teléfono por OTP (WhatsApp)** - Verificación mediante código de un solo uso
- **Consentimiento de WhatsApp** - Opt-in/opt-out para notificaciones
- **Edición de perfil** - Actualización de datos de contacto

---

## Multi-Tenancy

### Gestión de Organizaciones

- **Aislamiento de datos por tenant** - Separación completa de información por organización
- **Dominios de email autorizados** - Control de qué dominios pueden acceder
- **Control de roles por tenant** - Admin, Usuario, Super Admin
- **Políticas de acceso granular** - Permisos específicos por rol y tenant

### Tipos de Usuarios

- **Super Admin** - Gestión global del sistema
- **Admin de Tenant** - Gestión de salas y reservas de su organización
- **Usuarios** - Creación y gestión de sus propias reservas

---

## Gestión de Salas y Calendarios

### Salas de Reuniones

#### CRUD de Salas (Web)

- **Crear salas** - Adicionar nuevas salas con configuración
- **Listar salas** - Vista de todas las salas disponibles
- **Editar salas** - Modificar características y disponibilidad
- **Eliminar salas** - Borrar salas del sistema

#### Información de Salas

- Nombre de la sala
- Descripción
- Capacidad
- Ubicación
- Equipamiento disponible
- Estado (activo/inactivo)

### Calendarios

#### Dashboard Visual

- **Vista semanal de calendario** - Visualización de reservas por semana
- **Vista de sala específica** - Calendario individualizado por sala
- **Identificación de disponibilidad** - Slots libres vs ocupados
- **Información de reserva hover** - Detalles al pasar mouse

#### APIs de Calendario

- **`GET /api/dashboard/weekly-calendar`** - Obtener calendario semanal
- **`GET /dashboard/room-calendar/{room}`** - Calendario de sala específica
- **`GET /api/bookings/calendar`** - Evento/calendario de reservas

---

## Sistema de Reservas

### Operaciones CRUD

#### Crear Reservas

- **Formulario intuitivo** - Interfaz visual para crear reservas
- **Selección de sala** - Elegir entre salas disponibles
- **Rango de fechas/horas** - Especificar duración de la reunión
- **Agregar invitados internos** - Buscar y agregar usuarios del tenant
- **Descripción** - Detalles adicionales sobre la reunión
- **Crear Google Meet automático** - Opción para incluir videoconferencia

#### Ver Reservas

- **Detalles de reserva** - Información completa de la reunión
- **Estado actual** - Confirmada, pendiente, cancelada
- **Asistentes** - Lista de invitados y confirmaciones
- **Enlace de Google Meet** - Acceso directo a videoconferencia
- **Historial** - Auditoría de cambios

#### Editar Reservas

- **Cambiar sala** - Reasignar a diferente espacio
- **Modificar horario** - Cambiar fecha/hora de la reunión
- **Agregar/remover invitados** - Gestionar asistentes
- **Actualizar descripción** - Cambiar detalles
- **Validación de conflictos** - Prevenir sobreposición de reservas
- **Actualizar Google Meet** - Regenerar o modificar enlace

#### Cancelar Reservas

- **Cancelación con confirmación** - Paso seguro para cancelar
- **Notificación a asistentes** - Aviso por email y WhatsApp
- **Cancelación de Google Meet** - Eliminar evento de calendario
- **Auditoría** - Registro de quién canceló y cuándo

### Validaciones y Reglas de Negocio

#### Control de Disponibilidad

- **Prevención de conflictos** - No permitir sobreposición de reservas
- **Validación de horario** - Horarios válidos dentro del horario comercial
- **Capacidad de sala** - Validar que asistentes no excedan capacidad
- **Salas activas** - Solo salas disponibles

#### Búsqueda y Filtrado

- **Búsqueda de usuarios** - `GET /api/bookings/search-users` - Encontrar usuarios por nombre/email
- **Búsqueda de disponibilidad** - `GET /api/bookings/check-availability` - Verificar slots disponibles
- **Filtrado por sala** - Ver reservas de sala específica
- **Filtrado por rango de fechas** - Búsqueda temporal

---

## Integración WhatsApp

### Captura de Datos

- **Número telefónico validado** - Formato E.164 internacional
- **Validación de OTP** - Código de verificación por WhatsApp
- **Consentimiento explícito** - Autorización para notificaciones

### Notificaciones

#### Confirmación de Reserva

- **Envío automático** - Cuando se crea una reserva
- **Incluye detalles** - Sala, hora, organizador
- **Código de Google Meet** - Si aplica
- **Link de detalles** - Acceso a la reserva en el sistema

#### Recordatorios Pre-Reserva

- **15 minutos antes** - Notificación de próxima reunión
- **Información completa** - Detalles de la reunión
- **Código de Google Meet** - Para acceso rápido
- **Destinatarios** - Organizador e invitados con WhatsApp verificado

#### Notificaciones de Cambios

- **Reserva modificada** - Cuando se edita una reserva
- **Reserva cancelada** - Cuando se cancela
- **Confirmación de asistencia** - Seguimiento de respuestas
- **Cambio de horario** - Alertas por reeschedule

### Configuración

- **Habilitar/deshabilitar** - Control global de notificaciones
- **Templates WhatsApp** - Plantillas pre-aprobadas por WhatsApp Business
- **Rate limiting** - Límite de 6 intentos por minuto por usuario
- **Reintentos automáticos** - Hasta 3 intentos en caso de fallo
- **Queue de jobs** - Procesamiento asíncrono

---

## Google Meet Integration

### Creación Automática de Videoconferencias

- **Enlace único por reunión** - Código de Google Meet generado automáticamente
- **Integración con Google Calendar** - Evento sincronizado en calendario
- **Usuario como organizador** - El creador de la reserva es host
- **Invitados automáticos** - Asistentes añadidos como participantes

### Gestión de Eventos

#### Crear Google Meet

- **Evento en Google Calendar** - Sincronizado automáticamente
- **Conferencia integrada** - Google Meet enlazado en el evento
- **Acceso abierto** - Participantes pueden:
  - Modificar evento
  - Invitar otros participantes
  - Ver a otros asistentes
- **Fallback** - Generación de link simple si Calendar falla

#### Actualizar Google Meet

- **Cambios en horario** - Actualizar evento en Calendar
- **Cambios en asistentes** - Sincronizar invitados
- **Cambios de sala** - Actualizar detalles del evento
- **Mantener código de Meet** - Link consistente

#### Cancelar Google Meet

- **Eliminación de evento** - Borrar de Google Calendar
- **Notificación a Calendar** - Sincronización inmediata
- **Notificación a asistentes** - Por email y WhatsApp

### Configuración

#### Service Account

- **Archivo de credenciales JSON** - Autenticación segura
- **Permisos necesarios** - Google Calendar API habilitada
- **Compartición de calendario** - Acceso al calendario destino

#### Fallback a OAuth del Usuario

- **Prioridad OAuth** - Usar token del usuario logueado si disponible
- **Token de refresco automático** - Renovación de token expirado
- **Acceso delegado** - Permisos del usuario vs Service Account

### API de Disponibilidad

- **`GET /api/rooms/{room}/availability`** - Verificar slots libres de sala
- **Respuesta en JSON** - Información estructurada de disponibilidad
- **Filtrado por rango** - Consultar disponibilidad por período

---

## Notificaciones por Email

### Templates HTML Profesionales

- **Diseño responsive** - Compatible con todos los clientes de email
- **Branding personalizado** - Logo y colores del tenant
- **Información clara** - Detalles estructurados de la reunión

### Confirmación de Reserva

- **Detalles de reunión** - Sala, fecha, hora, duración
- **Información de organizador** - Quién creó la reserva
- **Lista de asistentes** - Todos los invitados
- **Botón Google Meet** - Acceso directo si aplica
- **Archivo ICS adjunto** - Para agregar a calendario local

### Notificación de Edición

- **Cambios realizados** - Resaltar qué se modificó
- **Información anterior** - Comparar con datos previos
- **Nueva información** - Detalles actualizados
- **Requiere confirmación** - Si es necesario

### Notificación de Cancelación

- **Confirmación de cancelación** - Indicar que fue cancelada
- **Motivo** - Si se proporciona
- **Opciones de re-booking** - Sugerir otras opciones de tiempo
- **Contacto** - Info del organizador

### Configuración

- **SMTP personalizado** - Servidor de correo por tenant
- **Reintento automático** - Reintentos en caso de fallo
- **Queue de jobs** - Procesamiento asíncrono
- **Logging** - Registro de envíos para auditoría

---

## API REST para Integraciones

### Autenticación API

#### Middleware de Autenticación

- **Requisito de login** - Todos los endpoints requieren autenticación
- **Session-based** - Usando sesión Laravel
- **Sanctum tokens** - Soporte para tokens Bearer (si aplica)
- **Rate limiting** - Límite de solicitudes por usuario

#### Headers Requeridos

```
Content-Type: application/json
Accept: application/json
Cookie: laravel_session=tu_session_cookie
```

O con token:

```
Authorization: Bearer tu_token_aqui
```

### Endpoints de Teléfono

#### Guardar Teléfono

**POST `/api/me/phone`**

- **Rate limit:** 6 intentos por minuto
- **Request:**
  ```json
  {
    "phone": "912345678",
    "country": "CL",
    "whatsapp_opt_in": true
  }
  ```
- **Response:** 200/201
  ```json
  {
    "ok": true,
    "phone_e164": "+56912345678",
    "requires_otp": false,
    "message": "Teléfono guardado exitosamente."
  }
  ```

#### Verificar OTP

**POST `/api/me/phone/verify-otp`**

- **Rate limit:** 6 intentos por minuto
- **Request:**
  ```json
  {
    "otp_code": "123456"
  }
  ```
- **Response:** 200
  ```json
  {
    "ok": true,
    "message": "Teléfono verificado exitosamente."
  }
  ```

### Endpoints de Salas

#### Listar Salas

**GET `/api/rooms`**

- **Descripción:** Obtener todas las salas disponibles del tenant
- **Response:** 200
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
    ]
  }
  ```

#### Verificar Disponibilidad de Sala

**GET `/api/rooms/{room}/availability`**

- **Parámetros:**
  - `start_datetime` - Fecha/hora inicio (ISO 8601)
  - `end_datetime` - Fecha/hora fin (ISO 8601)
- **Response:** 200
  ```json
  {
    "available": true,
    "room_id": 1,
    "start": "2025-01-15T10:00:00Z",
    "end": "2025-01-15T11:00:00Z"
  }
  ```

### Endpoints de Reservas

#### Listar Reservas

**GET `/api/bookings`**

- **Parámetros opcionales:**
  - `room_id` - Filtrar por sala
  - `start_date` - Fecha inicio
  - `end_date` - Fecha fin
  - `status` - Estado (confirmed, pending, cancelled)
- **Response:** 200
  ```json
  {
    "data": [
      {
        "id": 1,
        "title": "Reunión de equipo",
        "room": { "id": 1, "name": "Sala A" },
        "start_datetime": "2025-01-15T10:00:00Z",
        "end_datetime": "2025-01-15T11:00:00Z",
        "status": "confirmed",
        "has_google_meet": true,
        "google_meet_link": "https://meet.google.com/xxx-xxxx-xxx"
      }
    ]
  }
  ```

#### Crear Reserva

**POST `/api/bookings`**

- **Request:**
  ```json
  {
    "title": "Reunión de Proyecto",
    "room_id": 1,
    "start_datetime": "2025-01-15T10:00:00Z",
    "end_datetime": "2025-01-15T11:00:00Z",
    "description": "Discusión de roadmap",
    "has_google_meet": true,
    "guests": ["user2@example.com", "user3@example.com"]
  }
  ```
- **Response:** 201
  ```json
  {
    "id": 5,
    "title": "Reunión de Proyecto",
    "room": { "id": 1, "name": "Sala A" },
    "start_datetime": "2025-01-15T10:00:00Z",
    "end_datetime": "2025-01-15T11:00:00Z",
    "status": "confirmed",
    "google_meet_link": "https://meet.google.com/abc-defg-hij"
  }
  ```

#### Obtener Detalles de Reserva

**GET `/api/bookings/{booking}`**

- **Response:** 200
  ```json
  {
    "id": 5,
    "title": "Reunión de Proyecto",
    "room": {
      "id": 1,
      "name": "Sala A",
      "capacity": 15
    },
    "start_datetime": "2025-01-15T10:00:00Z",
    "end_datetime": "2025-01-15T11:00:00Z",
    "description": "Discusión de roadmap",
    "status": "confirmed",
    "created_by": { "id": 1, "name": "Juan", "email": "juan@example.com" },
    "guests": [{ "id": 2, "name": "María", "email": "maria@example.com" }],
    "has_google_meet": true,
    "google_meet_link": "https://meet.google.com/abc-defg-hij",
    "created_at": "2025-01-10T15:30:00Z",
    "updated_at": "2025-01-10T15:30:00Z"
  }
  ```

#### Actualizar Reserva

**PUT `/api/bookings/{booking}`**

- **Request:** (igual estructura que crear, pero con fields a actualizar)
- **Response:** 200 (datos actualizados)

#### Cancelar Reserva

**PATCH `/api/bookings/{booking}/cancel`**

- **Request:**
  ```json
  {
    "reason": "Cambio de planes"
  }
  ```
- **Response:** 200
  ```json
  {
    "id": 5,
    "status": "cancelled",
    "cancelled_at": "2025-01-10T16:00:00Z",
    "message": "Reserva cancelada exitosamente"
  }
  ```

#### Eliminar Reserva

**DELETE `/api/bookings/{booking}`**

- **Response:** 204 (No Content)

#### Buscar Usuarios

**GET `/api/bookings/search-users`**

- **Parámetros:**
  - `q` - Término de búsqueda (nombre o email)
- **Response:** 200
  ```json
  {
    "data": [
      {
        "id": 2,
        "name": "María García",
        "email": "maria@example.com"
      }
    ]
  }
  ```

#### Verificar Disponibilidad

**GET `/api/bookings/check-availability`**

- **Parámetros:**
  - `room_id` - ID de sala
  - `start_datetime` - Inicio (ISO 8601)
  - `end_datetime` - Fin (ISO 8601)
- **Response:** 200
  ```json
  {
    "available": true,
    "conflicts": []
  }
  ```

#### Obtener Calendario

**GET `/api/bookings/calendar`**

- **Parámetros opcionales:**
  - `start` - Fecha inicio
  - `end` - Fecha fin
- **Response:** 200
  ```json
  {
    "data": [
      {
        "id": 1,
        "title": "Reunión A",
        "start": "2025-01-15T10:00:00Z",
        "end": "2025-01-15T11:00:00Z",
        "room": "Sala A"
      }
    ]
  }
  ```

### Endpoints de Dashboard

#### Obtener Calendario Semanal

**GET `/api/dashboard/weekly-calendar`**

- **Parámetros opcionales:**
  - `week_offset` - Semana relativa (0 = esta semana)
  - `room_id` - Filtrar por sala
- **Response:** 200
  ```json
  {
    "week": "2025-01-13 to 2025-01-19",
    "data": {
      "Monday": [
        {
          "time": "10:00-11:00",
          "booking": "Reunión A",
          "room": "Sala A"
        }
      ]
    }
  }
  ```

---

## Seguridad y Auditoría

### Control de Acceso

- **Verificación de tenant** - Middleware automático
- **Permisos por rol** - Admin vs Usuario
- **Isolamiento de datos** - Global scopes automáticos
- **Validación de propiedad** - Solo propietario puede editar

### Auditoría

- **Logging de acciones** - Creación, edición, cancelación
- **Registro de cambios** - Quién cambió qué y cuándo
- **Historial de reservas** - Cambios históricos
- **Logs de API** - Todas las llamadas registradas

### Encriptación

- **Tokens seguros** - Sanctum/session
- **Datos sensibles** - Teléfono, email encriptados
- **Conexiones HTTPS** - SSL/TLS requerido en producción
- **CSRF protection** - Tokens CSRF en todos los formularios

---

## Casos de Uso de Integración

### Sistema de Reservas Externo

```
1. Autenticación:
   POST /login (Google OAuth)

2. Verificar disponibilidad:
   GET /api/rooms/{room}/availability

3. Crear reserva:
   POST /api/bookings

4. Recibir notificaciones:
   Email + WhatsApp automático
```

### CRM Integration

```
1. Sincronizar contactos:
   GET /api/bookings/search-users

2. Crear reunión:
   POST /api/bookings

3. Enviar Google Meet link:
   Extraer de response o GET /api/bookings/{booking}

4. Actualizar estado:
   PATCH /api/bookings/{booking}/cancel
```

### Sistema de Asistencia

```
1. Obtener calendario:
   GET /api/bookings/calendar

2. Marcar asistencia:
   Implementar lógica personalizada

3. Notificaciones:
   Integrar con WhatsApp notifications
```

### Mobile App

```
1. Autenticación con token:
   Usar Sanctum tokens en headers

2. Listar reservas:
   GET /api/bookings

3. Crear/editar:
   POST/PUT /api/bookings

4. Recibir notificaciones:
   Push + Email + WhatsApp
```

---

## Funcionalidades de Reporte

:::note
Las funcionalidades de reporte están disponibles a través de API y pueden ser integradas en dashboards externos.
:::

### Reportes de Reservas

- **Por usuario** - Todas las reservas de un usuario
- **Por sala** - Utilización de salas
- **Por período** - Reservas en rango de fechas
- **Estado** - Confirmadas, canceladas, pendientes

### Métricas

- **Tasa de ocupación** - % de salas utilizadas
- **Tiempo promedio de reunión** - Duración media
- **Salas más utilizadas** - Ranking de salas
- **Horas pico** - Horarios de mayor demanda

---

## Configuración y Personalizacion

### Variables de Entorno (`.env`)

```bash
# Google OAuth
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
GOOGLE_REDIRECT_URI=http://localhost/auth/google/callback

# Google Calendar
GOOGLE_CALENDAR_ID=tu-calendar-id@group.calendar.google.com

# WhatsApp
WHATSAPP_TOKEN=xxx
WHATSAPP_PHONE_NUMBER_ID=xxx
WHATSAPP_OTP_ENABLED=true
WHATSAPP_REMINDERS_ENABLED=true

# Email
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
```

### Personalización por Tenant

- **Logo y colores** - Branding en emails
- **Horarios de disponibilidad** - Horario comercial
- **Políticas de cancelación** - Reglas específicas
- **Templates de email** - Contenido personalizado

---

## Plataformas Soportadas

- **Web** - Interface HTML5/Tailwind CSS
- **API** - REST JSON para integraciones
- **Email** - HTML responsivo
- **WhatsApp** - Plantillas aprobadas
- **Google Calendar** - Sincronización automática
- **Google Meet** - Videoconferencias

---

## Estado de Desarrollo

| Funcionalidad       | Estado   | Notas                          |
| ------------------- | -------- | ------------------------------ |
| Multi-tenancy       | Completo | Producción ready               |
| Google OAuth        | Completo | Con token refresh              |
| Gestión de salas    | Completo | CRUD operativo                 |
| Sistema de reservas | Completo | Validaciones completas         |
| Google Meet         | Completo | Con Calendar sync              |
| WhatsApp            | Completo | Confirmaciones + recordatorios |
| Email               | Completo | Templates HTML                 |
| API REST            | Completo | Todos los endpoints            |
| Auditoría           | Completo | Logging automático             |

---
