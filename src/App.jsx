import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'

// Lazy loaded components for performance
const Features = lazy(() => import('./components/Features'))
const SocialProof = lazy(() => import('./components/SocialProof'))
const Proceso = lazy(() => import('./components/Proceso'))
const DemoSection = lazy(() => import('./components/DemoSection'))
const Manifiesto = lazy(() => import('./components/Manifiesto'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))
const TelegramButton = lazy(() => import('./components/TelegramButton'))
import './index.css'

function App() {
  return (
    <div className="min-h-screen text-[#0B0B0F] selection:bg-[#4DA6FF]/30 relative">
      {/* Global Background Loop */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-white/80 z-10 backdrop-blur-[2px]" />
        <video 
          src="https://res.cloudinary.com/dcdqycfev/video/upload/v1773286199/kling_20260312_Image_to_Video_animate_be_2906_0_online-video-cutter.com_ayzs9m.mp4"
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-[#4DA6FF]/50">Cargando...</div>}>
          <Features />
          <SocialProof />
          <Proceso />
          <DemoSection />
          <Manifiesto />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <TelegramButton />
      </Suspense>
    </div>
  )
}

export default App
