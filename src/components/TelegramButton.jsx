import { MessageSquare } from 'lucide-react';

export default function TelegramButton() {
  return (
    <a
      href="https://wa.me/584140808496"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#4DA6FF] text-[#0B0B0F] rounded-full shadow-[0_0_30px_rgba(77,166,255,0.4)] hover:scale-110 hover:-translate-y-1 hover:bg-[#3b82f6] transition-all duration-300 group"
      aria-label="Hablar por WhatsApp"
    >
      <MessageSquare size={26} className="group-hover:animate-pulse" />
      
      {/* Tooltip / Ping indicator */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/90 border-2 border-[#4DA6FF]"></span>
      </span>
    </a>
  );
}
