import { useState, useEffect } from "react";
import { Star, TrendingUp, Loader2 } from "lucide-react";
import contentBgVideo from "@/assets/content-bg.mp4";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
}

const FALLBACK_CONTENT = [
  {
    id: 1,
    title: "The Handmaid's Tale",
    poster_path: null,
    vote_average: 8.4,
    overview: "Dystopian drama following the story of a totalitarian society.",
    genre: "Drama",
    emoji: "👁️",
  },
  {
    id: 2,
    title: "Wu-Tang: An American Saga",
    poster_path: null,
    vote_average: 8.1,
    overview: "The origin story of the Wu-Tang Clan hip-hop group.",
    genre: "Drama",
    emoji: "🎵",
  },
  {
    id: 3,
    title: "Snowfall",
    poster_path: null,
    vote_average: 8.0,
    overview: "Set in 1980s Los Angeles during the crack cocaine epidemic.",
    genre: "Crime",
    emoji: "❄️",
  },
  {
    id: 4,
    title: "Boston Strangler",
    poster_path: null,
    vote_average: 7.5,
    overview: "Two reporters uncover a shocking truth while investigating a serial killer.",
    genre: "Thriller",
    emoji: "🔍",
  },
  {
    id: 5,
    title: "Champions League Final",
    poster_path: null,
    vote_average: 9.5,
    overview: "Live coverage of Europe's biggest football event. All matches included.",
    genre: "Sports",
    emoji: "⚽",
  },
  {
    id: 6,
    title: "Formula 1: Drive to Survive",
    poster_path: null,
    vote_average: 8.7,
    overview: "Behind-the-scenes look at Formula 1 racing.",
    genre: "Documentary",
    emoji: "🏎️",
  },
];

const ContentShowcase = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      if (!apiKey) {
        // Use fallback data
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setMovies(data.results?.slice(0, 6) || []);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const displayContent = movies.length > 0 ? movies : FALLBACK_CONTENT;

  return (
    <section id="content" className="py-20 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          src={contentBgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Content Library</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Stream Full Season &
              <span className="text-gradient-red"> Featured Shows</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Updated weekly</span>
          </div>
        </div>

        {/* Content grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {displayContent.map((item: any) => {
              const title = item.title || item.name;
              const imgUrl = item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : null;
              const rating = item.vote_average;
              const emoji = item.emoji;

              return (
                <div key={item.id} className="content-card group cursor-pointer">
                  {/* Poster */}
                  <div className="aspect-[2/3] relative overflow-hidden rounded-lg bg-surface-elevated">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
                        <div className="text-center">
                          <div className="text-5xl mb-2">{emoji || "🎬"}</div>
                          <div className="text-xs text-muted-foreground px-2 text-center leading-tight">{item.genre || "Content"}</div>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 card-overlay flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-gold text-xs font-bold">
                          {typeof rating === 'number' ? rating.toFixed(1) : rating}
                        </span>
                      </div>
                      <h3 className="text-foreground font-bold text-xs leading-tight line-clamp-2">{title}</h3>
                    </div>
                  </div>

                  {/* Title below */}
                  <div className="mt-2 px-1">
                    <p className="text-xs font-medium text-muted-foreground truncate group-hover:text-foreground transition-colors">
                      {title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Access over <span className="text-foreground font-semibold">100,000+</span> titles in our complete VOD library
          </p>
          <a href="#pricing" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold">
            Start Streaming Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
