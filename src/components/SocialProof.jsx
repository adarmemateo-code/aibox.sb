import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.metric-item',
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: '1200+', label: 'Creadores aprendiendo IA' },
    { value: '50+', label: 'Automatizaciones' },
    { value: '20+', label: 'Herramientas dominadas' },
    { value: '100%', label: 'Mentalidad de futuro' },
  ];

  return (
    <section ref={containerRef} className="py-24 border-y border-[#0B0B0F]/5 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-item flex flex-col items-center text-center space-y-2">
              <span className="text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0B0B0F] to-[#4DA6FF]">
                {metric.value}
              </span>
              <span className="text-sm md:text-base font-mono text-[#0B0B0F]/60 tracking-wide uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
