import { useState } from "react";
import { Mail, Bell } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (email.length > 255) {
      setError("Email is too long");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-20 section-elevated">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
          <Bell className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
          Stay <span className="text-gradient-red">Updated</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive deals, new channel announcements, 
          and IPTV tips — delivered straight to your inbox.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/30">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">You're subscribed! 🎉</p>
              <p className="text-sm text-muted-foreground">Check your inbox for a welcome email.</p>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="btn-cta px-8 py-4 rounded-xl font-bold whitespace-nowrap shadow-lg shadow-primary/20"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-primary text-sm">{error}</p>}
            <p className="text-muted-foreground text-sm">
              No spam, ever. Unsubscribe at any time.
            </p>
          </>
        )}

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {[
            { emoji: "🎯", text: "Exclusive subscriber deals" },
            { emoji: "📺", text: "New channel updates" },
            { emoji: "💡", text: "Setup tips & guides" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
              <span>{b.emoji}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
