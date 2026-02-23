import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Sports", "Movies", "Entertainment", "News", "Kids", "Music", "Documentary"];

const channels = [
  // ── Sports ──
  { name: "ESPN", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
  { name: "ESPN 2", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/ESPN2_logo.svg" },
  { name: "Sky Sports", category: "Sports", country: "🇬🇧 UK", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/en/d/d6/Sky_Sports_logo_2020.svg" },
  { name: "beIN Sports", category: "Sports", country: "🌍 International", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bein_sport_logo.svg/512px-Bein_sport_logo.svg.png" },
  { name: "Fox Sports", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fox_Sports_Logo.svg/512px-Fox_Sports_Logo.svg.png" },
  { name: "BT Sport", category: "Sports", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/BT_Sport_logo_2019.svg/512px-BT_Sport_logo_2019.svg.png" },
  { name: "Eurosport", category: "Sports", country: "🇪🇺 Europe", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eurosport_2015_logo.svg/512px-Eurosport_2015_logo.svg.png" },
  { name: "DAZN", category: "Sports", country: "🌍 International", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DAZN_logo.svg/512px-DAZN_logo.svg.png" },
  { name: "NBA TV", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/512px-NBA_TV.svg.png" },
  { name: "NFL Network", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/NFL_Network_logo.svg/512px-NFL_Network_logo.svg.png" },
  { name: "Tennis Channel", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tennis_Channel_2018.svg/512px-Tennis_Channel_2018.svg.png" },
  { name: "Golf Channel", category: "Sports", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Golf_Channel_2014.svg/512px-Golf_Channel_2014.svg.png" },
  { name: "SuperSport", category: "Sports", country: "🌍 Africa", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/3/38/SuperSport_logo.png" },
  { name: "TSN", category: "Sports", country: "🇨🇦 Canada", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/TSN_Logo.svg/512px-TSN_Logo.svg.png" },
  { name: "RMC Sport", category: "Sports", country: "🇫🇷 France", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_RMC_Sport_2018.svg/512px-Logo_RMC_Sport_2018.svg.png" },
  { name: "Movistar+", category: "Sports", country: "🇪🇸 Spain", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_Movistar%2B.svg/512px-Logo_Movistar%2B.svg.png" },

  // ── Movies ──
  { name: "HBO", category: "Movies", country: "🇺🇸 USA", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/512px-HBO_logo.svg.png" },
  { name: "HBO 2", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/512px-HBO_logo.svg.png" },
  { name: "Cinemax", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cinemax_%28Yellow%29.svg/512px-Cinemax_%28Yellow%29.svg.png" },
  { name: "Showtime", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Showtime.svg/512px-Showtime.svg.png" },
  { name: "Starz", category: "Movies", country: "🇺🇸 USA", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Starz_2016.svg/512px-Starz_2016.svg.png" },
  { name: "AMC", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AMC_logo_2019.svg/512px-AMC_logo_2019.svg.png" },
  { name: "FX", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FX_International_logo.svg/512px-FX_International_logo.svg.png" },
  { name: "TCM", category: "Movies", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Turner_Classic_Movies_logo.svg/512px-Turner_Classic_Movies_logo.svg.png" },
  { name: "Canal+", category: "Movies", country: "🇫🇷 France", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Canal%2B.svg/512px-Canal%2B.svg.png" },
  { name: "Sky Cinema", category: "Movies", country: "🇬🇧 UK", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Sky_Cinema_logo_2020.svg/512px-Sky_Cinema_logo_2020.svg.png" },

  // ── Entertainment ──
  { name: "BBC One", category: "Entertainment", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/BBC_One_logo.svg/512px-BBC_One_logo.svg.png" },
  { name: "BBC Two", category: "Entertainment", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/BBC_Two_logo.svg/512px-BBC_Two_logo.svg.png" },
  { name: "TNT", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TNT_Logo_2016.svg/512px-TNT_Logo_2016.svg.png" },
  { name: "TBS", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/TBS_logo_2016.svg/512px-TBS_logo_2016.svg.png" },
  { name: "USA Network", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_of_USA_Network.svg/512px-Logo_of_USA_Network.svg.png" },
  { name: "ABC", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ABC-2021-LOGO.svg/512px-ABC-2021-LOGO.svg.png" },
  { name: "NBC", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/512px-NBC_logo.svg.png" },
  { name: "CBS", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/CBS_logo_%282020%29.svg/512px-CBS_logo_%282020%29.svg.png" },
  { name: "FOX", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg/512px-Fox_Broadcasting_Company_logo_%282019%29.svg.png" },
  { name: "Bravo", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bravo_2017_logo.svg/512px-Bravo_2017_logo.svg.png" },
  { name: "Comedy Central", category: "Entertainment", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Comedy_Central_2018.svg/512px-Comedy_Central_2018.svg.png" },
  { name: "TF1", category: "Entertainment", country: "🇫🇷 France", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/TF1_logo_2013.svg/512px-TF1_logo_2013.svg.png" },
  { name: "RAI 1", category: "Entertainment", country: "🇮🇹 Italy", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rai_1_-_Logo_2016.svg/512px-Rai_1_-_Logo_2016.svg.png" },
  { name: "ZDF", category: "Entertainment", country: "🇩🇪 Germany", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/ZDF_logo.svg/512px-ZDF_logo.svg.png" },

  // ── News ──
  { name: "CNN", category: "News", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png" },
  { name: "Fox News", category: "News", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/512px-Fox_News_Channel_logo.svg.png" },
  { name: "MSNBC", category: "News", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/MSNBC_2015_logo.svg/512px-MSNBC_2015_logo.svg.png" },
  { name: "BBC News", category: "News", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/512px-BBC_News_2019.svg.png" },
  { name: "Sky News", category: "News", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Sky_News_logo_2022.svg/512px-Sky_News_logo_2022.svg.png" },
  { name: "Al Jazeera", category: "News", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/512px-Aljazeera_eng.svg.png" },
  { name: "CNBC", category: "News", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/512px-CNBC_logo.svg.png" },
  { name: "Bloomberg TV", category: "News", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/512px-Bloomberg_logo.svg.png" },
  { name: "France 24", category: "News", country: "🇫🇷 France", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/France_24_logo.svg/512px-France_24_logo.svg.png" },
  { name: "DW News", category: "News", country: "🇩🇪 Germany", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/DW_Logo_2012.svg/512px-DW_Logo_2012.svg.png" },
  { name: "NHK World", category: "News", country: "🇯🇵 Japan", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/NHK_World_-_Japan_Logo.svg/512px-NHK_World_-_Japan_Logo.svg.png" },
  { name: "Euronews", category: "News", country: "🇪🇺 Europe", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Euronews_2016_logo.svg/512px-Euronews_2016_logo.svg.png" },

  // ── Kids ──
  { name: "Cartoon Network", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png" },
  { name: "Disney Channel", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Disney_Channel_logo_%282014%29.svg/512px-Disney_Channel_logo_%282014%29.svg.png" },
  { name: "Disney Junior", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Disney_Junior_logo.svg/512px-Disney_Junior_logo.svg.png" },
  { name: "Nickelodeon", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nickelodeon_2023_logo_%28outline%29.svg/512px-Nickelodeon_2023_logo_%28outline%29.svg.png" },
  { name: "Nick Jr.", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nick_Jr._logo_2009.svg/512px-Nick_Jr._logo_2009.svg.png" },
  { name: "Boomerang", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Boomerang_logo_since_2015.svg/512px-Boomerang_logo_since_2015.svg.png" },
  { name: "PBS Kids", category: "Kids", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/512px-PBS_Kids_Logo.svg.png" },
  { name: "CBeebies", category: "Kids", country: "🇬🇧 UK", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/CBeebies_logo.svg/512px-CBeebies_logo.svg.png" },
  { name: "Disney XD", category: "Kids", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Disney_XD_-_2015.svg/512px-Disney_XD_-_2015.svg.png" },

  // ── Music ──
  { name: "MTV", category: "Music", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MTV_2021_%28brand_version%29.svg/512px-MTV_2021_%28brand_version%29.svg.png" },
  { name: "VH1", category: "Music", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/VH1_logonew.svg/512px-VH1_logonew.svg.png" },
  { name: "CMT", category: "Music", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/CMT_logo_2012.svg/512px-CMT_logo_2012.svg.png" },
  { name: "BET", category: "Music", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/BET_logo_2021.svg/512px-BET_logo_2021.svg.png" },
  { name: "TRACE Urban", category: "Music", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Trace_Urban.svg/512px-Trace_Urban.svg.png" },

  // ── Documentary ──
  { name: "National Geographic", category: "Documentary", country: "🌍 International", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/512px-Natgeologo.svg.png" },
  { name: "Discovery Channel", category: "Documentary", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Discovery_Channel_-_Logo_2019.svg/512px-Discovery_Channel_-_Logo_2019.svg.png" },
  { name: "Animal Planet", category: "Documentary", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Animal_Planet_logo_%282018%29.svg/512px-Animal_Planet_logo_%282018%29.svg.png" },
  { name: "History Channel", category: "Documentary", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/History_Channel_logo.svg/512px-History_Channel_logo.svg.png" },
  { name: "Nat Geo Wild", category: "Documentary", country: "🌍 International", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/512px-Natgeologo.svg.png" },
  { name: "BBC Earth", category: "Documentary", country: "🇬🇧 UK", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/BBC_Earth.svg/512px-BBC_Earth.svg.png" },
  { name: "Smithsonian Channel", category: "Documentary", country: "🇺🇸 USA", quality: "HD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Smithsonian_Channel.svg/512px-Smithsonian_Channel.svg.png" },
  { name: "Curiosity Stream", category: "Documentary", country: "🌍 International", quality: "4K", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/CuriosityStream.svg/512px-CuriosityStream.svg.png" },
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
              {/* Channel logo */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 group-hover:bg-white/90 transition-colors">
                <img src={ch.logo} alt={ch.name} className="w-full h-full object-contain" loading="lazy" />
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
