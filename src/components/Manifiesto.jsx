import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifiesto() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.manifesto-text',
        { y: 80, opacity: 0, scale: 0.95 },
        { 
          y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 flex items-center justify-center relative overflow-hidden bg-white/20 backdrop-blur-sm border-y border-[#0B0B0F]/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[#4DA6FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl text-center z-10">
        <p className="manifesto-text text-[#0B0B0F]/50 text-base md:text-xl font-mono uppercase tracking-widest mb-8">
          "La mayoría ve la inteligencia artificial como una amenaza."
        </p>
        
        <h2 className="manifesto-text text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight text-[#0B0B0F]">
          Nosotros la vemos como la herramienta para construir un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA6FF] to-blue-600">mundo mejor.</span>
        </h2>
      </div>
    </section>
  );
}
