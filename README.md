# 32 Car Wash – Landing Page

Sitio estático de una sola página para **32 Car Wash**, un lavadero de autos artesanal.  
Construido con **React 19 + TypeScript + Vite**, gestionado con **pnpm**.

---

## Comandos

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo (http://localhost:5173)
pnpm dev

# Verificar errores de tipado y estilo
pnpm lint

# Compilar para producción (dist/)
pnpm build

# Previsualizar el build local
pnpm preview
```

---

## Configuración del negocio

Toda la información editable está centralizada en:

```
src/config/business.ts
```

### Campos pendientes de completar

| Campo | Descripción | Cómo completarlo |
|---|---|---|
| `whatsapp` | Número en formato internacional | `"5491112345678"` (sin `+`, sin espacios) |
| `instagram` | URL completa de Instagram | `"https://www.instagram.com/32carwash"` |
| `googleMaps` | URL de Google Maps | Pegar el enlace del negocio en Maps |
| `horarios[].dias` | Días de atención | `"Lunes a sábado"` (ejemplo) |

> Los botones de WhatsApp, el enlace de Maps y el ícono de Instagram **se ocultan automáticamente** mientras sus valores estén vacíos. No hay controles inactivos ni información ficticia publicada.

### Ejemplo de configuración completa

```ts
whatsapp: '5492215551234',
instagram: 'https://www.instagram.com/32carwash',
googleMaps: 'https://maps.app.goo.gl/xxxx',
horarios: [{ dias: 'Lunes a sábado', horario: 'De 9 a 19 h' }],
```

---

## Incorporar fotografías de antes y después

Las imágenes del carrusel se configuran en `src/config/business.ts`, campo `galeriaBeforeAfter`:

```ts
galeriaBeforeAfter: [
  {
    antes:      '/fotos/trabajo-1-antes.jpg',
    despues:    '/fotos/trabajo-1-despues.jpg',
    altAntes:   'Interior del auto antes del lavado: asientos con polvo y manchas',
    altDespues: 'Interior del auto después del lavado: asientos limpios',
    leyenda:    'Limpieza de interior – sedan familiar',  // opcional
  },
],
```

### Pasos para agregar fotos

1. Copiá las imágenes a la carpeta `public/fotos/` (crearla si no existe).
2. Agregá un objeto al array `galeriaBeforeAfter` por cada par de imágenes.
3. Escribí descripciones precisas en `altAntes` y `altDespues` (accesibilidad).
4. La sección **"Un antes y un después"** aparece automáticamente cuando hay al menos un par.

### Recomendaciones de imagen

- Formato: **WebP** o JPEG, calidad 80–85 %.
- Dimensiones: mínimo **800 × 600 px** (relación 4:3 recomendada).
- Peso: menos de **200 KB** por imagen.
- Nombre descriptivo y sin espacios: `trabajo-1-antes.webp`.

---

## Analítica

La función `trackEvent` en `src/config/business.ts` centraliza los eventos de medición:

| Evento | Cuándo se dispara |
|---|---|
| `whatsapp_click` | Clic en cualquier botón de WhatsApp |
| `maps_click` | Clic en "Ver en Google Maps" |
| `instagram_click` | Clic en el enlace de Instagram |

En modo desarrollo se imprime en consola (`console.debug`).  
Para integrar un proveedor (GA4, Plausible, Fathom, etc.), editá el cuerpo de `trackEvent` sin cambiar su firma.

---

## Estructura de archivos relevantes

```
src/
├── config/
│   └── business.ts       ← Configuración del negocio (única fuente de verdad)
├── components/
│   ├── Navbar.tsx / .css
│   ├── Hero.tsx / .css
│   ├── Servicio.tsx / .css
│   ├── Resultados.tsx / .css
│   ├── Productos.tsx / .css
│   ├── Ubicacion.tsx / .css
│   └── Contacto.tsx / .css
├── App.tsx
├── main.tsx
└── index.css             ← Sistema de diseño (tokens, reset, utilidades)
```

---

## Datos pendientes de confirmar

- [ ] Número de WhatsApp
- [ ] Días de atención
- [ ] URL de Instagram
- [ ] URL de Google Maps
- [ ] Fotografías de trabajos realizados

---

## Alojamiento

El sitio genera archivos estáticos (`pnpm build` → carpeta `dist/`).  
Es compatible con cualquier servicio de hosting estático: **Netlify, Vercel, GitHub Pages, Cloudflare Pages**, entre otros. La decisión de despliegue está pendiente.
