import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import heroFootball from "../assets/hero-football.jpg";
import heroF1 from "../assets/hero-f1.jpg";
import heroMMA from "../assets/hero-mma.jpg";
import heroBasketball from "../assets/hero-basketball.jpg";
import heroUCL from "../assets/hero-ucl.jpg";
import heroNBA from "../assets/hero-nba.jpg";
import heroEuro from "../assets/hero-euro.jpg";
import heroPremier from "../assets/hero-premier.jpg";
import heroTennis from "../assets/hero-tennis.jpg";
import heroBoxing from "../assets/hero-boxing.jpg";

interface SportChannel {
  id: number;
  name: string;
  category: string;
  quality: string;
  country: string;
  image: string;
}

const sportChannels = [
  { id: 1, name: "Football", category: "All Leagues · Live Matches", quality: "4K", country: "🌍 Global", image: heroFootball },
  { id: 2, name: "Champions League", category: "UEFA · Europe's Best", quality: "4K", country: "🇪🇺 Europe", image: heroUCL },
  { id: 3, name: "Premier League", category: "English Football · Top Tier", quality: "4K", country: "🇬🇧 UK", image: heroPremier },
  { id: 4, name: "Euro Cup", category: "UEFA Euro · Nations", quality: "4K", country: "🇪🇺 Europe", image: heroEuro },
  { id: 5, name: "Formula 1", category: "F1 · MotoGP · NASCAR", quality: "4K", country: "🌍 Global", image: heroF1 },
  { id: 6, name: "NBA", category: "Basketball · All-Star · Playoffs", quality: "4K", country: "🇺🇸 USA", image: heroNBA },
  { id: 7, name: "Basketball", category: "EuroLeague · FIBA · World Cup", quality: "4K", country: "🌍 Global", image: heroBasketball },
  { id: 8, name: "UFC / MMA", category: "UFC · Bellator · Fight Nights", quality: "HD", country: "🌍 Global", image: heroMMA },
  { id: 9, name: "Tennis", category: "Grand Slam · ATP · WTA", quality: "4K", country: "🌍 Global", image: heroTennis },
  { id: 10, name: "Boxing", category: "PPV · Title Fights · Live", quality: "HD", country: "🌍 Global", image: heroBoxing },
];

const allChannels = [...sportChannels, ...sportChannels]; // duplicate for infinite scroll

const nederlandSports = [
  { name: "Formula 1", desc: "Elke race live in 4K/8K", icon: "🏎️" },
  { name: "Eredivisie", desc: "Championnat des Pays-Bas de football · alle wedstrijden live", icon: "⚽" },
];

const SportsShowcase = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sports" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Sportzenders
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Kijk live naar je
              <span className="text-gradient-red"> favoriete sport</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Live vanaf de grootste sportzenders</span>
          </div>
        </div>
      </div>

      {/* Live voor Nederland — wat je live kunt kijken */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          🇳🇱 Live voor Nederland
        </p>
        <p className="text-muted-foreground text-sm mb-4 max-w-2xl">
          Formula 1 en Eredivisie (Nederlands voetbal) — live in 4K/8K.
        </p>
        <div className="flex flex-wrap gap-3">
          {nederlandSports.map((s) => (
            <div
              key={s.name}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated border border-border/50 hover:border-primary/40 hover:bg-surface-elevated/80 transition-colors"
            >
              <span className="text-lg" aria-hidden>{s.icon}</span>
              <div>
                <span className="font-semibold text-foreground text-sm block">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Row */}
      {loading ? (
        <div className="flex gap-4 px-8 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-44 aspect-[2/3] rounded-xl bg-surface-elevated animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="relative marquee-container overflow-hidden">
          <div className="flex animate-marquee gap-4 px-4 sm:px-6 lg:px-8 whitespace-nowrap py-2">
          {allChannels.map((channel, idx) => (
            <div
              key={`${channel.id}-${idx}`}
              className="flex-none w-44 sm:w-52 group"
            >
              {/* Channel Logo */}
              <div className="aspect-[2/3] relative overflow-hidden rounded-xl border border-border/50 bg-surface-elevated">
                <img 
                  src={channel.image} 
                  alt={`${channel.name} sport`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Quality Badge */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${
                  channel.quality === "4K" 
                    ? "bg-gold text-black" 
                    : "bg-primary text-primary-foreground"
                }`}>
                  {channel.quality}
                </div>
                
                {/* Country Flag */}
                <div className="absolute bottom-2 left-2 text-lg">
                  {channel.country}
                </div>
              </div>
              
              {/* Channel Info */}
              <div className="mt-3">
                <h3 className="font-bold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                  {channel.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {channel.category}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}


    </section>
  );
};

export default SportsShowcase;