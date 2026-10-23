import { business, trackEvent } from '../config/business';
import './Ubicacion.css';

export default function Ubicacion() {
  const handleMapsClick = () => {
    trackEvent('maps_click', { location: 'ubicacion', element_id: 'ubicacion-maps-link' });
  };

  const hayHorarioConDias = business.horarios.some((h) => h.dias.trim() !== '');

  return (
    <section
      id="ubicacion"
      className="ubicacion section-wrapper"
      aria-labelledby="ubicacion-heading"
    >
      <div className="section-inner">
        <span className="section-label">Dónde encontrarnos</span>
        <h2 id="ubicacion-heading" className="section-title" style={{ marginBottom: '2rem' }}>
          Ubicación y horarios
        </h2>

        <div className="ubicacion-grid">
          {/* Dirección */}
          <div className="ubicacion-card">
            <div className="ubicacion-card-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="ubicacion-card-title">Dirección</p>
            <address className="ubicacion-card-value" style={{ fontStyle: 'normal' }}>
              {business.direccion}
            </address>

            {business.googleMaps && (
              <a
                id="ubicacion-maps-link"
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="ubicacion-maps-link"
                onClick={handleMapsClick}
                aria-label="Ver en Google Maps (abre en nueva pestaña)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Ver en Google Maps
              </a>
            )}
          </div>

          {/* Horarios */}
          <div className="ubicacion-card">
            <div className="ubicacion-card-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="ubicacion-card-title">Horarios</p>

            {hayHorarioConDias ? (
              <ul className="horario-list" aria-label="Horarios de atención">
                {business.horarios
                  .filter((h) => h.dias.trim() !== '')
                  .map((h, i) => (
                    <li key={i} className="horario-row">
                      <span className="dia">{h.dias}</span>
                      <span>{h.horario}</span>
                    </li>
                  ))}
              </ul>
            ) : (
              /* Si hay horario sin días, mostrar solo el horario */
              <div>
                {business.horarios
                  .filter((h) => h.horario.trim() !== '')
                  .map((h, i) => (
                    <p key={i} className="ubicacion-card-value">{h.horario}</p>
                  ))}
                <p className="horario-pendiente">
                  Los días de atención se publicarán próximamente.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
