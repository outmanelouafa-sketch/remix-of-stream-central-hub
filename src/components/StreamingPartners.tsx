const partners = [
  { name: "ESPN", logo: "ESPN", style: "font-black text-white text-xl" },
  { name: "DAZN", logo: "DAZN", style: "font-black text-white text-xl" },
  { name: "SKY Sports", logo: "SKY Sports", style: "font-bold text-white text-base", prefix: "SKY", prefixStyle: "bg-white text-black px-1 rounded text-xs mr-1" },
  { name: "beIN Sports", logo: "beIN Sports", style: "font-black text-white text-xl italic" },
  { name: "HBO Max", logo: "HBOmax", style: "font-black text-white text-xl" },
  { name: "Disney+", logo: "Disney+", style: "font-bold text-white text-xl italic" },
  { name: "Prime Video", logo: "prime video", style: "font-light text-white text-sm tracking-wide" },
  { name: "Hulu", logo: "hulu", style: "font-semibold text-white text-xl" },
  { name: "Apple TV+", logo: "Apple TV+", style: "font-semibold text-white text-base" },
  { name: "Netflix", logo: "NETFLIX", style: "font-black text-red-bright text-xl tracking-tight" },
  { name: "Fox Sports", logo: "FOX Sports", style: "font-black text-white text-xl" },
  { name: "BBC", logo: "BBC", style: "font-black text-white text-xl" },
];

// Duplicate for infinite scroll
const allPartners = [...partners, ...partners];

const StreamingPartners = () => {
  return (
    <section className="py-14 section-elevated overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Streaming Partners &amp; Available Networks
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {allPartners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-[72px] px-6 rounded-2xl bg-surface-elevated border border-border/50 hover:border-border transition-colors duration-300 cursor-default flex-shrink-0"
            >
              {partner.prefix ? (
                <span className={partner.style}>
                  <span className={partner.prefixStyle}>{partner.prefix}</span>
                  {partner.logo.replace(partner.prefix, "")}
                </span>
              ) : (
                <span className={partner.style}>{partner.logo}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPartners;
