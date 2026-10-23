import { business } from '../config/business';
import './Productos.css';

export default function Productos() {
  if (!business.productos.visible) return null;

  return (
    <section
      id="productos"
      className="productos section-wrapper"
      aria-labelledby="productos-heading"
    >
      <div className="section-inner">
        <div className="productos-card">
          <span className="productos-icon" aria-hidden="true">🧴</span>
          <span className="productos-badge">Próximamente</span>
          <p id="productos-heading" className="productos-anuncio">
            {business.productos.anuncio}
          </p>
        </div>
      </div>
    </section>
  );
}
