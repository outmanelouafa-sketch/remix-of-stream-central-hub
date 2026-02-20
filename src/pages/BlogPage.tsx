import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Top 10 IPTV Apps for Android in 2024",
    excerpt: "Discover the best IPTV players to get the most out of your subscription on Android devices...",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "Guides",
    emoji: "📱",
  },
  {
    id: 2,
    title: "How to Watch Champions League on IPTV",
    excerpt: "Complete guide to accessing all UEFA Champions League matches through your IPTV subscription...",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    category: "Sports",
    emoji: "⚽",
  },
  {
    id: 3,
    title: "4K Streaming: Everything You Need to Know",
    excerpt: "Learn about the requirements for a perfect 4K streaming experience and how to optimize your setup...",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    category: "Technology",
    emoji: "🖥️",
  },
  {
    id: 4,
    title: "PrimeIPTV vs Competitors: Full Comparison",
    excerpt: "We compare PrimeIPTV with major competitors across price, channel count, stability, and support...",
    date: "Jan 28, 2025",
    readTime: "8 min read",
    category: "Reviews",
    emoji: "📊",
  },
  {
    id: 5,
    title: "Setting Up IPTV on Smart TV: Step by Step",
    excerpt: "A comprehensive guide for installing and configuring IPTV on Samsung, LG, and Sony Smart TVs...",
    date: "Jan 20, 2025",
    readTime: "7 min read",
    category: "Guides",
    emoji: "📺",
  },
  {
    id: 6,
    title: "Best Sports Channels Available on IPTV",
    excerpt: "Complete breakdown of all sports channels available — from football and basketball to tennis and F1...",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Sports",
    emoji: "🏆",
  },
];

const categoryColors: Record<string, string> = {
  Guides: "text-primary bg-primary/10 border-primary/20",
  Sports: "text-gold bg-gold/10 border-gold/20",
  Technology: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Reviews: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen section-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Base</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            IPTV <span className="text-gradient-red">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tips, guides, and news for the best IPTV streaming experience.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="card-cinematic rounded-2xl overflow-hidden group cursor-pointer">
              {/* Thumbnail */}
              <div className="h-48 bg-surface-elevated flex items-center justify-center border-b border-border group-hover:bg-surface-hover transition-colors">
                <span className="text-6xl">{post.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${categoryColors[post.category] || "text-muted-foreground border-border"}`}>
                    {post.category}
                  </span>
                </div>

                <h2 className="font-bold text-foreground text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
