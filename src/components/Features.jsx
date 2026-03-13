import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, Terminal, LineChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1: Typewriter Feed */}
          <div className="feature-card glass-panel rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-[#4DA6FF]/50 transition-colors">
            <div className="flex items-center gap-3 text-[#4DA6FF] font-mono mb-2">
              <Terminal size={20} />
              <span className="text-sm tracking-wider uppercase">Live Feed</span>
            </div>
            <div className="font-mono text-sm text-[#0B0B0F]/70 flex flex-col gap-3 min-h-[120px]">
              <p className="flex gap-2">
                <span className="text-[#4DA6FF]">&gt;</span> Nuevo miembro se unió a AIBOX
              </p>
              <p className="flex gap-2 opacity-80">
                <span className="text-[#4DA6FF]">&gt;</span> Automatización generada
              </p>
              <p className="flex gap-2 opacity-60">
                <span className="text-[#4DA6FF]">&gt;</span> Página web creada con IA
              </p>
              <p className="flex gap-2 opacity-40">
                <span className="text-[#4DA6FF]">&gt;</span> Aplicación publicada <span className="animate-pulse inline-block w-2 h-4 bg-[#4DA6FF] ml-1"></span>
              </p>
            </div>
          </div>

          {/* Feature 2: Mini Dashboard */}
          <div className="feature-card glass-panel rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-[#4DA6FF]/50 transition-colors">
             <div className="flex items-center gap-3 text-[#4DA6FF] font-mono mb-2">
              <LineChart size={20} />
              <span className="text-sm tracking-wider uppercase">Impacto AI</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-sans">1200+</span>
                <span className="text-xs text-[#0B0B0F]/50 uppercase tracking-widest mt-1">Miembros</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-sans">300+</span>
                <span className="text-xs text-[#0B0B0F]/50 uppercase tracking-widest mt-1">Autos</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-2xl font-bold font-sans text-[#4DA6FF]">500+</span>
                <span className="text-xs text-[#0B0B0F]/50 uppercase tracking-widest mt-1">Proyectos desplegados</span>
              </div>
            </div>
            {/* Simple SVG Chart Line */}
            <svg className="w-full h-12 mt-2 opacity-50" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 30 L 20 20 L 40 25 L 60 10 L 80 15 L 100 5" fill="none" stroke="#4DA6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Feature 3: Orbit Integrations */}
          <div className="feature-card glass-panel rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#4DA6FF]/50 transition-colors min-h-[250px]">
            {/* Center Core */}
            <div className="w-16 h-16 rounded-full bg-white border border-[#0B0B0F]/10 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(77,166,255,0.3)]">
              <Bot size={28} className="text-[#4DA6FF]" />
            </div>
            
            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#0B0B0F]/5 animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#0B0B0F]/5 animate-[spin_6s_linear_infinite_reverse]" />
            
             {/* Orbiting text nodes */}
             <div className="absolute top-1/4 left-1/4 text-xs font-mono text-[#0B0B0F]/80 bg-white/70 px-2 py-1 rounded backdrop-blur border border-[#0B0B0F]/5">ChatGPT</div>
             <div className="absolute bottom-1/4 right-1/4 text-xs font-mono text-[#0B0B0F]/80 bg-white/70 px-2 py-1 rounded backdrop-blur border border-[#0B0B0F]/5">Midjourney</div>
             <div className="absolute top-1/3 right-1/4 text-xs font-mono text-[#0B0B0F]/80 bg-white/70 px-2 py-1 rounded backdrop-blur border border-[#0B0B0F]/5">Make</div>
             <div className="absolute bottom-1/3 left-1/4 text-xs font-mono text-[#0B0B0F]/80 bg-white/70 px-2 py-1 rounded backdrop-blur border border-[#0B0B0F]/5">Zapier</div>
          </div>

        </div>
      </div>
    </section>
  );
}
