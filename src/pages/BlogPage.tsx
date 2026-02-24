import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const categoryColors: Record<string, string> = {
  Sports: "text-gold bg-gold/10 border-gold/20",
  Entertainment: "text-purple-400 bg-purple-400/10 border-purple-400/20",
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

        {/* Posts grid — 2 columns for 2 posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="card-cinematic rounded-2xl overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-7 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  </div>
                </div>
              ))
            : posts?.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <article className="card-cinematic rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col">
                    {/* Cover Image */}
                    <div className="relative h-64 overflow-hidden">
                      {post.image_url ? (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-elevated flex items-center justify-center">
                          <span className="text-7xl">{post.emoji}</span>
                        </div>
                      )}
                      {/* Category badge overlay */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border backdrop-blur-sm ${categoryColors[post.category] || categoryColors.General}`}
                        >
                          {post.category}
                        </span>
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-extrabold text-foreground text-xl sm:text-2xl leading-snug mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/30 transition-colors"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {format(new Date(post.created_at), "MMM dd, yyyy")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.read_time}
                          </div>
                        </div>
                        <span className="text-primary text-sm font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
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
