import { useMemo, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { parseChannelContent } from "@/lib/channelParser";
import channelContRaw from "@/assets/channel-cont.txt?raw";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const PAGE_SIZE = 48;
const TRIAL_MESSAGE = "Hi, I would like to try the free 24h trial.";

const ChannelListPage = () => {
  const { data: settings } = useSiteSettings();
  const whatsappUrl = `https://wa.me/${settings?.whatsapp_number || "1234567890"}?text=${encodeURIComponent(TRIAL_MESSAGE)}`;

  const { channels, regions } = useMemo(
    () => parseChannelContent(channelContRaw),
    []
  );

  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("NL");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const byRegion = channels.filter((ch) => ch.countryCode === activeRegion);
    if (!search.trim()) return byRegion;
    const q = search.toLowerCase();
    return byRegion.filter(
      (ch) =>
        ch.name.toLowerCase().includes(q) ||
        ch.category.toLowerCase().includes(q)
    );
  }, [channels, activeRegion, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const regionLabel = regions.find((r) => r.code === activeRegion)?.label ?? activeRegion;

  const loadMore = () => setVisibleCount((n) => n + PAGE_SIZE);

  return (
    <div className="min-h-screen section-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Zoek naar een zender..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        {/* Region tabs (horizontal scroll) */}
        <div className="overflow-x-auto pb-2 mb-6 scrollbar-thin">
          <div className="flex gap-2 min-w-max px-1">
            {regions.map((r) => (
              <button
                key={r.code}
                onClick={() => {
                  setActiveRegion(r.code);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeRegion === r.code
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {regionLabel} Zenders
                </h1>
                <p className="text-muted-foreground mt-1">
                  Geniet van de beste content uit {regionLabel}.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold text-sm">
                  {filtered.length} ZENDERS
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                [{activeRegion}] ALGEMEEN
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {visible.map((ch) => (
                <a
                  key={`${ch.countryCode}-${ch.name}`}
                  href="#"
                  className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-foreground hover:bg-surface transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm truncate">
                    [{ch.countryCode}] {ch.name}
                  </span>
                </a>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                Geen zenders gevonden voor deze regio of zoekopdracht.
              </p>
            )}

            {hasMore && filtered.length > 0 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={loadMore}
                  className="btn-cta inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20"
                >
                  + Meer zenders laden
                </button>
              </div>
            )}

            {filtered.length > 0 && (
              <p className="text-center text-sm text-muted-foreground mt-6">
                Toont {visible.length} van {filtered.length} zenders
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-border pt-12 mt-8">
          <p className="text-muted-foreground mb-4 text-lg">
            Klaar om toegang te krijgen tot alle zenders?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20"
          >
            Try free trial 24h now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChannelListPage;
