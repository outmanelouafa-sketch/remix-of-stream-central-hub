const partners = [
  { name: "Netflix", logo: "NETFLIX" },
  { name: "HBO Max", logo: "HBO MAX" },
  { name: "Disney+", logo: "DISNEY+" },
  { name: "Prime Video", logo: "PRIME VIDEO" },
  { name: "Apple TV+", logo: "APPLE TV+" },
  { name: "Hulu", logo: "HULU" },
  { name: "ESPN", logo: "ESPN" },
  { name: "Sky Sports", logo: "SKY SPORTS" },
  { name: "BBC", logo: "BBC" },
  { name: "Fox Sports", logo: "FOX SPORTS" },
];

// Duplicate for infinite scroll
const allPartners = [...partners, ...partners];

const StreamingPartners = () => {
  return (
    <section className="py-12 section-elevated overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          All your favourite platforms — in one place
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {allPartners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[140px] h-12 px-6"
            >
              <span className="text-lg font-extrabold tracking-tighter text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-default">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPartners;
