import { Check, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "1 Month",
    price: "€9.00",
    period: "/ month",
    channels: "17,000+",
    vod: "100,000+",
    devices: "4 Devices",
    featured: false,
    badge: null,
  },
  {
    name: "6 Months",
    price: "€29.00",
    period: "/ 6 months",
    channels: "17,000+",
    vod: "100,000+",
    devices: "4 Devices",
    featured: false,
    badge: "Save 46%",
  },
  {
    name: "12 Months",
    price: "€45.00",
    period: "/ year",
    channels: "17,000+",
    vod: "100,000+",
    devices: "4 Devices",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "24 Months",
    price: "€65.00",
    period: "/ 2 years",
    channels: "17,000+",
    vod: "100,000+",
    devices: "4 Devices",
    featured: false,
    badge: "Save 70%",
  },
];

const features = [
  "17,000+ Live Channels",
  "100,000+ VOD Library",
  "4K / FHD / HD Quality",
  "Sports & PPV Events",
  "EPG Guide Included",
  "Anti-Freeze Technology",
  "Multi-Device Support",
  "24/7 Premium Support",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 section-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pricing Plans</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Choose Your
            <span className="text-gradient-red"> Subscription</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            All plans include the full channel list, VOD library, and premium support. No hidden fees.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative flex flex-col p-6 ${plan.featured ? "pricing-card-featured" : ""}`}
            >
              {/* Badge */}
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

              {/* Plan name */}
              <div className="mb-6 pt-2">
                <h3 className={`text-lg font-bold mb-1 ${plan.featured ? "text-primary" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                </div>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-3 mb-6">
                {[
                  plan.channels + " Channels",
                  plan.vod + " VOD",
                  plan.devices,
                  "Premium Support",
                  "Anti-Freeze",
                  "4K Quality",
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

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.featured
                    ? "btn-cta shadow-lg shadow-primary/30"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border hover:border-primary/30"
                }`}
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>

        {/* All plans include */}
        <div className="border border-border rounded-2xl p-8 bg-card">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-foreground text-lg">All plans include</h3>
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
