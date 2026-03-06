import { Check, Star, Crown } from "lucide-react";
import { usePricingPlans } from "@/hooks/usePricingPlans";
import { Skeleton } from "@/components/ui/skeleton";

const features = [
  "43.000+ live zenders",
  "200.000+ VOD-titels",
  "4K/8K Ultra HD-kwaliteit",
  "Sport- & PPV-evenementen",
  "EPG-gids inbegrepen",
  "Anti-freeze technologie",
  "Ondersteuning voor meerdere apparaten",
  "24/7 premium ondersteuning",
];

const PricingSection = () => {
  const { data: plans = [], isLoading } = usePricingPlans();

  return (
    <section id="pricing" className="py-20 section-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pakketten</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Kies je
            <span className="text-gradient-red"> abonnement</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Alle pakketten bevatten de volledige zenderlijst, VOD-bibliotheek en premium ondersteuning. Geen verborgen kosten.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-[420px] rounded-2xl" />
              ))
            : plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`pricing-card relative flex flex-col p-6 ${plan.featured ? "pricing-card-featured" : ""}`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      plan.featured
                        ? "bg-primary text-primary-foreground animate-pulse-red"
                        : "bg-secondary text-foreground"
                    }`}>
                      {plan.featured && <Crown className="w-3 h-3 inline mr-1" />}
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6 pt-2">
                    <h3 className={`text-lg font-bold mb-1 ${plan.featured ? "text-primary" : "text-foreground"}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-6">
                    {[
                      plan.channels + " zenders",
                      plan.vod + " VOD-titels",
                      "4K/8K Ultra HD-kwaliteit",
                      "Premium ondersteuning",
                      "Anti-freeze technologie",
                      "Streamen in hoge kwaliteit",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.featured ? "bg-primary/20" : "bg-secondary"
                        }`}>
                          <Check className={`w-3 h-3 ${plan.featured ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      plan.featured
                        ? "btn-cta shadow-lg shadow-primary/30"
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border hover:border-primary/30"
                    }`}
                  >
                    BESTEL NU
                  </button>
                </div>
              ))}
        </div>

        {/* All plans include */}
        <div className="border border-border rounded-2xl p-8 bg-card">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-foreground text-lg">Alle pakketten bevatten</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
