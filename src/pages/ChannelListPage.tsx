import { Search, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Sports", "Movies", "Entertainment", "News", "Kids", "Music", "Documentary"];

const channels = [
  { name: "ESPN HD", category: "Sports", country: "🇺🇸 USA", quality: "HD" },
  { name: "Sky Sports", category: "Sports", country: "🇬🇧 UK", quality: "HD" },
  { name: "beIN Sports", category: "Sports", country: "🌍 International", quality: "4K" },
  { name: "HBO", category: "Movies", country: "🇺🇸 USA", quality: "HD" },
  { name: "Netflix (Simulcast)", category: "Movies", country: "🌍 International", quality: "4K" },
  { name: "CNN International", category: "News", country: "🇺🇸 USA", quality: "HD" },
  { name: "BBC One", category: "Entertainment", country: "🇬🇧 UK", quality: "HD" },
  { name: "Fox News", category: "News", country: "🇺🇸 USA", quality: "HD" },
  { name: "Cartoon Network", category: "Kids", country: "🌍 International", quality: "HD" },
  { name: "MTV Music", category: "Music", country: "🌍 International", quality: "HD" },
  { name: "National Geographic", category: "Documentary", country: "🌍 International", quality: "HD" },
  { name: "Animal Planet", category: "Documentary", country: "🌍 International", quality: "HD" },
  { name: "TNT Drama", category: "Entertainment", country: "🇺🇸 USA", quality: "HD" },
  { name: "Eurosport", category: "Sports", country: "🇪🇺 Europe", quality: "HD" },
  { name: "BT Sport", category: "Sports", country: "🇬🇧 UK", quality: "HD" },
  { name: "Discovery Channel", category: "Documentary", country: "🌍 International", quality: "HD" },
  { name: "Disney Channel", category: "Kids", country: "🌍 International", quality: "HD" },
  { name: "Al Jazeera English", category: "News", country: "🌍 International", quality: "HD" },
  { name: "Cinemax", category: "Movies", country: "🇺🇸 USA", quality: "HD" },
  { name: "VH1", category: "Music", country: "🇺🇸 USA", quality: "HD" },
];

const qualityColor: Record<string, string> = {
  "4K": "text-gold border-gold/30 bg-gold/10",
  "HD": "text-primary border-primary/30 bg-primary/10",
};

const ChannelListPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = channels.filter((ch) => {
    const matchCategory = activeCategory === "All" || ch.category === activeCategory;
    const matchSearch = ch.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen section-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Browse</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Channel <span className="text-gradient-red">List</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Browse our complete lineup of 17,000+ live channels from around the world.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search channels..."
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Showing <span className="text-foreground font-semibold">{filtered.length}</span> channels
            {activeCategory !== "All" && <span> in <span className="text-primary">{activeCategory}</span></span>}
            <span className="ml-1">— from a total of <span className="text-foreground font-semibold">17,000+</span></span>
          </p>
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filtered.map((ch) => (
            <div key={ch.name} className="card-cinematic rounded-xl p-4 flex items-center gap-4 group">
              {/* Channel icon */}
              <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center flex-shrink-0 text-xl font-bold text-primary group-hover:bg-primary/10 transition-colors">
                📺
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">{ch.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{ch.country}</p>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded border flex-shrink-0 ${qualityColor[ch.quality] || "text-muted-foreground border-border"}`}>
                {ch.quality}
              </span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No channels found matching your search.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center border-t border-border pt-12">
          <p className="text-muted-foreground mb-4 text-lg">
            Ready to access all <span className="text-foreground font-bold">17,000+</span> channels?
          </p>
          <a href="/#pricing" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChannelListPage;
