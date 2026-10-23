import { useCallback, useRef, useState } from 'react';
import { business } from '../config/business';
import './Resultados.css';

export default function Resultados() {
  const items = business.galeriaBeforeAfter;

  // Ocultar sección si no hay fotografías
  if (items.length === 0) return null;

  return <ResultadosCarousel items={items} />;
}

// Componente interno separado para evitar Hook en condicional
function ResultadosCarousel({
  items,
}: {
  items: typeof business.galeriaBeforeAfter;
}) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Gestos táctiles
  const touchStartX = useRef<number>(0);
  const touchDeltaX = useRef<number>(0);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setIndex((i) => Math.min(items.length - 1, i + 1)),
    [items.length],
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current < -50) next();
    else if (touchDeltaX.current > 50) prev();
    touchDeltaX.current = 0;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section
      id="resultados"
      className="resultados section-wrapper"
      aria-labelledby="resultados-heading"
    >
      <div className="section-inner">
        <header className="resultados-header">
          <span className="section-label">Galería</span>
          <h2 id="resultados-heading" className="section-title">
            Un antes y un después
          </h2>
        </header>

        <div
          className="carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Fotos antes y después"
          onKeyDown={handleKeyDown}
        >
          <div
            className="carousel-track-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
              aria-atomic="true"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="carousel-slide"
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={`${i + 1} de ${items.length}`}
                  aria-hidden={i !== index}
                >
                  <div className="ba-pair">
                    <figure className="ba-item">
                      <img
                        src={item.antes}
                        alt={item.altAntes}
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                      <figcaption className="ba-label ba-label-antes">Antes</figcaption>
                    </figure>
                    <figure className="ba-item">
                      <img
                        src={item.despues}
                        alt={item.altDespues}
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                      <figcaption className="ba-label ba-label-despues">Después</figcaption>
                    </figure>
                  </div>
                  {item.leyenda && (
                    <p className="ba-leyenda">{item.leyenda}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={prev}
              disabled={index === 0}
              aria-label="Diapositiva anterior"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="carousel-dots" role="tablist" aria-label="Diapositivas">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir a diapositiva ${i + 1}`}
                  className={`carousel-dot${i === index ? ' active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn"
              onClick={next}
              disabled={index === items.length - 1}
              aria-label="Diapositiva siguiente"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
