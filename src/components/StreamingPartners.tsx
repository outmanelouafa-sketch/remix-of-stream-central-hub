const partners = [
  { name: "DAZN", domain: "dazn.com", hoverColor: "#00E5FF", hoverBg: "rgba(0,229,255,0.10)" },
  { name: "SKY Sports", domain: "skysports.com", hoverColor: "#00A6E0", hoverBg: "rgba(0,166,224,0.12)" },
  { name: "beIN Sports", domain: "beinsports.com", hoverColor: "#8B0000", hoverBg: "rgba(139,0,0,0.15)" },
  { name: "Disney+", domain: "disneyplus.com", hoverColor: "#1A78C2", hoverBg: "rgba(26,120,194,0.12)" },
  { name: "Prime Video", domain: "primevideo.com", hoverColor: "#00A8E1", hoverBg: "rgba(0,168,225,0.10)" },
  { name: "Apple TV+", domain: "tv.apple.com", hoverColor: "#FFFFFF", hoverBg: "rgba(255,255,255,0.08)" },
  { name: "Netflix", domain: "netflix.com", hoverColor: "#E50914", hoverBg: "rgba(229,9,20,0.15)" },
  { name: "Fox Sports", domain: "foxsports.com", hoverColor: "#0072CE", hoverBg: "rgba(0,114,206,0.12)" },
  { name: "BBC", domain: "bbc.com", hoverColor: "#BB1919", hoverBg: "rgba(187,25,25,0.12)" },
];

const allPartners = [...partners, ...partners];

const PartnerCard = ({ partner }: { partner: (typeof partners)[0] }) => {
  return (
    <div
      className="group/card flex items-center justify-center min-w-[160px] h-[72px] px-6 rounded-2xl border border-border/50 transition-all duration-300 cursor-default flex-shrink-0 bg-surface-elevated"
      style={{
        ["--hover-color" as string]: partner.hoverColor,
        ["--hover-bg" as string]: partner.hoverBg,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = partner.hoverBg;
        (e.currentTarget as HTMLElement).style.borderColor = partner.hoverColor + "60";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${partner.hoverColor}30`;
        const span = (e.currentTarget as HTMLElement).querySelector("span.logo-text") as HTMLElement;
        if (span) span.style.color = partner.hoverColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "";
        (e.currentTarget as HTMLElement).style.borderColor = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
        const span = (e.currentTarget as HTMLElement).querySelector("span.logo-text") as HTMLElement;
        if (span) span.style.color = "";
      }}
    >
      <img
        src={`https://logo.clearbit.com/${partner.domain}`}
        alt={partner.name}
        className="h-8 object-contain transition-all duration-300 filter group-hover/card:brightness-110"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          const parent = img.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="logo-text font-black text-muted-foreground text-lg">${partner.name}</span>`;
          }
        }}
      />
    </div>
  );
};

const StreamingPartners = () => {
  return (
    <section className="py-14 section-elevated overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Streamingpartners &amp; beschikbare netwerken
        </p>
      </div>

      {/* Marquee — pauses on hover */}
      <div className="relative marquee-container">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[hsl(var(--surface-elevated))] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[hsl(var(--surface-elevated))] to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap gap-4 px-4">
          {allPartners.map((partner, i) => (
            <PartnerCard key={i} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPartners;
