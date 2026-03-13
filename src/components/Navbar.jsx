import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    gsap.fromTo('.navbar-island',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav 
        className={`navbar-island flex items-center justify-between px-6 py-3 rounded-[3rem] transition-all duration-500 w-full max-w-5xl ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl border border-[#0B0B0F]/10 shadow-2xl' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dcdqycfev/image/upload/v1770406886/photo_2026-02-06_15-40-45-Photoroom_hogkru.png" 
            alt="AIBOX" 
            className="h-[180px] w-auto mix-blend-multiply drop-shadow-xl scale-[1.3] lg:scale-[1.5] origin-left -ml-2" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0B0B0F]/70">
          <a href="#inicio" className="hover:text-[#0B0B0F] transition-colors">Inicio</a>
          <a href="#comunidad" className="hover:text-[#0B0B0F] transition-colors">Comunidad</a>
          <a href="#aprendizaje" className="hover:text-[#0B0B0F] transition-colors">Aprendizaje</a>
          <a href="#contacto" className="hover:text-[#0B0B0F] transition-colors">Contacto</a>
        </div>

        <a 
          href="https://wa.me/584140808496" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-[#4DA6FF] hover:bg-[#3b82f6] text-[#0B0B0F] px-5 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">Hablar por WhatsApp</span>
        </a>
      </nav>
    </div>
  );
}
