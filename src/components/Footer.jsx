import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 border-t border-[#0B0B0F]/10 bg-white/40 backdrop-blur-md" id="contacto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="text-2xl font-bold tracking-widest uppercase font-mono mb-4 text-[#0B0B0F]">AIBOX</div>
            <p className="text-[#0B0B0F]/60 font-sans max-w-xs leading-relaxed">
              Comunidad de inteligencia artificial. Aprende a crear el futuro hoy.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-[#4DA6FF] uppercase mb-6">Navegación</h4>
            <ul className="space-y-4 text-[#0B0B0F]/70 font-sans">
              <li><a href="#inicio" className="hover:text-[#0B0B0F] transition-colors">Inicio</a></li>
              <li><a href="#comunidad" className="hover:text-[#0B0B0F] transition-colors">Comunidad</a></li>
              <li><a href="#aprendizaje" className="hover:text-[#0B0B0F] transition-colors">Aprendizaje</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest text-[#4DA6FF] uppercase mb-6">Contacto</h4>
            <ul className="space-y-4 text-[#0B0B0F]/70 font-sans">
              <li><a href="https://wa.me/584140808496" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B0B0F] transition-colors">WhatsApp</a></li>
              <li><a href="https://wa.me/584140808496" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B0B0F] transition-colors">Reservar llamada</a></li>
            </ul>
            
            <h4 className="font-mono text-sm tracking-widest text-[#4DA6FF] uppercase mt-8 mb-6">Legal</h4>
            <ul className="space-y-4 text-[#0B0B0F]/70 font-sans text-sm">
              <li><a href="#" className="hover:text-[#0B0B0F] transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-[#0B0B0F] transition-colors">Términos</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#0B0B0F]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#0B0B0F]/50 text-sm font-sans">
            © {new Date().getFullYear()} AIBOX. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-xs font-mono text-[#0B0B0F]/70 bg-white px-4 py-2 rounded-full border border-[#0B0B0F]/10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Sistema activo · v1.0
          </div>
        </div>
      </div>
    </footer>
  );
}
