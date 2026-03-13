import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Cpu, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Proceso() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Aprende',
      desc: 'Accede a formación sobre IA, automatizaciones y creación digital.',
      icon: <BookOpen size={32} className="text-[#4DA6FF]" />
    },
    {
      num: '02',
      title: 'Construye',
      desc: 'Crea proyectos reales: contenido, páginas web y aplicaciones.',
      icon: <Cpu size={32} className="text-[#4DA6FF]" />
    },
    {
      num: '03',
      title: 'Escala',
      desc: 'Convierte tus habilidades en oportunidades.',
      icon: <Rocket size={32} className="text-[#4DA6FF]" />
    }
  ];

  return (
    <section ref={containerRef} id="aprendizaje" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">El camino de AIBOX</h2>
          <p className="text-[#0B0B0F]/60 font-mono text-sm tracking-widest uppercase">Tres pasos hacia tu futuro</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[4rem] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#4DA6FF]/30 to-transparent pointer-events-none" />

          {steps.map((step, i) => (
            <div key={i} className="step-card flex flex-col items-center text-center p-8 rounded-3xl glass-panel relative group bg-white/40">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl border border-[#0B0B0F]/5 group-hover:border-[#4DA6FF]/30 group-hover:-translate-y-2 transition-all duration-300">
                {step.icon}
              </div>
              <span className="absolute top-6 right-6 font-mono text-xs text-[#0B0B0F]/20 tracking-widest">{step.num}</span>
              <h3 className="text-2xl font-bold font-sans mb-3">{step.title}</h3>
              <p className="text-[#0B0B0F]/60 text-sm md:text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
