import { useSiteSettings } from "@/hooks/useSiteSettings";

const TRIAL_MESSAGE = "Hi, I would like to try the free 24h trial.";

const WhatsAppButton = () => {
  const { data: settings } = useSiteSettings();
  const whatsappUrl = `https://wa.me/${settings?.whatsapp_number || "1234567890"}?text=${encodeURIComponent(TRIAL_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat via WhatsApp"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background border border-border text-foreground text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
        Chat met ons!
      </span>
      <div className="relative w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg shadow-whatsapp/40 hover:scale-110 transition-transform duration-200">
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
        <svg className="w-8 h-8 relative z-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.677 5.112 1.865 7.274L1 31l7.938-1.836A14.94 14.94 0 0 0 16 31c8.284 0 15-6.716 15-15S24.284 1 16 1z" fill="white" />
          <path d="M16 3.5C8.82 3.5 3.5 8.82 3.5 16c0 2.37.63 4.594 1.73 6.516l.284.48-1.207 4.41 4.524-1.188.464.275A12.46 12.46 0 0 0 16 28.5c7.18 0 12.5-5.32 12.5-12.5S23.18 3.5 16 3.5z" fill="#25D366" />
          <path d="M11.5 10c-.3-.667-.617-.68-.9-.693-.234-.01-.5-.01-.767-.01-.267 0-.7.1-1.067.5S7.5 11 7.5 13c0 2 1.467 3.933 1.667 4.2.2.267 2.833 4.533 6.967 6.167 3.45 1.363 4.133 1.093 4.883.993.75-.1 2.4-.983 2.733-1.933.333-.95.333-1.767.233-1.933-.1-.167-.367-.267-.767-.467s-2.4-1.183-2.767-1.317c-.367-.133-.633-.2-.9.2-.267.4-1.033 1.317-1.267 1.583-.233.267-.467.3-.867.1-.4-.2-1.683-.617-3.2-1.967-1.183-1.05-1.983-2.35-2.217-2.75-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.867-2.133-1.2-2.9z" fill="white" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
