import { useState, useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";
import heroFootball from "../assets/hero-football.jpg";
import heroF1 from "../assets/hero-f1.jpg";
import heroMMA from "../assets/hero-mma.jpg";
import heroBasketball from "../assets/hero-basketball.jpg";

interface SportChannel {
  id: number;
  name: string;
  category: string;
  quality: string;
  country: string;
  image: string;
}

const sportChannels = [
  { 
    id: 1, 
    name: "Football", 
    category: "Premier League · La Liga · UCL", 
    quality: "4K", 
    country: "🌍 Global", 
    image: heroFootball 
  },
  { 
    id: 2, 
    name: "Formula 1", 
    category: "F1 · MotoGP · NASCAR", 
    quality: "4K", 
    country: "🌍 Global", 
    image: heroF1 
  },
  { 
    id: 3, 
    name: "UFC / MMA", 
    category: "UFC · Bellator · Boxing", 
    quality: "HD", 
    country: "🌍 Global", 
    image: heroMMA 
  },
  { 
    id: 4, 
    name: "Basketball", 
    category: "NBA · EuroLeague · FIBA", 
    quality: "4K", 
    country: "🌍 Global", 
    image: heroBasketball 
  },
];

const allChannels = [...sportChannels, ...sportChannels]; // duplicate for infinite scroll

const SportsShowcase = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (loading) return;
    const container = scrollRef.current;
    if (!container) return;

    let position = 0;
    const speed = 0.8;

    const animate = () => {
      if (!isPausedRef.current && container) {
        position += speed;
        // Reset when we've scrolled half the content (we duplicate cards)
        if (position >= container.scrollWidth / 2) {
          position = 0;
        }
        container.scrollLeft = position;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [loading]);

  return (
    <section id="sports" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Sports Channels
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Watch Your Favorite
              <span className="text-gradient-red"> Sports Live</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Live from top sports networks</span>
          </div>
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
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden cursor-pointer select-none px-8"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
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
      )}

      {/* CTA */}
      <div className="text-center mt-12 px-4">
        <p className="text-muted-foreground mb-4">
          Access over{" "}
          <span className="text-foreground font-semibold">500+</span> sports channels
          in our complete sports library
        </p>
        <a
          href="#pricing"
          className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold"
        >
          Start Watching Sports
        </a>
      </div>
    </section>
  );
};

export default SportsShowcase;