import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const categoryColors: Record<string, string> = {
  Guides: "text-primary bg-primary/10 border-primary/20",
  Sports: "text-gold bg-gold/10 border-gold/20",
  Technology: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Reviews: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  General: "text-muted-foreground bg-muted/50 border-border",
};

const BlogPage = () => {
  const { data: posts, isLoading } = useBlogPosts();

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
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card-cinematic rounded-2xl overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))
            : posts?.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <article className="card-cinematic rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="h-48 bg-surface-elevated flex items-center justify-center border-b border-border group-hover:bg-surface-hover transition-colors">
                      <span className="text-6xl">{post.emoji}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded border ${categoryColors[post.category] || categoryColors.General}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      <h2 className="font-bold text-foreground text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {format(new Date(post.created_at), "MMM dd, yyyy")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.read_time}
                          </div>
                        </div>
                        <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
