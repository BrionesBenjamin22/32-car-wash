/**
 * business.ts
 * Fuente única de verdad para los datos del negocio.
 * Completá los campos vacíos cuando estén disponibles.
 */

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export interface ServicioItem {
  /** Etiqueta visible en la UI */
  label: string;
}

export interface ParBeforeAfter {
  /** URL de la imagen "antes" */
  antes: string;
  /** URL de la imagen "después" */
  despues: string;
  /** Alt text de la imagen "antes" */
  altAntes: string;
  /** Alt text de la imagen "después" */
  altDespues: string;
  /** Leyenda opcional para el par */
  leyenda?: string;
}

export interface HorarioItem {
  dias: string;
  horario: string;
}

export interface BusinessConfig {
  nombre: string;
  tagline: string;
  frase: string;
  categorias: string[];

  servicios: ServicioItem[];
  precio: number;
  moneda: string;

  /** Número en formato internacional, sin espacios ni símbolos. Ej: "5491112345678" */
  whatsapp: string;
  /** Mensaje precargado para WhatsApp */
  mensajeWhatsapp: string;

  /** URL completa de la cuenta de Instagram. Vacía = se oculta. */
  instagram: string;

  /** URL de Google Maps. Vacía = se oculta. */
  googleMaps: string;

  direccion: string;
  horarios: HorarioItem[];

  /** Pares de imágenes antes/después para el carrusel */
  galeriaBeforeAfter: ParBeforeAfter[];

  productos: {
    visible: boolean;
    anuncio: string;
  };
}

// ---------------------------------------------------------------------------
// Datos del negocio
// ---------------------------------------------------------------------------

export const business: BusinessConfig = {
  nombre: '32 Car Wash',
  tagline: 'Lavado artesanal de autos',
  frase: 'Cuidamos tu auto por dentro y por fuera',
  categorias: ['Detailing', 'Exteriores', 'Interiores'],

  servicios: [
    { label: 'Lavado exterior' },
    { label: 'Aspirado' },
    { label: 'Limpieza completa del interior' },
    { label: 'Limpieza de tapizados' },
    { label: 'Acondicionamiento de plásticos y neumáticos' },
  ],

  precio: 15000,
  moneda: 'ARS',

  // ─── Pendiente: completar con el número real ──────────────────────────────
  whatsapp: '',
  mensajeWhatsapp:
    'Hola, vi la página de 32 Car Wash y quería consultar disponibilidad para un lavado',

  // ─── Pendiente: URL de Instagram ─────────────────────────────────────────
  instagram: '',

  // ─── Pendiente: URL de Google Maps ───────────────────────────────────────
  googleMaps: '',

  direccion: 'Calle 32 N.º 132, entre 117 y 118',

  // ─── Pendiente: confirmar días de atención ───────────────────────────────
  horarios: [{ dias: '', horario: 'De 9 a 19 h' }],

  // ─── Sin fotografías por ahora; agregar cuando estén disponibles ─────────
  galeriaBeforeAfter: [],

  productos: {
    visible: true,
    anuncio: 'Próximamente: productos para el cuidado y la limpieza de tu auto',
  },
};

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------

/** Formatea el precio según la moneda configurada */
export function formatearPrecio(precio: number, moneda: string): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: moneda,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(precio);
}

/** Genera la URL de WhatsApp con el mensaje precargado */
export function urlWhatsapp(numero: string, mensaje: string): string {
  const encoded = encodeURIComponent(mensaje);
  return `https://wa.me/${numero}?text=${encoded}`;
}

// ---------------------------------------------------------------------------
// Analytics stub (sin proveedor integrado todavía)
// ---------------------------------------------------------------------------

type EventName = 'whatsapp_click' | 'maps_click' | 'instagram_click';

interface EventParams {
  location?: string;
  element_id?: string;
}

/** Función centralizada para futuras mediciones. No envía datos externos. */
export function trackEvent(name: EventName, params?: EventParams): void {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, params);
  }
  // TODO: integrar proveedor de analítica cuando se decida (ej. GA4, Plausible)
}
