import { business } from './config/business';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicio from './components/Servicio';
import Resultados from './components/Resultados';
import Productos from './components/Productos';
import Ubicacion from './components/Ubicacion';
import Contacto from './components/Contacto';

/** WhatsApp disponible solo si el número está configurado */
const showWhatsapp = business.whatsapp.trim() !== '';

export default function App() {
  return (
    <>
      <Navbar showWhatsapp={showWhatsapp} />
      <main id="contenido-principal" tabIndex={-1}>
        <Hero showWhatsapp={showWhatsapp} />
        <Servicio />
        <Resultados />
        <Productos />
        <Ubicacion />
        <Contacto showWhatsapp={showWhatsapp} />
      </main>
    </>
  );
}
