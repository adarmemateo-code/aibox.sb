import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Texts fade up stagger
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
      );
      
      // Image scale and 3d rotation
      gsap.fromTo('.hero-image',
        { scale: 0.9, rotationY: -15, rotationX: 10, opacity: 0 },
        { scale: 1, rotationY: 0, rotationX: 0, opacity: 1, duration: 1.8, ease: 'power2.inOut', delay: 0.8 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4DA6FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Column - Copy */}
          <div className="flex flex-col gap-6 z-10 max-w-xl">
            <h1 className="flex flex-col gap-2">
              <span className="hero-text font-sans font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight text-[#0B0B0F]">
                AIBOX encuentra
              </span>
              <span className="hero-text font-serif italic text-4xl sm:text-5xl md:text-7xl text-[#4DA6FF]">
                tu futuro.
              </span>
            </h1>
            
            <p className="hero-text text-lg md:text-xl text-[#0B0B0F]/70 font-sans leading-relaxed max-w-lg">
              Una comunidad donde aprendes a dominar la inteligencia artificial para crear contenido, automatizaciones, aplicaciones y negocios del futuro.
            </p>
            
            <div className="hero-text flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="https://wa.me/584140808496" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4DA6FF] text-[#0B0B0F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3b82f6] transition-all hover:shadow-[0_0_30px_-5px_#4DA6FF] hover:-translate-y-1 inline-block text-center w-full sm:w-auto"
              >
                Hablar por WhatsApp
              </a>
              <a 
                href="https://wa.me/584140808496"
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-[#0B0B0F]/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0B0B0F]/5 transition-all hover:border-[#0B0B0F]/40 text-[#0B0B0F] inline-block text-center w-full sm:w-auto"
              >
                Reservar llamada
              </a>
            </div>
          </div>

          {/* Right Column - Image & Abstract UI */}
          <div className="relative z-10 w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center perspective-[1000px]">
            <div className="hero-image relative w-full h-full rounded-3xl overflow-hidden glass-panel shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dcdqycfev/image/upload/v1773288283/untitled_Gemini_3_Nano_Banana_Pro__2026-03-12_03-59-17_u2qa7o.png" 
                alt="AI Platform" 
                fetchpriority="high"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
