import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hello!%20I%20am%20interested%20in%20your%20IPTV%20subscription."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background border border-border text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
        Chat with us!
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg shadow-whatsapp/40 hover:scale-110 transition-transform duration-200">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
