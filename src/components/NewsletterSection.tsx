import { useState } from "react";
import { Mail, Bell } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Vul een geldig e-mailadres in");
      return;
    }
    if (email.length > 255) {
      setError("E-mailadres is te lang");
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
          Blijf <span className="text-gradient-red">op de hoogte</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Schrijf je in voor onze nieuwsbrief voor exclusieve deals, nieuwe zenderaankondigingen 
          en IPTV-tips — rechtstreeks in je inbox.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/30">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground">Je bent ingeschreven! 🎉</p>
              <p className="text-sm text-muted-foreground">Controleer je inbox voor een welkomstmail.</p>
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
                placeholder="Vul je e-mailadres in"
                className="flex-1 px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="btn-cta px-8 py-4 rounded-xl font-bold whitespace-nowrap shadow-lg shadow-primary/20"
              >
                Inschrijven
              </button>
            </form>
            {error && <p className="text-primary text-sm">{error}</p>}
            <p className="text-muted-foreground text-sm">
              Geen spam, ooit. Uitschrijven kan op elk moment.
            </p>
          </>
        )}

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {[
            { emoji: "🎯", text: "Exclusieve deals voor abonnees" },
            { emoji: "📺", text: "Updates over nieuwe zenders" },
            { emoji: "💡", text: "Installatietips & handleidingen" },
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
