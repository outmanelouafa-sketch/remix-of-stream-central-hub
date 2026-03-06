import { Zap, Shield, Headphones, Globe, Tv, MonitorPlay } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Snelste IPTV-service",
    description: "Supersnelle servers met 99,9% uptimegarantie. Geen buffering, geen vertraging — alleen maar vloeiend streamen.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: MonitorPlay,
    title: "Hoge streamkwaliteit",
    description: "4K-, Full HD- en HD-streams beschikbaar. Kristalhelder beeld voor films, sport en live tv.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "Live klantenservice",
    description: "24/7 ondersteuning via WhatsApp, Telegram en e-mail. We zijn er altijd wanneer je ons nodig hebt.",
    color: "text-telegram",
    bg: "bg-telegram/10",
  },
  {
    icon: Globe,
    title: "Wereldwijde contentbibliotheek",
    description: "Toegang tot zenders uit meer dan 100 landen. Internationale, premium-, sport- en nieuwszenders — alles in één abonnement.",
    color: "text-whatsapp",
    bg: "bg-whatsapp/10",
  },
  {
    icon: Tv,
    title: "Ondersteuning voor meerdere apparaten",
    description: "Stream op Smart TV, Android, iOS, pc, MAG en meer. Verbind tot 4 apparaten tegelijk.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Shield,
    title: "Veilig & privé",
    description: "Je gegevens zijn beschermd. Anoniem streamen zonder logs. Geniet van volledige privacy.",
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
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Waarom Best IPTV Deals</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Alles wat je nodig hebt
            <span className="text-gradient-red"> voor perfect streamen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wij leveren een premium streamingervaring met de nieuwste technologie en ongeëvenaarde klantenservice.
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
