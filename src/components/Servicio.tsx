import { business, formatearPrecio } from '../config/business';
import './Servicio.css';

export default function Servicio() {
  const precioFormateado = formatearPrecio(business.precio, business.moneda);

  return (
    <section
      id="servicio"
      className="servicio section-wrapper"
      aria-labelledby="servicio-heading"
    >
      <div className="section-inner servicio-grid">
        {/* Columna de contenido */}
        <div className="servicio-content">
          <span className="section-label">Lo que incluye</span>
          <h2 id="servicio-heading" className="section-title">
            Lavado completo
          </h2>
          <p className="servicio-desc">
            Un único servicio con todo incluido. Trabajamos cada detalle para
            que tu auto quede impecable, por dentro y por fuera.
          </p>

          <ul className="servicio-list" aria-label="Servicios incluidos">
            {business.servicios.map((s) => (
              <li key={s.label} className="servicio-item">
                <span className="servicio-check" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Tarjeta de precio */}
        <div className="servicio-card" role="complementary" aria-label="Precio del servicio">
          <p className="servicio-card-label">Precio del lavado completo</p>
          <p className="servicio-card-precio" aria-label={`Precio: ${precioFormateado}`}>
            {precioFormateado}
          </p>
          <p className="servicio-card-moneda">Pesos argentinos</p>
          <span className="servicio-card-tag">Todo incluido</span>
          <div className="servicio-card-divider" aria-hidden="true" />
          <p className="servicio-card-note">
            El precio cubre todos los ítems del servicio. Sin costos adicionales
            por tamaño de vehículo o extras.
          </p>
        </div>
      </div>
    </section>
  );
}
