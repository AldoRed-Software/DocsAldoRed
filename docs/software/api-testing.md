# Cómo probar la API

## Problema común: "Failed to fetch"

Si ves este error al probar la API desde la documentación del navegador, **es completamente normal**. El problema se debe a las políticas CORS (Cross-Origin Resource Sharing) del navegador, **no a un error en la API**.

## Soluciones recomendadas

### 1. Postman (Más fácil)

1. **Descarga Postman**: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. **Importa la API**:
   - Abre Postman
   - Clic en "Import"
   - Pega esta URL: `https://aldored.com/openapi.json`
   - ¡Listo! Todos los endpoints aparecerán automáticamente
3. **Configura tu token**:
   - Ve a la pestaña "Authorization"
   - Selecciona "Bearer Token"
   - Pega tu API key

### 2. cURL (Terminal)

Copia y pega estos comandos en tu terminal:

#### BTE Emitidas

```bash
curl -X POST "https://api.aldored.com/sii/bte/emitidas/documentos/12345678-9/202501" \
  -H "Authorization: Bearer TU_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
     "auth": {
        "pass": {
          "rut": "12345678-9",
          "clave": "tu_clave_sii"
        }
     }
  }'
```

#### BHE Recibidas

```bash
curl -X POST "https://api.aldored.com/sii/bhe/recibidas/documentos/12345678-9/202501" \
  -H "Authorization: Bearer TU_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
     "auth": {
        "pass": {
          "rut": "12345678-9",
          "clave": "tu_clave_sii"
        }
     }
  }'
```

#### RCV Informe Previo

```bash
curl -X POST "https://api.aldored.com/sii/rcv/informe-previo/12" \
  -H "Authorization: Bearer TU_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
     "auth": {
        "pass": {
          "rut": "12345678-9",
          "clave": "tu_clave_sii"
        }
     }
  }' \
  --output informe.zip
```

### 3. Desde tu código

#### JavaScript/Node.js

```javascript
const response = await fetch(
  "https://api.aldored.com/sii/bte/emitidas/documentos/12345678-9/202501",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer TU_API_TOKEN",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: {
        pass: {
          rut: "12345678-9",
          clave: "tu_clave_sii",
        },
      },
    }),
  }
);

const data = await response.json();
console.log(data);
```

#### Python

```python
import requests

url = "https://api.aldored.com/sii/bte/emitidas/documentos/12345678-9/202501"
headers = {
     "Authorization": "Bearer TU_API_TOKEN",
     "Content-Type": "application/json"
}
data = {
     "auth": {
          "pass": {
                "rut": "12345678-9",
                "clave": "tu_clave_sii"
          }
     }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

#### PHP

```php
<?php
$url = "https://api.aldored.com/sii/bte/emitidas/documentos/12345678-9/202501";
$headers = [
     "Authorization: Bearer TU_API_TOKEN",
     "Content-Type: application/json"
];
$data = json_encode([
     "auth" => [
          "pass" => [
                "rut" => "12345678-9",
                "clave" => "tu_clave_sii"
          ]
     ]
]);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
```

## Configuración de autenticación

### Bearer Token

Todos los endpoints requieren un token de autorización:

```
Authorization: Bearer tu_api_token_aqui
```

### Credenciales SII

La mayoría de endpoints también requieren tus credenciales del SII en el body:

```json
{
  "auth": {
    "pass": {
      "rut": "12345678-9",
      "clave": "tu_clave_sii"
    }
  }
}
```

## ¿Necesitas ayuda?

Si sigues teniendo problemas:

1. **Verifica tu API token**: Asegúrate de que está activo en tu plan
2. **Revisa el rate-limit**: Cada plan tiene límites por minuto
3. **Valida el formato**: RUT debe incluir guión y dígito verificador
4. **Contacta soporte**: [aldo@aldored.com](mailto:aldo@aldored.com)

## Códigos de respuesta

- `200` - Éxito
- `400` - Error en parámetros
- `401` - Token inválido
- `403` - Credenciales SII incorrectas
- `429` - Rate limit excedido

---

**Recuerda**: El error "Failed to fetch" en el navegador **NO** significa que la API esté rota. Es una limitación del navegador, no de nuestro servicio.
