import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

interface TVShow {
  id: number;
  name: string;
  image: { medium: string; original: string } | null;
  rating: { average: number | null };
  genres: string[];
  premiered: string | null;
  summary: string | null;
}

const ContentShowcase = () => {
  const [shows, setShows] = useState<TVShow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        // Fetch trending TV shows from TMDB
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/tv/week?api_key=c2db120199f1c712d84be0fa01957fe9"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("TMDB API Response:", data);
        
        // Transform TMDB data to match our TVShow interface
        const trendingShows: TVShow[] = data.results
          .filter((show: any) => show.poster_path && show.name)
          .map((show: any) => ({
            id: show.id,
            name: show.name,
            image: {
              medium: `https://image.tmdb.org/t/p/w342${show.poster_path}`,
              original: `https://image.tmdb.org/t/p/original${show.poster_path}`
            },
            rating: { average: show.vote_average || null },
            genres: show.genre_ids || [],
            premiered: show.first_air_date || null,
            summary: show.overview || null
          }))
          .slice(0, 30);

        setShows(trendingShows);
      } catch (error) {
        console.error("Error fetching trending shows:", error);
        setShows([]);
      } finally {
        setLoading(false);
      }
    };
    fetchShows();
  }, []);

  const displayShows = [...shows, ...shows]; // duplicate for seamless marquee loop

  return (
    <section id="content" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Contentbibliotheek
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Stream volledige seizoenen &
              <span className="text-gradient-red"> uitgelichte series</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Live vanaf TVMaze</span>
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
        <div className="relative marquee-container overflow-hidden">
          <div className="flex animate-marquee gap-4 px-4 sm:px-6 lg:px-8 whitespace-nowrap py-2">
          {displayShows.map((show, idx) => (
            <div
              key={`${show.id}-${idx}`}
              className="flex-none w-44 sm:w-52 group"
            >
              {/* Poster */}
              <div className="aspect-[2/3] relative overflow-hidden rounded-xl bg-surface-elevated">
                {show.image?.original ? (
                  <img
                    src={show.image.original}
                    alt={show.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-surface-elevated">
                    <span className="text-4xl">🎬</span>
                  </div>
                )}



                {/* Rating badge */}
                {show.rating?.average && (
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-gold text-xs font-bold px-2 py-0.5 rounded-full">
                    ★ {show.rating.average}
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="mt-2 px-1">
                <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {show.name}
                </p>
                {show.genres[0] && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {show.genres[0]}
                    {show.premiered ? ` · ${show.premiered.slice(0, 4)}` : ""}
                  </p>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      )}


    </section>
  );
};

export default ContentShowcase;
