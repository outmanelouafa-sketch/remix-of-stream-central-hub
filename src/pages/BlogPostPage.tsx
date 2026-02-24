import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const categoryColors: Record<string, string> = {
  Sports: "text-gold bg-gold/10 border-gold/20",
  Entertainment: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  General: "text-muted-foreground bg-muted/50 border-border",
};

/** Simple markdown-ish renderer */
const renderContent = (content: string) => {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.includes("|") && lines[i + 1]?.match(/^\|[\s\-|]+\|$/)) {
      const headerCells = line.split("|").filter(Boolean).map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map((c) => c.trim()));
        i++;
      }
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-elevated">
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-muted-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{formatInline(line.slice(4))}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-2xl font-extrabold text-foreground mt-10 mb-4">{formatInline(line.slice(3))}</h2>);
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/5 rounded-r-lg text-muted-foreground italic">
          {formatInline(line.slice(2))}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 ml-1 list-decimal list-inside">
          {items.map((item, idx) => (
            <li key={idx} className="text-muted-foreground">{formatInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(<p key={i} className="text-muted-foreground leading-relaxed my-3">{formatInline(line)}</p>);
    }
    i++;
  }

  return elements;
};

const formatInline = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen section-dark pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-72 w-full rounded-2xl" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-5 w-60" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen section-dark pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">😔</p>
          <h1 className="text-2xl font-bold text-foreground mb-2">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-2 mt-4">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-dark pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Hero Image */}
        {post.image_url ? (
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 border border-border">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="h-40 bg-surface-elevated rounded-2xl flex items-center justify-center mb-8 border border-border">
            <span className="text-8xl">{post.emoji}</span>
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded border ${categoryColors[post.category] || categoryColors.General}`}>
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {format(new Date(post.created_at), "MMMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.read_time}
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">{post.title}</h1>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose-dark">{renderContent(post.content)}</div>
      </article>
    </div>
  );
};

export default BlogPostPage;
