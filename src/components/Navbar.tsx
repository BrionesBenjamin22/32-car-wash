import { useState } from 'react';
import { business, urlWhatsapp, trackEvent } from '../config/business';
import './Navbar.css';

interface NavbarProps {
  showWhatsapp: boolean;
}

export default function Navbar({ showWhatsapp }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const waUrl = urlWhatsapp(business.whatsapp, business.mensajeWhatsapp);

  const handleWaClick = () => {
    trackEvent('whatsapp_click', { location: 'navbar', element_id: 'navbar-cta-wa' });
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo" aria-label="32 Car Wash – inicio">
          32 <span>Car Wash</span>
        </a>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navbar-nav"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="navbar-nav"
          className={`navbar-nav${open ? ' open' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#servicio" onClick={closeMenu}>Servicio</a>
          <a href="#resultados" onClick={closeMenu}>Resultados</a>
          <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        {showWhatsapp && (
          <div className="navbar-cta">
            <a
              id="navbar-cta-wa"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              onClick={handleWaClick}
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
