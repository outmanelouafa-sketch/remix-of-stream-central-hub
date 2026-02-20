import { Zap, Shield, Headphones, Globe, Tv, MonitorPlay } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fastest IPTV Service",
    description: "Ultra-fast servers with 99.9% uptime guarantee. Zero buffering, zero lag — just pure, seamless streaming.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: MonitorPlay,
    title: "High Streaming Quality",
    description: "4K, Full HD, and HD streams available. Crystal-clear picture quality for movies, sports, and live TV.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "Live User Support",
    description: "24/7 customer support via WhatsApp, Telegram, and email. We're always here when you need us.",
    color: "text-telegram",
    bg: "bg-telegram/10",
  },
  {
    icon: Globe,
    title: "Global Content Library",
    description: "Access channels from 100+ countries. International, premium, sports, news — everything in one subscription.",
    color: "text-whatsapp",
    bg: "bg-whatsapp/10",
  },
  {
    icon: Tv,
    title: "Multi-Device Support",
    description: "Stream on Smart TV, Android, iOS, PC, MAG, and more. Connect up to 4 devices simultaneously.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected. Anonymous streaming with no logs kept. Enjoy complete privacy.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="features" className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why PrimeIPTV</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Everything You Need to
            <span className="text-gradient-red"> Stream Perfectly</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver a premium streaming experience with cutting-edge technology and unmatched customer support.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card-cinematic rounded-2xl p-6 group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
