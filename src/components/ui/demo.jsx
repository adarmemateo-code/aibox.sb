import { SplineScene } from "./spline";
import { Card } from "./card";
import { Spotlight } from "./spotlight";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] relative overflow-hidden my-12 group">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 transition-opacity duration-700 opacity-50 group-hover:opacity-100"
        fill="#4DA6FF"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#0B0B0F] to-[#4DA6FF] font-sans">
            Experiencias 3D
          </h1>
          <p className="mt-4 text-[#0B0B0F]/70 max-w-lg font-sans text-lg">
            Interactúa con el futuro de la web. AIBOX no solo te enseña a programar, te enseña a integrar experiencias tridimensionales alucinantes que capturan la atención.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] pointer-events-auto cursor-grab active:cursor-grabbing">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
