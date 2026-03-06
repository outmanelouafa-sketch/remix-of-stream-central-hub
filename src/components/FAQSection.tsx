import { useState, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const FAQSection = () => {
  const { data: settings } = useSiteSettings();
  const whatsappNumber = settings?.whatsapp_number || "1234567890";

  const faqs = useMemo(
    () => [
      {
        question: "Heb ik een VPN nodig om IPTV te gebruiken?",
        answer:
          "Nee, je hebt geen VPN nodig om IPTV te kijken. Wij gebruiken geavanceerde oplossingen om blokkades van je provider te omzeilen.",
      },
      {
        question: "Kan ik live programma's opnemen?",
        answer:
          "Als je apparaat het ondersteunt, kun je elk programma opnemen en later bekijken wanneer het je uitkomt — zonder extra kosten.",
      },
      {
        question: "Hoe ontvang ik mijn abonnement?",
        answer: `Levering gaat per e-mail en WhatsApp binnen 4 uur. Heb je vragen? Neem contact met ons op via WhatsApp op +${whatsappNumber}.`,
      },
      {
        question: "Op welke apparaten kan ik kijken?",
        answer:
          "De service werkt op verschillende apparaten: Smart TV, Android Box, iPhone/iPad en Android-telefoons en -tablets, Chromecast, Amazon Fire TV en meer.",
      },
      {
        question: "Op hoeveel apparaten kan ik het gebruiken?",
        answer:
          "Je kunt je account op meerdere apparaten installeren, maar je kunt tegelijk op één apparaat kijken. Wil je op meer apparaten tegelijk kijken? Neem dan eerst contact met ons op via WhatsApp.",
      },
      {
        question: "Hebben jullie live sport zoals F1, Champions League en meer?",
        answer:
          "Zeker! We zenden alle grote live sportevenementen uit: Formule 1, UEFA Champions League, Premier League, La Liga, Serie A, NBA, UFC, tennis Grand Slams, boks-PPV's en meer — allemaal in 8K/4K-kwaliteit zonder bufferen.",
      },
    ],
    [whatsappNumber]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 section-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Veelgestelde{" "}
            <span className="text-gradient-red">vragen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alles wat je moet weten over Best IPTV Deals. Kun je het antwoord niet vinden?
            Chat dan met ons supportteam.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-surface hover:border-border/80 hover:bg-surface-elevated"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors duration-200 pr-4 ${
                      isOpen ? "text-primary" : "text-foreground group-hover:text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-surface-elevated text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-border/40 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
