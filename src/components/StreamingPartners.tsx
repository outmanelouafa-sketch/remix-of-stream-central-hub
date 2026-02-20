const partners = [
  { name: "ESPN", logo: "ESPN", hoverColor: "#FF0000", hoverBg: "rgba(255,0,0,0.12)" },
  { name: "DAZN", logo: "DAZN", hoverColor: "#00E5FF", hoverBg: "rgba(0,229,255,0.10)" },
  { name: "SKY Sports", logo: "SKY Sports", prefix: "SKY", hoverColor: "#00A6E0", hoverBg: "rgba(0,166,224,0.12)" },
  { name: "beIN Sports", logo: "beIN Sports", hoverColor: "#8B0000", hoverBg: "rgba(139,0,0,0.15)" },
  { name: "HBO Max", logo: "HBOmax", hoverColor: "#B537F2", hoverBg: "rgba(181,55,242,0.12)" },
  { name: "Disney+", logo: "Disney+", hoverColor: "#1A78C2", hoverBg: "rgba(26,120,194,0.12)" },
  { name: "Prime Video", logo: "prime video", hoverColor: "#00A8E1", hoverBg: "rgba(0,168,225,0.10)" },
  { name: "Hulu", logo: "hulu", hoverColor: "#1CE783", hoverBg: "rgba(28,231,131,0.10)" },
  { name: "Apple TV+", logo: "Apple TV+", hoverColor: "#FFFFFF", hoverBg: "rgba(255,255,255,0.08)" },
  { name: "Netflix", logo: "NETFLIX", hoverColor: "#E50914", hoverBg: "rgba(229,9,20,0.15)" },
  { name: "Fox Sports", logo: "FOX Sports", hoverColor: "#0072CE", hoverBg: "rgba(0,114,206,0.12)" },
  { name: "BBC", logo: "BBC", hoverColor: "#BB1919", hoverBg: "rgba(187,25,25,0.12)" },
];

const allPartners = [...partners, ...partners];

const StreamingPartners = () => {
  return (
    <section className="py-14 section-elevated overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Streaming Partners &amp; Available Networks
        </p>
      </div>

      {/* Marquee — pauses on hover */}
      <div className="relative marquee-container">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[hsl(var(--surface-elevated))] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[hsl(var(--surface-elevated))] to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap gap-4 px-4">
          {allPartners.map((partner, i) => (
            <div
              key={i}
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
              {partner.prefix ? (
                <span className="logo-text font-bold text-white text-base transition-colors duration-300 flex items-center gap-1">
                  <span className="bg-white text-black px-1.5 py-0.5 rounded text-xs font-black">{partner.prefix}</span>
                  Sports
                </span>
              ) : (
                <span className="logo-text font-black text-muted-foreground text-lg transition-colors duration-300">
                  {partner.logo}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPartners;
