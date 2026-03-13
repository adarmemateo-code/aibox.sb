import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { scale: 0.9, opacity: 0, y: 50 },
        { 
          scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="cta-content bg-[#4DA6FF] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(77,166,255,0.2)]">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold font-sans text-[#0B0B0F] mb-6 tracking-tight">
              Tu futuro con IA comienza aquí.
            </h2>
            
            <p className="text-[#0B0B0F]/80 text-lg md:text-xl font-medium mb-10 max-w-2xl">
              Únete a AIBOX y empieza a construir con inteligencia artificial. No te quedes atrás en la mayor revolución tecnológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a 
                href="https://wa.me/584140808496" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-[#0B0B0F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1E1E24] hover:-translate-y-1 transition-all shadow-xl"
              >
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </a>
              <a 
                href="https://wa.me/584140808496"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#0B0B0F] text-[#0B0B0F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0B0B0F]/10 hover:-translate-y-1 transition-all"
              >
                <Calendar size={20} />
                Reservar llamada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
