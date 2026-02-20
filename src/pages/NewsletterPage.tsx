import NewsletterSection from "@/components/NewsletterSection";
import { Bell } from "lucide-react";

const NewsletterPage = () => {
  return (
    <div className="min-h-screen section-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-6">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Stay Connected</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Subscribe to Our <span className="text-gradient-red">Newsletter</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get the latest news on channels, exclusive deals, and streaming tips delivered to your inbox.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { emoji: "🎁", title: "Exclusive Deals", desc: "Subscriber-only discount codes" },
            { emoji: "📺", title: "New Channels", desc: "Be first to know about additions" },
            { emoji: "💡", title: "Pro Tips", desc: "Maximize your streaming experience" },
          ].map((b) => (
            <div key={b.title} className="card-cinematic rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{b.emoji}</div>
              <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <NewsletterSection />
      </div>
    </div>
  );
};

export default NewsletterPage;
